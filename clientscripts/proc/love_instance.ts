/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,love_instance]

function love_instance(intArg0: number, intArg1: number, intArg2: coord): coord {
    return moveCoord(intArg2, intArg0, 0, intArg1);
}
