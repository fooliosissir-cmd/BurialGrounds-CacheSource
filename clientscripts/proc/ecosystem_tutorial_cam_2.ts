/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ecosystem_tutorial_cam_2]

function ecosystem_tutorial_cam_2(intArg0: component): void {
    let int1: coord = cs2_284(coord());

    splineNew(0, 2);
    splineNew(1, 2);
    splineAddPoint(0, 0, moveCoord(int1, 23, 0, 25), 700, moveCoord(int1, 23, 0, 25), 700, 0);
    splineAddPoint(1, 0, moveCoord(int1, 31, 0, 33), 400, moveCoord(int1, 31, 0, 22), 400, 0);
    splineAddPoint(0, 1, moveCoord(int1, 31, 0, 25), 800, moveCoord(int1, 31, 0, 25), 800, 0);
    splineAddPoint(1, 1, moveCoord(int1, 31, 0, 33), 300, moveCoord(int1, 31, 0, 33), 300, 0);
    camMovealong(0, 0, 450, 450, 1, 0);
}
