/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5888

function cs2_5888(intArg0: number, intArg1: number): number {
    let int2: number = intArg0 + intArg1;

    int2 = int2 % 360;
    return int2;
}
