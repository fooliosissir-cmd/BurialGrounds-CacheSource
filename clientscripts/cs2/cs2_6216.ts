/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6216

function cs2_6216(intArg0: coord): coord {
    let int1: coord = cs2_284(coord());
    let int2: number = coordX(intArg0) - coordX(coord(1088, 6080, 0));
    let int3: number = coordZ(intArg0) - coordZ(coord(1088, 6080, 0));

    return moveCoord(int1, int2, 0, int3);
}
