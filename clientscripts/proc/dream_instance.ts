/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,dream_instance]

function dream_instance(intArg0: number, intArg1: number, intArg2: coord): coord {
    return moveCoord(intArg2, intArg0, 2, intArg1);
}
