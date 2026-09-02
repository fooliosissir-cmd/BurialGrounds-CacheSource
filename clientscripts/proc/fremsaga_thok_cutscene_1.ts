/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fremsaga_thok_cutscene_1]

function fremsaga_thok_cutscene_1(intArg0: number): void {
    let int1: coord = cs2_284(moveCoord(coord(), -16, 0, 0));

    splineNew(0, 2);
    splineNew(1, 2);
    splineAddPoint(0, 0, moveCoord(int1, 52, 0, 58), 700, moveCoord(int1, 52, 0, 58), 700, 0);
    splineAddPoint(1, 0, moveCoord(int1, 55, 0, 62), 500, moveCoord(int1, 55, 0, 62), 500, 0);
    splineAddPoint(0, 1, moveCoord(int1, 52, 0, 55), 900, moveCoord(int1, 52, 0, 55), 900, 0);
    splineAddPoint(1, 1, moveCoord(int1, 55, 0, 63), 400, moveCoord(int1, 55, 0, 63), 400, 0);
    camMovealong(0, 0, 100, 300, 1, 0);
}
