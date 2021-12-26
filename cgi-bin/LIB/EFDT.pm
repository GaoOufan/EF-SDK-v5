package EFDT;

use strict; use warnings; use diagnostics;

sub col {
    my $r=[];
    for my $i(@{$_[0]}) { push(@{$r},$i->[$_[1]]); }
    return $r;
}

1;