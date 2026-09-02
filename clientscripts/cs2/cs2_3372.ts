/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3372

function cs2_3372(intArg0: number): [coord, colour] {
    if (intArg0 == 1) {
        splineNew(0, 3);
        splineNew(1, 3);
        splineAddPoint(0, 0, coord(3487, 3665, 0), 1210, coord(3480, 3665, 0), 1210, 0);
        splineAddPoint(1, 0, coord(3465, 3676, 0), 110, coord(3463, 3679, 0), 195, 0);
        splineAddPoint(0, 1, coord(3470, 3675, 0), 1210, coord(3469, 3678, 0), 1200, 0);
        splineAddPoint(1, 1, coord(3464, 3687, 0), 605, coord(3465, 3691, 0), 605, 0);
        cs2_1899(0, 50, 50);
        splineAddPoint(0, 2, coord(3470, 3675, 0), 1210, coord(3469, 3678, 0), 1200, 0);
        splineAddPoint(1, 2, coord(3464, 3687, 0), 605, coord(3465, 3691, 0), 605, 0);
        cs2_1899(1, 50, 50);
    }
    return [coord(3486, 3688, 0), colour(0x131414)];
}
