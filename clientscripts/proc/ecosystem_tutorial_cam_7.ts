/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ecosystem_tutorial_cam_7]

function ecosystem_tutorial_cam_7(intArg0: component): void {
    let int1: coord = cs2_284(coord());

    splineNew(0, 2);
    splineNew(1, 2);
    splineAddPoint(0, 0, moveCoord(int1, 26, 0, 23), 500, moveCoord(int1, 26, 0, 23), 500, 0);
    splineAddPoint(1, 0, moveCoord(int1, 12, 0, 30), 400, moveCoord(int1, 12, 0, 30), 400, 0);
    splineAddPoint(0, 1, moveCoord(int1, 30, 0, 25), 900, moveCoord(int1, 30, 0, 25), 900, 0);
    splineAddPoint(1, 1, moveCoord(int1, 30, 0, 33), 500, moveCoord(int1, 30, 0, 33), 500, 0);
    camMovealong(0, 0, 450, 950, 1, 0);
}
