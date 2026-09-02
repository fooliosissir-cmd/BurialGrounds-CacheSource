/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ecosystem_tutorial_cam_4]

function ecosystem_tutorial_cam_4(intArg0: component): void {
    let int1: coord = cs2_284(coord());

    splineNew(0, 2);
    splineNew(1, 2);
    splineAddPoint(0, 0, moveCoord(int1, 19, 0, 28), 900, moveCoord(int1, 19, 0, 28), 900, 0);
    splineAddPoint(1, 0, moveCoord(int1, 27, 0, 29), 400, moveCoord(int1, 27, 0, 29), 400, 0);
    splineAddPoint(0, 1, moveCoord(int1, 19, 0, 28), 1000, moveCoord(int1, 19, 0, 28), 1000, 0);
    splineAddPoint(1, 1, moveCoord(int1, 25, 0, 29), 300, moveCoord(int1, 25, 0, 29), 300, 0);
    camMovealong(0, 0, 450, 450, 1, 0);
}
