/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_373

function cs2_373(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: boolean): void {
    let int5: component = -1;

    if (intArg1 == -1) {
        int5 = ifGetLayer(intArg0);
    } else {
        int5 = intArg0;
    }

    if (intArg4 == true) {
        if ((intArg1 == -1 && ifFind(intArg0) == 1) || ccFind(intArg0, intArg1) == 1) {
            ccCreate<1>(int5, 3, intArg2);
            ccSetSize<1>(ccGetWidth() - intArg3 * 2, ccGetHeight() - intArg3 * 2, 0, 0);
            ccSetPosition<1>(ccGetX() + intArg3, ccGetY() + intArg3, 0, 0);
            ccSetColour<1>(colour(0xFFFFFF));
            ccSetTrans<1>(200);
            ccSetfill<1>(true);
        }
    } else {
        if (ccFind(int5, intArg2) == 1) {
            ccDelete();
        }
        playerdesign4_tooltip_clear();
    }
}
