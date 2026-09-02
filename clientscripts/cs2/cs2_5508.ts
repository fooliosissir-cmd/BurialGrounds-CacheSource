/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5508

function cs2_5508(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    let int4: number = ifGetScrollHeight(intArg1) - ifGetHeight(intArg1);

    if (int4 == 0) {
        int4 = 3;
    }

    if (intArg2 < 0) {
        intArg2 = 0;
    }

    if (intArg2 > int4) {
        intArg2 = int4;
    }
    ifSetScrollPos(0, intArg2, intArg1);
    let int5: number = 0;

    if (ccFind(intArg0, 3) == 1 && intArg3 == 1) {
        int5 = ifGetHeight(intArg0) - 32 - (ccGetHeight() + 10);
        ccSetPosition(0, 21 + scale(intArg2, int4, int5), 0, 0);
        if (ccFind<1>(intArg0, 4) == 1) {
            ccSetPosition<1>(0, ccGetY() - 5, 0, 0);
        }
        if (ccFind<1>(intArg0, 5) == 1) {
            ccSetPosition<1>(0, ccGetY() + ccGetHeight(), 0, 0);
        }
    }
}
