/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3374

function cs2_3374(intArg0: number): [coord, colour] {
    if (intArg0 == 1) {
        splineNew(0, 4);
        splineNew(1, 4);
        splineAddPoint(0, 0, coord(3414, 3731, 0), 1545, coord(3418, 3727, 0), 1555, 0);
        splineAddPoint(1, 0, coord(3429, 3724, 0), 715, coord(3435, 3722, 0), 800, 0);
        splineAddPoint(0, 1, coord(3434, 3715, 0), 1960, coord(3446, 3713, 0), 2070, 0);
        splineAddPoint(1, 1, coord(3444, 3728, 0), 1155, coord(3448, 3731, 0), 1250, 0);
        cs2_1899(0, 100, 100);
        splineAddPoint(0, 2, coord(3452, 3726, 0), 2200, coord(3453, 3728, 0), 2180, 0);
        splineAddPoint(1, 2, coord(3449, 3744, 0), 1245, coord(3449, 3747, 0), 1190, 0);
        cs2_1899(1, 100, 100);
        splineAddPoint(0, 3, coord(3452, 3726, 0), 2200, coord(3453, 3728, 0), 2180, 0);
        splineAddPoint(1, 3, coord(3449, 3744, 0), 1245, coord(3449, 3747, 0), 1190, 0);
        cs2_1899(2, 100, 100);
    }
    return [coord(3422, 3752, 0), colour(0x131414)];
}
