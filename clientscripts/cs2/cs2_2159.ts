/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2159

function cs2_2159(intArg0: number, intArg1: number, intArg2: number, intArg3: number): number {
    if (intArg0 == 0 && intArg2 == 0) {
        return 0;
    } else if (intArg0 < intArg1 && intArg2 < intArg3) {
        return 1;
    }
    return 2;
}
