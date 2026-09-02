/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5380

function cs2_5380(): void {
    if (ifFind(Component.hw11_dancefloor_manual.spread1) == 1) {
        ccSetHide(true);
    }

    if (ifFind(Component.hw11_dancefloor_manual.spread2) == 1) {
        ccSetHide(false);
    }

    if (ifFind(Component.hw11_dancefloor_manual.spread3) == 1) {
        ccSetHide(true);
    }

    if (ifFind(Component.hw11_dancefloor_manual.pagenum_left) == 1) {
        ccSetText("Page 3");
    }

    if (ifFind(Component.hw11_dancefloor_manual.pagenum_right) == 1) {
        ccSetText("Page 4");
    }
}
