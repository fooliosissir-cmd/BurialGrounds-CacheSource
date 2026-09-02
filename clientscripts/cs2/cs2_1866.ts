/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1866

function cs2_1866(intArg0: number): [number, number] {
    if (intArg0 == 1) {
        splineNew(0, 4);
        splineNew(1, 4);
        splineAddPoint(0, 0, coord(2955, 3242, 0), 1000, coord(2953, 3242, 0), 1000, 0);
        splineAddPoint(1, 0, coord(2955, 3240, 0), 600, coord(2954, 3232, 0), 600, 0);
        splineAddPoint(0, 1, coord(2955, 3226, 0), 1000, coord(2956, 3222, 0), 1000, 0);
        splineAddPoint(1, 1, coord(2957, 3222, 0), 600, coord(2958, 3218, 0), 600, 0);
        cs2_1899(0, 100, 100);
        splineAddPoint(0, 2, coord(2962, 3204, 0), 1000, coord(2962, 3202, 0), 1000, 0);
        splineAddPoint(1, 2, coord(2965, 3201, 0), 600, coord(2965, 3200, 0), 600, 0);
        cs2_1899(1, 100, 100);
        splineAddPoint(0, 3, coord(2963, 3200, 0), 1000, coord(2963, 3200, 0), 1000, 0);
        splineAddPoint(1, 3, coord(2966, 3200, 0), 600, coord(2966, 3200, 0), 600, 0);
        cs2_1899(2, 100, 100);
    }
    return [48483486, 1250324];
}
