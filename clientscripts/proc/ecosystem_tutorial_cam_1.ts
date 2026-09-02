/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ecosystem_tutorial_cam_1]

function ecosystem_tutorial_cam_1(intArg0: component): void {
    let int1: coord = cs2_284(coord());

    splineNew(0, 3);
    splineNew(1, 3);
    splineAddPoint(0, 0, moveCoord(int1, 23, 0, 25), 700, moveCoord(int1, 23, 0, 25), 700, 0);
    splineAddPoint(1, 0, moveCoord(int1, 30, 0, 33), 400, moveCoord(int1, 30, 0, 22), 400, 0);
    splineAddPoint(0, 1, moveCoord(int1, 23, 0, 25), 700, moveCoord(int1, 23, 0, 25), 700, 0);
    splineAddPoint(1, 1, moveCoord(int1, 27, 0, 29), 500, moveCoord(int1, 27, 0, 29), 500, 0);
    splineAddPoint(0, 2, moveCoord(int1, 23, 0, 25), 700, moveCoord(int1, 23, 0, 25), 700, 0);
    splineAddPoint(1, 2, moveCoord(int1, 31, 0, 33), 400, moveCoord(int1, 31, 0, 33), 400, 0);
    camMovealong(0, 0, 1000000, 1000000, 1, 0);
}
