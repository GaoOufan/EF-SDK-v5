#!/usr/bin/perl
# dict.cgi

use strict; use warnings; use diagnostics;
BEGIN { use lib (getpwuid $>)[7]."/EF5/LIB"; use EF; }

eval {
	my $res="N/A";
	my $cmd=&EF::QS("C");
	my $sec=&EF::QS("S");
	if($cmd eq "C") {
    		$res=&EF::RF("$EF::Pub/ef5/dict","E")||{};
    		$res=EF::ML->new($res->{$sec}||{})->get();
	}
	elsif($cmd eq "L") {
    		my $lf=$ENV{'HTTP_REFERER'};
    		my @lp=split(/\?/,$lf); $lf=$lp[0];
    		$lf=substr($lf,index($lf,"//")+2);
    		$lf=substr($lf,index($lf,"/"));
    		$res=&EF::RF("$EF::Pub/$lf/$sec","E")||{};
    		$res=EF::ML->new($res||{})->get();
	}
	elsif($cmd eq "P") {
    		# Needed for safety: Never allow direct access to any folder just by parameter!
    
    
	}
	&EF::SM($res,1);
}
&EF::LOG($@); &EF::SM({},1);