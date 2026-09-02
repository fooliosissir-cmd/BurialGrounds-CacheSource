/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3415

function cs2_3415(intArg0: number): [coord, colour] {
    if (intArg0 == 1) {
        splineNew(0, 6);
        splineNew(1, 6);
        splineAddPoint(0, 0, coord(2421, 4472, 0), 800, coord(2416, 4470, 0), 835, 0);
        splineAddPoint(1, 0, coord(2407, 4468, 0), 415, coord(2403, 4466, 0), 430, 0);
        splineAddPoint(0, 1, coord(2406, 4468, 0), 985, coord(2403, 4467, 0), 930, 0);
        splineAddPoint(1, 1, coord(2395, 4460, 0), 458, coord(2390, 4454, 0), 458, 0);
        cs2_1899(0, 150, 150);
        splineAddPoint(0, 2, coord(2393, 4458, 0), 1025, coord(2389, 4451, 0), 810, 1200);
        splineAddPoint(1, 2, coord(2398, 4447, 0), 430, coord(2401, 4446, 0), 415, 0);
        cs2_1899(1, 150, 150);
        splineAddPoint(0, 3, coord(2398, 4446, 0), 670, coord(2404, 4445, 0), 630, 400);
        splineAddPoint(1, 3, coord(2410, 4441, 0), 346, coord(2413, 4438, 0), 346, 0);
        cs2_1899(2, 150, 150);
        splineAddPoint(0, 4, coord(2412, 4440, 0), 1150, coord(2415, 4435, 0), 1490, -600);
        splineAddPoint(1, 4, coord(2412, 4429, 0), 394, coord(2412, 4429, 0), 394, 0);
        cs2_1899(3, 150, 150);
        splineAddPoint(0, 5, coord(2412, 4427, 0), 475, coord(2411, 4425, 0), 0, 0);
        splineAddPoint(1, 5, coord(2412, 4427, 0), 330, coord(2412, 4425, 0), 330, 0);
        cs2_1899(4, 150, 150);
    }
    return [coord(2398, 4447, 0), colour(0x000000)];
}
