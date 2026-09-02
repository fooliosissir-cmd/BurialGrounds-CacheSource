/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1859

function cs2_1859(intArg0: number): [number, number] {
    if (intArg0 == 1) {
        splineNew(0, 5);
        splineNew(1, 5);
        splineAddPoint(0, 0, coord(2659, 3299, 0), 1350, coord(2653, 3299, 0), 1350, 0);
        splineAddPoint(1, 0, coord(2659, 3311, 0), 330, coord(2659, 3311, 0), 330, 0);
        splineAddPoint(0, 1, coord(2647, 3311, 0), 1250, coord(2647, 3317, 0), 1250, 0);
        splineAddPoint(1, 1, coord(2659, 3311, 0), 330, coord(2659, 3311, 0), 330, 0);
        cs2_1899(0, 100, 150);
        splineAddPoint(0, 2, coord(2659, 3323, 0), 1150, coord(2666, 3323, 0), 1150, 0);
        splineAddPoint(1, 2, coord(2659, 3311, 0), 330, coord(2659, 3311, 0), 330, 0);
        cs2_1899(1, 100, 150);
        splineAddPoint(0, 3, coord(2671, 3311, 0), 1050, coord(2671, 3305, 0), 1050, 0);
        splineAddPoint(1, 3, coord(2659, 3311, 0), 330, coord(2659, 3311, 0), 330, 0);
        cs2_1899(2, 100, 150);
        splineAddPoint(0, 4, coord(2659, 3299, 0), 950, coord(2653, 3299, 0), 950, 0);
        splineAddPoint(1, 4, coord(2659, 3311, 0), 330, coord(2659, 3311, 0), 330, 0);
        cs2_1899(3, 100, 150);
    }
    return [43568355, 1250324];
}
