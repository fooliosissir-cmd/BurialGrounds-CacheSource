/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2466

function cs2_2466(intArg0: number): [number, number] {
    if (intArg0 == 1) {
        splineNew(0, 6);
        splineNew(1, 6);
        splineAddPoint(0, 0, coord(4153, 5829, 0), 710, coord(4150, 5835, 0), 605, 0);
        splineAddPoint(1, 0, coord(4148, 5839, 0), 258, coord(4145, 5842, 0), 258, 0);
        splineAddPoint(0, 1, coord(4144, 5843, 0), 725, coord(4138, 5850, 0), 875, 0);
        splineAddPoint(1, 1, coord(4138, 5849, 0), 474, coord(4135, 5852, 0), 474, 0);
        cs2_1899(0, 200, 300);
        splineAddPoint(0, 2, coord(4135, 5852, 0), 925, coord(4129, 5857, 0), 915, 0);
        splineAddPoint(1, 2, coord(4126, 5859, 0), 530, coord(4122, 5861, 0), 530, 0);
        cs2_1899(1, 300, 200);
        splineAddPoint(0, 3, coord(4121, 5862, 0), 780, coord(4118, 5864, 0), 700, 0);
        splineAddPoint(1, 3, coord(4119, 5865, 0), 444, coord(4116, 5868, 0), 355, 0);
        cs2_1899(2, 200, 200);
        splineAddPoint(0, 4, coord(4113, 5871, 0), 665, coord(4113, 5876, 0), 645, 0);
        splineAddPoint(1, 4, coord(4117, 5878, 0), 190, coord(4118, 5882, 0), 160, 0);
        cs2_1899(3, 200, 200);
        splineAddPoint(0, 5, coord(4118, 5883, 0), 650, coord(4121, 5886, 0), 640, 0);
        splineAddPoint(1, 5, coord(4122, 5886, 0), 70, coord(4125, 5888, 0), 15, 0);
        cs2_1899(4, 200, 200);
    }
    return [67671776, 1250324];
}
