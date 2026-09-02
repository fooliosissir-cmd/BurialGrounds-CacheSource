/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4617

function cs2_4617(intArg0: number, intArg1: number): number {
    let int2: number = intArg0;
    let int3: number = intArg1;

    [int2, int3] = cs2_4618(intArg0, intArg1);
    return dateMinutesFromruneday(int2) + int3;
}
