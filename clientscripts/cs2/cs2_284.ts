/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_284

function cs2_284(intArg0: coord): coord {
    let int1: number = coordX(intArg0);
    let int2: number = coordZ(intArg0);

    int1 = int1 - int1 % 64;
    int2 = int2 - int2 % 64;
    return moveCoord(0, int1, 0, int2);
}
