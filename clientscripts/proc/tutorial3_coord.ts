/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,tutorial3_coord]

function tutorial3_coord(intArg0: coord, intArg1: coord): coord {
    return moveCoord(intArg1, 16 + coordX(intArg0) - coordX(coord(3648, 4928, 0)), 0, 16 + coordZ(intArg0) - coordZ(coord(3648, 4928, 0)));
}
