/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4129

function cs2_4129(intArg0: coord, intArg1: coord): coord {
    return moveCoord(intArg1, coordX(intArg0) - coordX(coord(3520, 4480, 0)), coordY(intArg0) - coordY(coord(3520, 4480, 0)), coordZ(intArg0) - coordZ(coord(3520, 4480, 0)));
}
