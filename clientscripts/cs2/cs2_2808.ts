/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2808

function cs2_2808(intArg0: coord, intArg1: coord, intArg2: coord): coord {
    let int3: coord = moveCoord(0, 8 * (coordX(intArg1) / 8), coordY(intArg1), 8 * (coordZ(intArg1) / 8));
    let int4: number = coordX(intArg2) - coordX(int3);
    let int5: number = coordZ(intArg2) - coordZ(int3);

    return moveCoord(intArg0, int4, 0, int5);
}
