/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_301

function cs2_301(intArg0: boolean, intArg1: component, intArg2: number, intArg3: number, intArg4: number, intArg5: colour): void {
    if (ccFind(intArg1, intArg2) == 1) {
        ccSetColour(intArg5);
    }

    if (intArg3 != -1 && ccFind(intArg1, intArg3) == 1) {
        ccSetColour(intArg5);
    }

    if (intArg0 == true) {
        if (ccFind(intArg1, intArg4) == 1) {
            ccSetHide(false);
        }
    } else if (ccFind(intArg1, intArg4) == 1) {
        ccSetHide(true);
    }
}
