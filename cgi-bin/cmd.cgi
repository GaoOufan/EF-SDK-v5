#!/usr/bin/perl
#cmd.cgi

use strict; use warnings; use diagnostics;
BEGIN { use lib (getpwuid $>)[7]."/EF5/LIB"; }

###############################################################################
#                                                                             #
#                  OOOOO  OOOOO  OOOOO   OOOOO OO OO                          #
#                  O      O      O         O   O O O                          #
#                  O      O      O         O   O   O                          #
#                  OOO    OOO    OOOO                                         #
#                  O      O          O                                        #
#                  O      O          O                                        #
#                  OOOOO  O      OOOO                                         #
#                                                                             #
#                  R U N   T I M E   L I B R A R Y                            #
#                                                                             #
###############################################################################

use EFDB;

my $shebang=eval {
    &EFBE::setSys();
    &EFBE::cleanOutdatedSessions();
    &EFBE::CMD($EFBE::Pmt->{'C'},$EFBE::Pmt->{'P'});
}
&EF::LOG("$@"); &EF::SM("1");