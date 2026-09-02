/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1247

function cs2_1247(intArg0: number): [number, number] {
    if (intArg0 == 1) {
        splineNew(0, 6);
        splineNew(1, 6);
        splineAddPoint(0, 0, coord(3207, 3429, 0), 900, coord(3207, 3426, 0), 900, 0);
        splineAddPoint(1, 0, coord(3213, 3429, 0), 300, coord(3213, 3429, 0), 300, 0);
        splineAddPoint(0, 1, coord(3213, 3423, 0), 900, coord(3216, 3423, 0), 900, 0);
        splineAddPoint(1, 1, coord(3213, 3429, 0), 300, coord(3213, 3429, 0), 300, 0);
        cs2_1899(0, 100, 150);
        splineAddPoint(0, 2, coord(3219, 3429, 0), 900, coord(3219, 3432, 0), 900, 0);
        splineAddPoint(1, 2, coord(3213, 3429, 0), 300, coord(3213, 3429, 0), 300, 0);
        cs2_1899(1, 100, 150);
        splineAddPoint(0, 3, coord(3213, 3435, 0), 900, coord(3210, 3435, 0), 900, 0);
        splineAddPoint(1, 3, coord(3213, 3429, 0), 300, coord(3213, 3429, 0), 300, 0);
        cs2_1899(2, 100, 150);
        splineAddPoint(0, 4, coord(3207, 3429, 0), 900, coord(3207, 3426, 0), 900, 0);
        splineAddPoint(1, 4, coord(3213, 3429, 0), 300, coord(3213, 3429, 0), 300, 0);
        cs2_1899(3, 100, 150);
        splineAddPoint(0, 5, coord(3213, 3423, 0), 900, coord(3216, 3423, 0), 900, 0);
        splineAddPoint(1, 5, coord(3213, 3429, 0), 300, coord(3213, 3429, 0), 300, 0);
        cs2_1899(4, 100, 150);
    }
    return [52890976, 1250324];
}
