/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,carni_dungeon]

function carni_dungeon(intArg0: number, intArg1: number, intArg2: coord): coord {
    return moveCoord(intArg2, intArg0 + 24, 0, intArg1 + 24);
}
