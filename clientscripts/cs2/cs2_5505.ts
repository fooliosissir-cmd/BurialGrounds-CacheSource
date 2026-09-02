/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5505

function cs2_5505(intArg0: component, intArg1: component, intArg2: number, intArg3: number, intArg4: boolean): void {
    intArg2 = intArg2 + intArg3;
    let int5: number = 0;
    let int6: number = 0;

    if (ccFind(intArg0, 3) == 1) {
        ccSetPosition(0, intArg2 + 21, 0, 0);
        if (ccFind<1>(intArg0, 4) == 1) {
            ccSetPosition<1>(0, intArg2 + 16, 0, 0);
        }
        if (ccFind<1>(intArg0, 5) == 1) {
            ccSetPosition<1>(0, intArg2 + ccGetHeight() + 21, 0, 0);
        }
        int5 = ifGetHeight(intArg0) - 32 - (ccGetHeight() + 10);
        if (int5 <= 0) {
            return;
        }
        int6 = ifGetScrollHeight(intArg1) - ifGetHeight(intArg1);
        intArg2 = intArg2 * int6 / int5;
        cs2_5507(intArg0, intArg1, intArg2, intArg4);
    }
}
