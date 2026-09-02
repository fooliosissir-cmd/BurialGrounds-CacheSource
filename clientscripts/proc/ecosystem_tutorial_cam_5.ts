/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ecosystem_tutorial_cam_5]

function ecosystem_tutorial_cam_5(intArg0: component): void {
    let int1: coord = cs2_284(coord());

    splineNew(0, 2);
    splineNew(1, 2);
    splineAddPoint(0, 0, moveCoord(int1, 22, 0, 20), 700, moveCoord(int1, 22, 0, 20), 700, 0);
    splineAddPoint(1, 0, moveCoord(int1, 20, 0, 31), 500, moveCoord(int1, 20, 0, 31), 500, 0);
    splineAddPoint(0, 1, moveCoord(int1, 22, 0, 25), 700, moveCoord(int1, 22, 0, 25), 700, 0);
    splineAddPoint(1, 1, moveCoord(int1, 20, 0, 31), 400, moveCoord(int1, 20, 0, 31), 400, 0);
    camMovealong(0, 0, 450, 450, 1, 0);
}
