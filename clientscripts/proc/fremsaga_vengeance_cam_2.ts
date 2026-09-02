/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fremsaga_vengeance_cam_2]

function fremsaga_vengeance_cam_2(intArg0: number): void {
    let int1: coord = cs2_284(coord());

    splineNew(0, 2);
    splineNew(1, 2);
    splineAddPoint(0, 0, moveCoord(int1, 7, 0, 30), 900, moveCoord(int1, 7, 0, 30), 900, 0);
    splineAddPoint(1, 0, moveCoord(int1, 8, 0, 22), 400, moveCoord(int1, 8, 0, 22), 400, 0);
    splineAddPoint(0, 1, moveCoord(int1, 7, 0, 30), 700, moveCoord(int1, 7, 0, 30), 700, 0);
    splineAddPoint(1, 1, moveCoord(int1, 8, 0, 22), 200, moveCoord(int1, 8, 0, 22), 200, 0);
    camMovealong(0, 0, 200, 200, 1, 0);
}
