/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1210

function cs2_1210(intArg0: number, intArg1: number, intArg2: number, intArg3: number): number {
    let int4: number = (clientClock() + intArg3 - intArg2) % intArg1;
    let int5: number = intArg1 / 2;
    let int6: number = int5 - int4;

    if (int6 == 0) {
        return intArg0;
    }

    if (int6 > 0) {
        return intArg0 - scale(int6, int5, intArg0);
    }
    return intArg0 + scale(int6, int5, intArg0);
}
