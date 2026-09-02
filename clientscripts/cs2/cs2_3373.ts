/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3373

function cs2_3373(intArg0: number): [coord, colour] {
    if (intArg0 == 1) {
        splineNew(0, 3);
        splineNew(1, 3);
        splineAddPoint(0, 0, coord(3433, 3709, 0), 1280, coord(3419, 3700, 0), 1270, 0);
        splineAddPoint(1, 0, coord(3429, 3688, 0), 690, coord(3426, 3679, 0), 685, 0);
        splineAddPoint(0, 1, coord(3430, 3667, 0), 1315, coord(3445, 3655, 0), 1315, 0);
        splineAddPoint(1, 1, coord(3442, 3667, 0), 645, coord(3452, 3660, 0), 610, 0);
        cs2_1899(0, 50, 50);
        splineAddPoint(0, 2, coord(3430, 3667, 0), 1315, coord(3445, 3655, 0), 1315, 0);
        splineAddPoint(1, 2, coord(3442, 3667, 0), 645, coord(3452, 3660, 0), 610, 0);
        cs2_1899(1, 50, 50);
    }
    return [coord(3422, 3688, 0), colour(0x131414)];
}
