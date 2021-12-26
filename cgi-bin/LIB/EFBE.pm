package EFBE;

use strict; use warnings; use diagnostics; use EF;
our($Crd,$Pmt,$Sys,$EFSys); $Crd=&EF::QS(); if($Crd) {
    # Need to check if $Crd is not STDIN - if yes, we must treat it as our data file, which is bigger than 50MB!
    
    
    my @a=unpack("C*",$Crd); $Crd=EF::Bin->new(\@a,"PX");
    if(&EF::AT($Crd) ne "") { $Pmt=$Crd->{'V'}; $Crd=$Crd->{'C'}; }
    else { undef $Crd; undef $Pmt; }
}
$EFSys="$EF::Root/EF";

sub VL {
    my $vi; my @k=keys %{$_[1]};
    foreach my $idx(@k) {
        my $pp=$_[0]->{$idx};
        my $vf=$_[1]->{$idx};
        my $vt=$vf->{'_VT_'};

        if($vt eq "N") {
            if(&EF::AT($pp) ne "N") { die "E100"; }
            if(defined $vf->{'min'} && $pp<$vf->{'min'}) { die "E100"; }
            if(defined $vf->{'max'} && $pp>$vf->{'max'}) { die "E100"; }
            if(defined $vf->{'stp'}) { $_[0]->{$idx}=&EF::round($pp/$vf->{'stp'})*$vf->{'stp'}; }
        }
        elsif($vt eq "S") {
            if(defined $vf->{'req'} && $pp eq "") { die "E100"; }
            if(defined $vf->{'len'} && length($pp)>$vf->{'len'}) { die "E100"; }
            if(defined $vf->{'inc'}) {
                $vi=0; foreach my $i(@{$vf->{'inc'}}) {
                    if(index($pp,$i)>-1) { $vi=1; last; }
                }
                unless($vi) { die "E100"; }
            }
            elsif(defined $vf->{'is'}) {
                $vi=0; foreach my $i(@{$vf->{'inc'}}) { if($pp eq $i) { $vi=1; last; } }
                unless($vi) { die "E100"; }
            }
        }
    }
}
sub err {
    if($_[2]) { &CF('EF.xI('.$_[2].').$fctrl.'.$_[0].'.err('.$_[1].')'); }
    &EF::SM(['$fldErr$',$_[0],$_[1]],1);
}
sub quit { &CF('EF.die();'); }
sub alert {
    my $d=$_[0];
    if(&EF::AT($d) ne "H") { $d={"tit"=>$d,"txt"=>"","err"=>0,"end"=>0}; }
    &CF('EF.alert({ tit:"'.$d->{'tit'}.'",txt:"'.$d->{'txt'}.'",err:'.$d->{'err'}.',end:'.$d->{'end'}.' })');
}
sub CF { print "EFON-Action: efpl\n"; &EF::SM(\@_,1); }
sub CMD {
    my ($cod,$V)=@_; my $tp=substr($cod,0,1);
    my $df=&EF::RF(($tp eq "I"?$EFSys:$Sys)."/CMD/$cod","E");
    if(eval($df->[0])) {
        if($tp eq "C") {
            my $dic=EF::ML->new($df->[3]);
            &CF($df->[1],{'$D'=>$dic->get(),"V"=>$V});
        }
        if($tp eq "S"||$tp eq "I") { $tp=eval($df->[1]); die "$cod >> $tp >> ".$@; }
        if($tp eq "M") { return eval($df->[1]); }
    }
    die "N/A";
}
sub setSys { $Sys=&getSys(); }
sub getSys { return "$EF::Root/".($_[0]||$Crd->{'Sys'}||"EF"); }
sub cleanOutdatedSessions {
    my @Sessions=&EF::RD("$Sys/SES",["ef"]);
    for(my $i=0 ; $i<@Sessions ; $i++) {
        my $df=&EF::RF("$Sys/SES/$Sessions[$i][0]","E");
        if($df->{'E'}+900<time()) { &EF::XX("$Sys/SES/$Sessions[$i][0].ef"); }
    }
}
sub session{
    my $d=$_[0]; $d->{"E"}=time();
    &EF::MD("$Sys/SES");
    &EF::SF("$Sys/SES/$Crd->{'C'}",$d,"E",0600);
}
sub getSes{ return &EF::RF("$Sys/SES/$Crd->{'C'}","E"); }

1;