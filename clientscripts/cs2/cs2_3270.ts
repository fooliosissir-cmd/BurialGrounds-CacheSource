/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3270

function cs2_3270(intArg0: number, intArg1: number): number {
    let int2: number = 2;

    if (intArg0 + (int2 - 1) < intArg1) {
        return intArg0 + int2;
    } else if (intArg0 - (int2 - 1) > intArg1) {
        return intArg0 - int2;
    } else {
        return intArg1;
    }
}
