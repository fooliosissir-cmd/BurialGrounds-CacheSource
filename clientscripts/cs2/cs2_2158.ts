/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2158

function cs2_2158(intArg0: number, intArg1: number, intArg2: number): number {
    if (intArg0 < intArg1) {
        return 0;
    }

    if (intArg0 < intArg2) {
        return 1;
    }
    return 2;
}
