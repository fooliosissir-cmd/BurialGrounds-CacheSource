/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1345

function cs2_1345(intArg0: number, intArg1: component): number {
    let int2: number = (intArg0 + ifGetScrollY(intArg1)) / 15;

    return int2;
}
