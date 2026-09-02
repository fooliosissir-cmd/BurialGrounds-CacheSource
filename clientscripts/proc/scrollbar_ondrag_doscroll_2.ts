/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,scrollbar_ondrag_doscroll_2]

function scrollbar_ondrag_doscroll_2(intArg0: component, intArg1: component, intArg2: component, intArg3: number, intArg4: number): void {
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

    if (ccFind(intArg0, 1) == 1 && intArg4 == 1) {
        int6 = ifGetHeight(intArg0) - 32 - ccGetHeight();
        ccSetPosition(0, 16 + int6 * intArg3 / int5, 0, 0);
        if (ccFind<1>(intArg0, 2) == 1) {
            ccSetPosition<1>(0, ccGetY(), 0, 0);
        }
        if (ccFind<1>(intArg0, 3) == 1) {
            ccSetPosition<1>(0, ccGetY() + ccGetHeight() - 5, 0, 0);
        }
    }
}
