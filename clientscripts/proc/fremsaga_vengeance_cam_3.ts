/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fremsaga_vengeance_cam_3]

function fremsaga_vengeance_cam_3(intArg0: number): void {
    let int1: coord = cs2_284(coord());

    splineNew(0, 4);
    splineNew(1, 4);
    splineAddPoint(0, 0, moveCoord(int1, 7, 0, 30), 700, moveCoord(int1, 7, 0, 30), 700, 0);
    splineAddPoint(1, 0, moveCoord(int1, 8, 0, 22), 200, moveCoord(int1, 8, 0, 22), 200, 0);
    splineAddPoint(0, 1, moveCoord(int1, 0, 0, 15), 800, moveCoord(int1, 0, 0, 15), 800, 0);
    splineAddPoint(1, 1, moveCoord(int1, 8, 0, 22), 300, moveCoord(int1, 8, 0, 22), 300, 0);
    splineAddPoint(0, 2, moveCoord(int1, 7, 0, 15), 600, moveCoord(int1, 7, 0, 15), 600, 0);
    splineAddPoint(1, 2, moveCoord(int1, 8, 0, 22), 100, moveCoord(int1, 8, 0, 22), 100, 0);
    splineAddPoint(0, 3, moveCoord(int1, 15, 0, 15), 800, moveCoord(int1, 15, 0, 15), 800, 0);
    splineAddPoint(1, 3, moveCoord(int1, 8, 0, 22), 300, moveCoord(int1, 8, 0, 22), 300, 0);
    camMovealong(0, 0, 100, 400, 1, 0);
}
