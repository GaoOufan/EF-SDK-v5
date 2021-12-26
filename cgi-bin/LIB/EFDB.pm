package EFDB;

use strict; use warnings; use diagnostics; use EFBE;

#################### D A T A   P R O C E S S I N G ############################

our $DE={};

sub tsc {
    # Perform transaction, will roll-back in case of failure.
}
sub SF {
    # Safe save.
    # $_[0] = Path inside $EFBE::Sys
    # $_[1] = Content object
    # $_[2] = Alternative system path
    my $pt=($_[2]||$EFBE::Sys)."/$_[0]";
    if(!(-e "$pt.tmp.ef") || -e "$pt.ef") { &EF::SF("$pt.tmp",$_[1],"E"); }
    &EF::XC("$pt.tmp","$pt",1);
}

1;