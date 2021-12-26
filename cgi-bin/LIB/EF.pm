package EF;

use strict; use warnings; use diagnostics;

our $Base=(getpwuid $>)[7];
our $Root="$Base/EF5";
our $Pub=$ENV{'DOCUMENT_ROOT'};
our @Lng=split(/\,/,$ENV{HTTP_ACCEPT_LANGUAGE});
{
    for(my $i=0 ; $i<@Lng ; $i++) { my @a=split(/\;/,$Lng[$i]); $Lng[$i]=$a[0]; }
}

my $Cfg={
    "MAX_LOAD"=>50000000,
    "LOG"=>"$Root/ERR"
};
#open(STDERR,">>","$Cfg->{'LOG'}.log") or die $!;

sub SM {
	my $d=$_[1]?EF::Bin->new($_[0],"PK".($_[1] eq "X"?"x":""))->{d}:$_[0];
	if($_[1]) { print "Content-Type: application/octet-stream\nEFON-Object: efon\n"; }
	else { print "Content-Type: text/plain;charset=utf-8\n"; }
	print "Content-Length: ".length($d)."\n\n$d"; exit 0;
}
sub OF {
	my $fh;
	if(index($_[0],'..')>-1 || !open($fh,($_[1]==2?">":"+<").$_[0])) { return; }
	return $fh;
}
sub RF {
	my $fh=&OF($_[0].($_[1] eq "E"?'.ef':''),1); if(!$fh) { return; }
	flock($fh,1);
	if($_[1] eq "L" || $_[1] eq "T" || $_[1] eq "X") {
	    my @fc=<$fh>; close($fh) or die $!;
	    if($_[1] eq "T") { return join('',@fc); }
	    if($_[1] eq "X") { return EF::Bin->new(\@fc); }
	    chomp(@fc); return @fc;
	}
	else {
	    binmode($fh); my $fr=do{ local $/=undef; <$fh>; }; close($fh) or die $!;
	    if($_[1] eq "E") { my @a=unpack("C*",$fr); return EF::Bin->new(\@a,"PX"); }
	    return $fr;
	}
}
sub SF {
	my $fn=$_[0].($_[2] eq "E"?'.ef':''); my $fh=&OF($fn,2); if(!$fh) { die "SF IO: $!"; }
	flock($fh,2); my $m=$_[1];
	if($_[2] eq "L") { $m=join("\n",@{$_[1]}); }
	elsif($_[2] eq "64") { $m=index($_[1],'base64,'); $m=decode_base64(($m>-1)?substr($_[1],$m+7):$_[1]); }
	elsif($_[2] ne "T") {
	    binmode($fh);
	    if($_[2] eq "X") { $m=EF::Bin->new($_[1],"B64")->{d}; }
	    elsif($_[2] eq "E") { $m=EF::Bin->new($_[1],"PK")->{d}; }
	}
	print $fh $m; close($fh) or die $!; if($_[3]) { chmod($_[3],$fn); }
	return 1;
}
sub AF {
    if(index($_[0],'..')>-1) { return; } open(TXT,">>$_[0]") or die $!;
    flock(TXT,2); print TXT $_[1]; close(TXT) or die $!;
}
sub RD {
	my @C=(); if(index($_[0],'..')>-1) { return; }
	my $a=(exists $_[1])?((&AT($_[1]) eq "A")?$_[1]:[$_[1]]):[];
	if(-d $_[0] && opendir(DIR,$_[0])) {
		while(my $g=readdir(DIR)) {
			if(!index($g,".")) { next; }
			my ($n,$x,$r,$i); $x=&GF($g,"X"); $n=&GF($g,"P");
			if(@{$a}==0) { $r=1; }
			foreach $i(@{$a}) {
				if($i eq '.' && -d "$_[0]/$g") { $x='.'; $r=1; last; }
				if($i eq $x) { $r=1; last; }
			}
			if($r) { push(@C,[$n,$x]); }
		}
		closedir(DIR);
	}
	return @C;
}
sub MD {
    if(index($_[0],'..')>-1) { return; }
    my $i; my $np=$_[2]||""; my $t=&AT($_[0]);
    if($t eq "S") {
        if($np eq "") {
            my @pp=split(/\//,$_[0]); 
            foreach $i(@pp) {
                if($i ne $pp[0]) { $np.="/"; }
                $np.=$i; unless(-d $np) { mkdir($np,$_[1]||0755); }
            }
        }
        else { unless(-d "$np/$_[0]") { mkdir("$np/$_[0]",$_[1]||0755); } }
    }
    elsif($t eq "H") {
        foreach $i(keys %{$_[0]}) {
            &MD($i,$_[1],$np); &MD($_[0]->{$i},$_[1],"$np/$i");
        }
    }
    elsif($t eq "A") { foreach $i(@{$_[0]}) { &MD($i,$_[1],$_[2]); } }
}
sub XC {
    my $r;
    if(index($_[0],'..')>-1 || !(-e $_[0])) { die "E2--"; }
    if(index($_[0],';')>-1 || index($_[1],';')>-1) { die "E2--"; }
    if($_[2]) { $r=`mv $_[0] $_[1]`; }
    else { $r=`cp $_[0] $_[1]`; }
}
sub XD {
	my @D=&RD($_[0]); &MD($_[1]);
	foreach my $i(@D) {
		if($i->[1] eq '.') { &XD("$_[0]/$i->[0]","$_[1]/$i->[0]"); }
		else { &XC("$_[0]/$i->[0].$i->[1]","$_[1]/$i->[0].$i->[1]",$_[2]); }
	}
	if($_[2]) { &XX($_[0],1); }
}
sub XX {
	if(index($_[0],'..')>-1||$_[0] eq ".") { return; }
	if(&EX($_[0],$_[1])) {
		if($_[1]) {
			my @dd=&RD($_[0]); foreach my $i(@dd) {
				my $fn="$_[0]/$i->[0]";
				my $dm=$i->[1]eq'.'?1:0;
				if($i->[1] ne "" && $i->[1] ne '.') { $fn.=".$i->[1]"; }
				&XX($fn,$dm);
			} rmdir($_[0]);
		}
		else { unlink($_[0]); }
	}
}
sub EX { return $_[1]?((-d $_[0])?1:0):((-e $_[0])?1:0); }
sub GF {
    my $r=rindex($_[0],'.');
    if($_[1] eq "X") { return $r>-1?substr($_[0],$r+1):""; }
    if($_[1] eq "P") { return $r>-1?substr($_[0],0,$r):$_[0]; }
    my @p=split(/\//,$_[0]); my $v=pop(@p);
    if($_[1] eq "F") { return $v; }
    if($_[1] eq "N") { return &GF($v,"P"); }
    return join('/',@p);
}
sub GE {
	&XX($_[2]);
	my $res=`curl https://www.efsdk.com/cgi-bin/$_[0].cgi?$_[1] > $_[2]`;
	if($! ne "") { die $!; }
}
sub EM {
	require MIME::Lite;
	my $m=MIME::Lite->new(
		From=>$_[1],
		To=>$_[0],
		Subject=>$_[2],
		Type=>'multipart/mixed'
	);
	$m->attach(Type=>'text/html',Data=>$_[3]);
	if($_[4]) {
		my @k=keys %{$_[4]};
		for(my $i=0 ; $i<@k ; $i++) {
			$m->attach(
				Type=>'text/plain',
				Data=>$_[4]->{$k[$i]},
				Filename=>$k[$i],
				Disposition=>'attachment'
			);
		}
	}
	$m->send();
=PREVMAIL
	unless(open(MAIL,"|/usr/sbin/sendmail -t")) { return; }
	print MAIL "To: $_[0]\nFrom: $_[1]\nSubject: $_[2]\nContent-Type: text/html; charset=UTF-8\n\n$_[3]";
	close(MAIL);
=cut
}
sub AR {
	my $r=""; my $d=$_[0]||12; my @c=split(//,"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
	for(my $i=0 ; $i<$d ; $i++) { $r.=$c[int(rand($_[1]||36))]; }
	if($_[2]) { if($r!~/[0-9]/ || $r!~/[a-z]/ || $r!~/[A-Z]/) { return &AR($d); } }
	return $r;
}
sub AX {
	my @a=@{$_[0]};
	for(my $i=0 ; $i<@a ; $i++) {
		if($_[2]) { if($a[$i]==$_[1]) { return $i; } }
		elsif($a[$i] eq $_[1]) { return $i; }
	}
	return -1;
}
sub FI {
	my @s=stat($_[0]);
	my @q=split('',$_[1]);
	my $rx={};
	for(my $i=0 ; $i<@q ; $i++) {
		my $m=$q[$i];
		if($m eq "P") { $rx->{$m}=$s[2]; }
		elsif($m eq "K") { $rx->{$m}=$s[3]; }
		elsif($m eq "U") { $rx->{$m}=$s[4]; }
		elsif($m eq "G") { $rx->{$m}=$s[5]; }
		elsif($m eq "S") { $rx->{$m}=$s[7]; }
		elsif($m eq "A") { $rx->{$m}=$s[8]; }
		elsif($m eq "M") { $rx->{$m}=$s[9]; }
		elsif($m eq "C") { $rx->{$m}=$s[10]; }
	}
	return @q==1?$rx->{$_[1]}:$rx;
}
sub AT {
    if(!defined $_[0]) { return ""; } my $v=ref($_[0]);
    if($v eq "") { return ($_[0]*1 eq $_[0])?"N":"S"; }
    my $k={"ARRAY"=>"A","HASH"=>"H"};
    return $k->{$v}||$_[0]->{_obt}||$v;
}
sub QS {
    if($ENV{'CONTENT_LENGTH'}>$Cfg->{"MAX_LOAD"}) {
        # If the data is larger than MAX_LOAD limit, we may do manual reading from the stream.
        # Hence, this function will NOT return decoded object, but rather handle to the file.
        # It is the CGI entry responsibility to check response type before continuing.
        return <STDIN>;
    }
    my $m=$ENV{'REQUEST_METHOD'}; my $b=$ENV{'QUERY_STRING'};
    if($m ne "GET") {
        read(STDIN,$b,$ENV{'CONTENT_LENGTH'});
        if($m eq "EFOBJ") { return $b; }
    }
    my $e=$_[0]; my $r={}; my $t=&AT($e); my @q=split(/&/,$b);
    my %p=(); if($t eq "A") { %p=map { $_=>1 } @{$e}; }
    foreach my $i(@q) {
        my ($k,$s)=split(/=/,$i); $s=~tr/+//; $s=~s/%([a-fA-F0-9][a-fA-F0-9])/pack("C",hex($1))/eg;
        if($t eq "") { $r->{$k}=$s; }
        elsif($t eq "A") { if($p{$k}) { $r->{$k}=$s; } }
        elsif($k eq $_[0]) { return $s; }
    }
    return $r;
}
sub DL {
	print "content-type: ".($_[2]||"application/octet-stream")."\n";
	if($_[1]) { print "content-disposition: inline; filename=\"$_[1]\"\n"; }
	print "content-length: ".length($_[0])."\n";
	print "cache-control: no-cache, must-revalidate\n";
	print "pragma: no-cache\n\n$_[0]"; exit 0;
}
sub LOG { &AF("$Cfg->{'LOG'}.log","### ".time()." $_[0]\n"); }
sub ceil { return int($_[0]+0.999999999); }
sub floor { return int($_[0]); }
sub round { return int($_[0]+0.5); }
sub max {
    my (@a,$x,$i); @a=@_; if(&AT($a[0]) eq "A") { @a=@{$_[0]}; }
    foreach $i(@a) { unless(defined $x) { $x=$i; next; } if($i>$x) { $x=$i; } }
    return $x;
}
sub min {
    my (@a,$x,$i); @a=@_; if(&AT($a[0]) eq "A") { @a=@{$_[0]}; }
    foreach $i(@a) { unless(defined $x) { $x=$i; next; } if($i<$x) { $x=$i; } }
    return $x;
}
1;

package EF::Bin;
use MIME::Base64;
sub new {
    my($class,$dt,$md)=@_; my $this={ _obt=>"F",d=>"" }; bless($this,$class);
    if(defined $dt) {
        my $t=&EF::AT($dt);
        if($md eq "B64"||($md eq "PX"&&$t eq "S")) {
			$dt=&iA(decode_base64($dt));
		}
        if($md eq "PK") { $this->WD(0); $this->iK($dt); }
        elsif($md eq "PKx") { $this->WD(0); $this->iK($dt,"X"); }
        elsif($md eq "OF") { $this->{f}=$t eq "S"?&EF::OF($dt,1):$dt; }
        elsif($md eq "A") { $this->WD(&iA($dt)); }
        else { $this->WD($dt,0,$md eq "N"?1:0); }
		# Valid as we have no other versions than 0
        if($md eq "PX") { return $this->get(); }
    }
    return $this;
}
sub WD {
    my ($this,$r,$s,$e)=@_; my $t=&EF::AT($r); my $i;
    if($t eq "A") {
		for($i=0 ; $i<@{$r} ; $i++) { $this->WD($r->[$i],$s,$e); }
	}
    elsif($t eq "F") { $this->WD($r->RD()); }
    elsif($t eq "S") { $this->{d}.=$r; }
    elsif($t eq "N") {
        if(!$s) { $s=1; for($i=256 ; $i<=$r&&$s<8 ; $i*=256) { $s++; } }
        if($r<0) { $r+=2**($s*8); }
        for($i=($e?$s-1:0) ; $i!=($e?-1:$s) ; $i+=($e?-1:1)) {
            $this->{d}.=pack("C",int($r/2**($i*8))%256);
        }
    }
}
sub WB {
    my ($this,$a,$e,$b,$l)=@_; if(!$b) { $b=0; } if(!$l) { $l=@{$a}; }
    $this->WD(\@{$a}[$b..$l],0,$e);
}
sub RD { return &iA($_[0]->{d}); }
sub RB {
    my ($this,$i,$q,$e)=@_; my ($j,$n,$r,$b);
	$r=0; if($q<0) { $n=1; $q=0-$q; } $b=$e?($q-1)*8:0;
	for($j=0 ; $j<$q ; $j++,$b+=($e?-8:8)) {
        if($this->{f}) { $r+=(2**$b)*unpack("C",$this->RC(1)); }
        else { $r+=(2**$b)*unpack("C",substr($this->{d},$i,1)); $i++; }
    }
    return $r-($n?2**($q*8-1):0);
}
sub RC { my $a; read($_[0]->{f},$a,$_[1]); return $a; }
sub RA {
	my ($o,$a,$b)=@_;
	my @v=$o->{f}?unpack("C*",$o->RC($b)):unpack("x$a"."C$b",$o->{d});
	return \@v;
}
sub RT {
	my ($o,$i,$q)=@_;
	return $o->{f}?$o->RC($q):unpack("x$i"."A$q",$o->{d});
}
sub AV {
    my ($this,$t,$v,$s,$e)=@_; my ($w,$n,$i);
    if($v<0) { $n=1; $v=0-$v; }
    if(!$s) { $s=1; for($i=256 ; $i<=$v&&$s<8 ; $i*=256) { $s++; } }
    if($n) { $v+=2**($s*8-1); }
    for($i=($e?$s:0) ; $i!=($e?0:$s) ; $i+=($e?-1:1)) {
		substr($this->{d},$t+$i,1)=pack("C",int($v/(2**$i*8))%256);
	}
}
sub len { return $_[0]->{f}?$_[0]->get(0,0,"len"):length($_[0]->{d}); }
sub B64 {
    my @a=$_[1]?@{$_[1]}:@{$_[0]->RD()};
	my $m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    my ($r,$i)=("",0);
    while($i<@a) {
        my @c=($a[$i],$i+1<@a?$a[$i+1]:-1,$i+2<@a?$a[$i+2]:-1);
        my @d=(
            substr($m,$c[0]>>2,1),
            substr($m,($c[0]%4)*16+($c[1]>-1?$c[1]>>4:0),1),
            $c[1]>-1?substr($m,($c[1]%16)*4+($c[2]>-1?$c[2]>>6:0),1):'=',
            $c[2]>-1?substr($m,$c[2]%64,1):'='
        );
        $r.=join('',@d); $i+=3;
    }
    return $r;
}
sub iA { my @a=unpack("C*",$_[0]); return \@a; }
sub iL {
    my ($v,$x)=($_[0],""); while($v) { $x.=pack("C",$v%256); $v=int($v/256); }
    return &iA($x);
}
sub iN { return scalar @{$_[0]}; }
sub iK {
    my ($o,$d,$g)=@_; my $t=&EF::AT($d); my ($i,$n,@a);
    if($t eq "") { $o->WD(0); }
    elsif($t eq "A") {
        $n=&iL(&iN($d)); $o->WD(8+&iN($n));
        if(&iN($n)) { $o->WD($n); foreach $i(@{$d}) { $o->iK($i,$g); } }
    }
    elsif($t eq "H") {
        @a=keys %{$d}; $n=@a; $n=&iL($n); $o->WD(16+&iN($n));
        if(&iN($n)) {
			$o->WD($n);
			foreach $i(@a) { $o->iK($i,$g); $o->iK($d->{$i},$g); }
		}
    }
    elsif($t eq "S") {
        @a=unpack("C*",$d); $d=@a; $n=&iL($d); $i=&iN($n); 
        $o->WD(32+$i); if($i) { $o->WD([$n,\@a]); }
    }
    elsif($t eq "N") {
        $t=0; if($d<0) { $t=8; $d=0-$d; }
        if($d=="inf") { $o->WD(80+$t); }
        else {
            @a=split(/e/,$d); $i=$a[1]||0; @a=split(/\./,$a[0]);
			$i-=length($a[1]||""); $d=join('',@a);
			if($i<-127) { $o->WD(48+$t); }
			elsif($i>127) { $o->WD(80+$t); }
            else {
				$n=&iL($d); $o->WD([($i?64:48)+$t+&iN($n),$n]);
				if($i) { $o->WD(128+$i); }
			}
        }
    }
    elsif($t eq "D") {
        $t=96; $d=$d->{V}; if($d<0) { $t=104; $d=0-$d; } $n=&iL($d); 
        $o->WD([$t+&iN($n),$n]); 
    }
    elsif($t eq "I") { $n=&iL(length($d->{D})); $o->WD([112+&iN($n),$n,$d->{D}]); }
    elsif($t eq "F") {
        $d=$d->{d}; $n=&iL(length($d)); $i=@{$n}; $o->WD(120+$i);
        if($i) { $o->WD([$n,&iA($d)]); }
    }
    elsif($t eq "L") {
        if($d->{R} eq "N") {
            $n=&iL($d->{V}); $i=&iN($n);
			if(!$i) { $n=[0]; } $o->WD([164+$i+($g eq "X"?4:0),$n]);
            if($g eq "X") { $o->iK($d->{E}); }
        }
        elsif($d->{R} eq "R") {
            $o->WD(167+($g eq "X"?4:0)); $o->iK($d->{V});
            if($g eq "X") { $o->iK($d->{E}); }
        }
        else {
            @a=keys %{$d->{V}}; $i=@a; $o->WD(128+$i);
            for $i(@a) { $o->iK($i); $o->iK($d->{V}{$i}); }
        }
    }
    elsif($t eq "C") {
        $n=0; @a=@{$d->{V}};
		for($i=0 ; $i<4&&!$n ; $i++) { if($a[$i]%17) { $n=1; } }
        if($n) {
            if($a[0]%4==0&&$a[1]%8==0&&$a[2]%8==0) {
				$t=1; $n=$a[0]*256+$a[1]*4+$a[2]/8;
			}
            elsif($a[0]%8==0&&$a[1]%4==0&&$a[2]%8==0) {
				$t=2; $n=$a[0]*256+$a[1]*8+$a[2]/8;
			}
            elsif($a[0]%8==0&&$a[1]%8==0&&$a[2]%4==0) {
				$t=3; $n=$a[0]*256+$a[1]*8+$a[2]/4;
			}
            else { $t=4; $n=$a[0]*65536+$a[1]*256+$a[2]; }
            if($a[3]<255) { $t+=4; } $o->WD([144+$t,$n]);
			if($a[3]<255) { $o->WD($a[3]); }
        }
        else { $o->WD([
			144,
			int($a[0]/17)*4096+int($a[1]/17)*256+int($a[2]/17)*16+int($a[3]/17)
		]); }
    }
    elsif($t eq "B") { $o->WD(160+($d->{V}?1:0)); }
    elsif($t eq "V2") { $o->WD(162); $o->iK($d->{V}[0]); $o->iK($d->{V}[1]); }
    elsif($t eq "V3") {
        $o->WD(163); $o->iK($d->{V}[0]);
        $o->iK($d->{V}[1]); $o->iK($d->{V}[2]);
    }
    elsif($t eq "Z") { $o->WD(172); $o->iK($d->{V}[0]); $o->iK($d->{V}[1],$g); }
    else {
        $o->WD(255); $n=$d->{V}{"Argc"}; $o->WD([$n,$d->{V}{"Ctor"}]);
        foreach $i(@{$d->{V}{"Args"}}) { $o->iK($i,$g); }
    }
}
sub get {
    my($o,$p,$x)=@_; my($r,$i,$n,$t,$d,$f);
	$n=0; $f=$o->{f}; if(!$p&&!$f) { $p=[1]; }
    if($f) { read($f,$d,1); } else { $d=$o->RB($p->[0],1); $p->[0]++; }
	if(!$d) { return; }
    $t=int($d/16); if($t<8) { $i=$d%8;
        if($i) { $n=$o->RB($f?0:$p->[0],$i); if(!$f) { $p->[0]+=$i; } }
    }
    else { $i=$d%16; }
    if(!$t) {
        if(defined($x) && $x eq "len") { return $n; }
        else { $r=[]; for($i=0 ; $i<$n ; $i++) {
            if($f&&$p) {
				if($x eq "pos") { return tell($o->{f}); }
				$t=$o->get(); if($i==$p) { return $t; }
			}
            else { push(@{$r},$o->get($p)); }
        } }
        if($f&&$p) { return; }
    }
    elsif($t==1) {
        if(defined($x) && $x eq "len") { return $n; }
        else { $r={}; for($i=0 ; $i<$n ; $i++) {
            if($f&&$p) {
				$t=$o->get();
				if($t eq $p) { return $x eq "pos"?tell($o->{f}):$o->get(); }
			}
            else { $t=$o->get($p); $r->{$t}=$o->get($p); }
        } }
        if($f&&$p) { return; }
    }
    elsif($t==2) {
		if($o->{f}) { $o->RT(0,$n); }
		else { $r=$n?$o->RT($p->[0],$n):""; $p->[0]+=$n; }
	}
    elsif($t==3||$t==4) {
		$r=$d&8?-$n:$n;
		if($t==4) {
			$i=$o->RB($f?0:$p->[0],-1); if(!$f) { $p->[0]++; } $r*=10**$i;
		}
	}
    elsif($t==5) { $r=$d&8?"-inf":"inf"; }
    elsif($t==6) { $r=EF::Class->new("D",$d&8?-$n:$n); }
    elsif($t==7) {
        $t=$o->RA($f?0:$p->[0],$n); if(!$f) { $p->[0]+=$n; } 
        if($d&8) { $r=EF::Bin->new($t); }
        else { $r=EF::IMG->new($t); }
    }
    elsif($t==8) {
        $r={}; while($i>0) { $x=$o->get($p); $r->{$x}=$o->get($p); $i--; }
        $r=EF::ML->new($r);
    }
    elsif($t==9) {
        $t=(!$i||$i%4)?2:3; $n=$o->RB($f?0:$p->[0],$t); if(!$f) { $p->[0]+=$t; }
        if(!$i) { $r=EF::Class->new("C",[
			int($n/4096)*17,
			(int($n/256)%16)*17,
			(int($n/16)%16)*17,
			($n%16)*17]);
		}
        else {
            if($i%4==1) { $n=[int($n/1024)*4,(int($n/32)%32)*8,($n%32)*8]; }
            elsif($i%4==2) { $n=[int($n/2048)*8,(int($n/32)%64)*4,($n%32)*8]; }
            elsif($i%4==3) { $n=[int($n/2048)*8,(int($n/64)%32)*8,($n%64)*4]; }
            else { $n=[int($n/65536),int($n/256)%256,$n%256]; }
            if($i>4) {
				push(@{$n},$o->RB($f?0:$p->[0],1));
				if(!$f) { $p->[0]++; }
			}
            $r=EF::Class->new("C",$n);
        }
    }
    elsif($t==10) {
        if($i<2) { $r=EF::Class->new("B",$i); }
        elsif($i==2) { $r=EF::Class->new("V2",[$o->get($p),$o->get($p)]); }
        elsif($i==3) {
			$r=EF::Class->new("V3",[$o->get($p),$o->get($p),$o->get($p)]);
		}
        elsif($i<12) {
            if($i==4||$i==8) {
				$n=$o->RB($f?0:$p->[0],1);
				if(!$f) { $p->[0]++; } EF::ML->new($n,"N");
			}
            elsif($i==5||$i==9) {
				$n=$o->RB($f?0:$p->[0],2);
				if(!$f) { $p->[0]+=2; } EF::ML->new($n,"N");
			}
            elsif($i==6||$i==10) {
				$n=$o->RB($f?0:$p->[0],3);
				if(!$f) { $p->[0]+=3; } EF::ML->new($n,"N");
			}
            else { EF::ML->new($o->get($p),"R"); }
            # Skip the preset value! From client this cannot happen - 
			#     EF.Bin shall eliminate this on any case!
            # Think of a way for saving multilingual field if been translated.
            if($i>7) { $o->get($p); }
        }
        elsif($i==12) { EF::Class->new('Z',[$o->get($p),$o->get($p)]); }
    }
    elsif($d==255) {
        # Special class
    }
    return $r;
}
sub ver { return $_[0]->RB(0,1); }
sub back { seek($_[0]->{f},0,$_[1]); }

package EF::IMG;
sub new { return bless{ _obt=>"I",D=>$_[2] },$_[0]; }
sub load { return bless{ _obt=>"I",D=>&EF::RF($_[1]) },$_[0]; }
sub save { &EF::SF($_[1],$_[0]->{D}); }

package EF::Class;
sub new { return bless{ _obt=>$_[1],V=>$_[2] },$_[0]; }

package EF::ML;
sub new { return bless{ _obt=>"L",V=>$_[1]||{} },$_[0]; }
sub get {
    my $o=$_[0]; my ($i,$p); my @family=(); my $map={};
    foreach $i(@EF::Lng) {
        $p=lc($i);
        if(exists $o->{V}{$p}) { return $o->{V}{$p}; }
        my @selectLanguage=split(/-/,$p);
        unless(exists $map->{$selectLanguage[0]}) {
            push(@family,$selectLanguage[0]);
            $map->{$selectLanguage[0]}=1;
        }
    }
    foreach $i(@family) { if(exists $o->{V}{$i}) { return $o->{V}{$i}; } }
    my @a=keys %{$o->{V}}; if(@a) { return $o->{V}{$a[0]}; }
    return "";
}

package EF::AVL;
sub new {
    my ($O,$d)=@_;
    my $t=&EF::AT($d);
    if($t eq "Q") { $d={"alg"=>$d}; }
    elsif($t ne "H") { $d={"v"=>$d}; }
    unless($d->{'alg'}) { $d->{'alg'}=sub {
        my ($a,$b)=@_; return $a<$b?-1:($a>$b?1:0);
    }; }
    $d->{'_obt'}="AVL";
    if(&EF::AT($d->{'v'})) { $O->add($d->{'v'}); }
    bless($d,$O); return $O;
}
sub add {
    my ($O,$v)=@_;
    my ($i,$n);
    if(&EF::AT($v) eq "A") { foreach $i(@{$v}) { $O->add($i); } return; }
    $n={"v"=>$v,"del"=>sub{
        # Delete current node
    }};
    if($O->{'root'}) { $O->{'root'}=$O->iW($O->{'root'},$n); }
    else { $O->{'root'}=$n; }
}
sub get { my($O,$v)=@_; return $O->iD($v,$O->{'root'}); }
sub iC { my($O,$n)=@_; return $O->iH($n->{'b'})-$O->iH($n->{'e'}); }
sub iD {
    my($O,$v,$n)=@_; my $h=$n?&$O->{'alg'}($v,$n->{'v'}):0;
    return $h?$O->iD($v,$h<0?$n->{'b'}:$n->{'e'}):$n;
}
sub iH {
    my($O,$n)=@_; return $n?&EF::max($O->iH($n->{'b'}),$O->iH($n->{'e'}))+1:-1;
}
sub iW {
    my ($O,$r,$n)=@_; unless($r) { return $n; }
    if(&$O->{'alg'}($n->{'v'},$r->{'v'})<0) {
        $r->{'b'}=$O->iW($r->{'b'},$n);
        if($r->{'b'}&&$O->iC($r)>1) {
            $r=&$O->{'alg'}($n->{'v'},$r->{'b'}{'v'})?$O->iL($r):$O->iE($r);
        }
    }
    else {
        $r->{'e'}=$O->iW($r->{'e'},$n);
        if($r->{'e'}&&$O->iC($r)<-1) { $r=&$O->{'alg'}($n->{'v'},$r->{'e'}{'v'})<0?$O->iB($r):$O->iR($r); }
    }
    return $r;
}
sub iL { my $m=$_[1]->{'b'}; $_[1]->{'b'}=$m->{'e'}; $m->{'e'}=$_[1]; return $m; }
sub iR { my $m=$_[1]->{'e'}; $_[1]->{'e'}=$m->{'b'}; $m->{'b'}=$_[1]; return $m; }
sub iE { my($O,$n)=@_; $n->{'b'}=$O->iR($n->{'b'}); return $O->iL($n); }
sub iB { my($O,$n)=@_; $n->{'e'}=$O->iL($n->{'e'}); return $O->iR($n); }