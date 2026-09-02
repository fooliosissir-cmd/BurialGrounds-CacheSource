/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5907

function cs2_5907(intArg0: number, intArg1: number): number {
    if (intArg0 == 1) {
        if (intArg1 == 1) {
            return 2;
        } else {
            return 1;
        }
    }

    if (intArg0 == 2) {
        if (intArg1 == 4 || intArg1 == 5) {
            return 2;
        } else {
            return 1;
        }
    }

    if (intArg0 == 4) {
        if (intArg1 == 2 || intArg1 == 3) {
            return 2;
        } else {
            return 1;
        }
    }

    if (intArg0 == 3) {
        return 1;
    }
    return 0;
}
