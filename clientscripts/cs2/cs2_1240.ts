/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1240

function cs2_1240(intArg0: number): [number, number] {
    if (intArg0 == 1) {
        splineNew(0, 6);
        splineNew(1, 6);
        splineAddPoint(0, 0, coord(2498, 2855, 0), 800, coord(2498, 2850, 0), 810, 0);
        splineAddPoint(1, 0, coord(2509, 2855, 0), 120, coord(2509, 2851, 0), 120, 0);
        splineAddPoint(0, 1, coord(2513, 2830, 0), 1310, coord(2531, 2822, 0), 1210, 0);
        splineAddPoint(1, 1, coord(2526, 2839, 0), -120, coord(2541, 2837, 0), -120, 0);
        cs2_1899(0, 100, 150);
        splineAddPoint(0, 2, coord(2551, 2833, 0), 1235, coord(2557, 2837, 0), 1235, 0);
        splineAddPoint(1, 2, coord(2548, 2846, 0), 120, coord(2548, 2846, 0), 120, 0);
        cs2_1899(1, 100, 150);
        splineAddPoint(0, 3, coord(2560, 2853, 0), 1190, coord(2558, 2862, 0), 1190, 0);
        splineAddPoint(1, 3, coord(2548, 2848, 0), 120, coord(2548, 2848, 0), 120, 0);
        cs2_1899(2, 100, 150);
        splineAddPoint(0, 4, coord(2533, 2848, 0), 1000, coord(2531, 2829, 0), 975, 0);
        splineAddPoint(1, 4, coord(2546, 2848, 0), 120, coord(2546, 2848, 0), 120, 0);
        cs2_1899(3, 100, 150);
        splineAddPoint(0, 5, coord(2531, 2828, 0), 1000, coord(2531, 2828, 0), 975, 0);
        splineAddPoint(1, 5, coord(2546, 2847, 0), 200, coord(2546, 2847, 0), 200, 0);
        cs2_1899(4, 100, 150);
    }
    return [41437980, 1250324];
}
