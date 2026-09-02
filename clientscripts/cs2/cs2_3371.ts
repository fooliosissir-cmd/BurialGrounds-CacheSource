/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3371

function cs2_3371(intArg0: number): [coord, colour] {
    if (intArg0 == 1) {
        splineNew(0, 3);
        splineNew(1, 3);
        splineAddPoint(0, 0, coord(3516, 3679, 0), 380, coord(3524, 3699, 0), 445, 0);
        splineAddPoint(1, 0, coord(3511, 3686, 0), -15, coord(3514, 3698, 0), 10, 0);
        splineAddPoint(0, 1, coord(3503, 3697, 0), 715, coord(3488, 3695, 0), 775, 0);
        splineAddPoint(1, 1, coord(3488, 3688, 0), -45, coord(3484, 3684, 0), 210, 0);
        cs2_1899(0, 75, 50);
        splineAddPoint(0, 2, coord(3503, 3697, 0), 715, coord(3488, 3695, 0), 775, 0);
        splineAddPoint(1, 2, coord(3488, 3688, 0), -45, coord(3484, 3684, 0), 210, 0);
        cs2_1899(1, 50, 50);
    }
    return [coord(3486, 3688, 0), colour(0x131414)];
}
