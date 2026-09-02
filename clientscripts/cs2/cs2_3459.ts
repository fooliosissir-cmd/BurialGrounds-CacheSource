/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3459

function cs2_3459(intArg0: coord, intArg1: coord): coord {
    return moveCoord(intArg1, 24 + coordX(intArg0) - coordX(coord(3776, 5696, 0)), 0, 24 + coordZ(intArg0) - coordZ(coord(3776, 5696, 0)));
}
