/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ecosystem_tutorial_cam_8]

function ecosystem_tutorial_cam_8(intArg0: component): void {
    let int1: coord = cs2_284(coord());

    splineNew(0, 3);
    splineNew(1, 3);
    splineAddPoint(0, 0, moveCoord(int1, 26, 0, 3), 400, moveCoord(int1, 26, 0, 3), 400, 0);
    splineAddPoint(1, 0, moveCoord(int1, 12, 0, 23), 300, moveCoord(int1, 12, 0, 23), 300, 0);
    splineAddPoint(0, 1, moveCoord(int1, 28, 0, 16), 700, moveCoord(int1, 28, 0, 16), 700, 0);
    splineAddPoint(1, 1, moveCoord(int1, 13, 0, 22), 400, moveCoord(int1, 13, 0, 22), 400, 0);
    splineAddPoint(0, 2, moveCoord(int1, 36, 0, 16), 800, moveCoord(int1, 36, 0, 16), 800, 0);
    splineAddPoint(1, 2, moveCoord(int1, 36, 0, 22), 400, moveCoord(int1, 36, 0, 22), 400, 0);
    camMovealong(0, 0, 450, 450, 1, 0);
    ifSetOnCamFinished(hook(ecosystem_tutorial_cam_8_2, "I", [intArg0]), intArg0);
}
