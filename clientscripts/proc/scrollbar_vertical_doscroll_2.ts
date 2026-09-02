/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,scrollbar_vertical_doscroll_2]

function scrollbar_vertical_doscroll_2(intArg0: component, intArg1: component, intArg2: component, intArg3: number, intArg4: boolean): void {
    let int5: number = ifGetScrollHeight(intArg1) - ifGetHeight(intArg1);

    if (int5 == 0) {
        int5 = 1;
    }

    if (intArg3 < 0) {
        intArg3 = 0;
    }

    if (intArg3 > int5) {
        intArg3 = int5;
    }
    ifSetScrollPos(0, intArg3, intArg1);
    ifSetScrollPos(0, intArg3, intArg2);
    let int6: number = 0;

    if (intArg4 == true) {
        int6 = ifGetHeight(intArg0) - 32 - ccGetHeight();
        ccSetPosition(0, 16 + scale(intArg3, int5, int6), 0, 0);
        if (ccFind<1>(intArg0, 2) == 1) {
            ccSetPosition<1>(0, ccGetY(), 0, 0);
        }
        if (ccFind<1>(intArg0, 3) == 1) {
            ccSetPosition<1>(0, ccGetY() + ccGetHeight() - 5, 0, 0);
        }
    }
}
