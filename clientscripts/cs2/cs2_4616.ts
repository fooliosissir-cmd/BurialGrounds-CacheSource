/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4616

function cs2_4616(intArg0: number, intArg1: number): number {
    let int2: number = cs2_4617(intArg0, intArg1);

    if (int2 == dateMinutes()) {
        return 0;
    } else if (int2 > dateMinutes()) {
        return 1;
    }
    return -1;
}
