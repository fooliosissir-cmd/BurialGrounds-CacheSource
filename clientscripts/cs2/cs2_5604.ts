/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5604

function cs2_5604(intArg0: coord, intArg1: number, intArg2: number): coord {
    return moveCoord(intArg0, intArg1 - 16, 0, intArg2 - 8);
}
