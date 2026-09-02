/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1241

function cs2_1241(intArg0: number): [number, number] {
    if (intArg0 == 1) {
        splineNew(0, 5);
        splineNew(1, 5);
        splineAddPoint(0, 0, coord(3314, 3211, 0), 1300, coord(3307, 3211, 0), 1300, 0);
        splineAddPoint(1, 0, coord(3307, 3208, 0), 425, coord(3296, 3210, 0), 425, 0);
        splineAddPoint(0, 1, coord(3303, 3220, 0), 1250, coord(3302, 3223, 0), 1240, 0);
        splineAddPoint(1, 1, coord(3294, 3228, 0), 425, coord(3295, 3235, 0), 425, 0);
        cs2_1899(0, 100, 150);
        splineAddPoint(0, 2, coord(3307, 3231, 0), 1025, coord(3310, 3234, 0), 870, 0);
        splineAddPoint(1, 2, coord(3306, 3243, 0), 425, coord(3310, 3246, 0), 425, 0);
        cs2_1899(1, 100, 150);
        splineAddPoint(0, 3, coord(3314, 3234, 0), 640, coord(3314, 3234, 0), 480, 0);
        splineAddPoint(1, 3, coord(3314, 3253, 0), 185, coord(3314, 3258, 0), 120, 0);
        cs2_1899(2, 100, 150);
        splineAddPoint(0, 4, coord(3314, 3243, 0), 500, coord(3314, 3243, 0), 495, 0);
        splineAddPoint(1, 4, coord(3314, 3259, 0), 185, coord(3314, 3259, 0), 115, 0);
        cs2_1899(3, 100, 150);
    }
    return [54299813, 1250324];
}
