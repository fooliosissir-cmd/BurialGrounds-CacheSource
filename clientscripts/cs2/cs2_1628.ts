/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1628

function cs2_1628(): void {
    varc_wtl_spline_step = 0;
    let int0: number = coordX(coord()) - coordX(coord()) % 64;
    let int1: number = coordZ(coord()) - coordZ(coord()) % 64;
    let int2: coord = moveCoord(0, int0, 0, int1);
    splineNew(0, 6);
    splineAddPoint(0, 0, moveCoord(int2, 22, 0, 9), 450, moveCoord(int2, 22, 0, 9), 400, 0);
    splineAddPoint(0, 1, moveCoord(int2, 13, 0, 17), 450, moveCoord(int2, 13, 0, 7), 400, 0);
    splineAddPoint(0, 2, moveCoord(int2, 17, 0, 20), 550, moveCoord(int2, 17, 0, 20), 600, 0);
    splineAddPoint(0, 3, moveCoord(int2, 17, 0, 20), 650, moveCoord(int2, 17, 0, 20), 700, 0);
    splineAddPoint(0, 4, moveCoord(int2, 24, 0, 19), 450, moveCoord(int2, 24, 0, 19), 500, 0);
    splineAddPoint(0, 5, moveCoord(int2, 26, 0, 12), 450, moveCoord(int2, 26, 0, 12), 500, 0);
    splineNew(1, 6);
    splineAddPoint(1, 0, moveCoord(int2, 8, 0, 12), 300, moveCoord(int2, 8, 0, 12), 300, 0);
    splineAddPoint(1, 1, moveCoord(int2, 8, 0, 20), 300, moveCoord(int2, 8, 0, 20), 300, 0);
    splineAddPoint(1, 2, moveCoord(int2, 8, 0, 12), 300, moveCoord(int2, 8, 0, 12), 300, 0);
    splineAddPoint(1, 3, moveCoord(int2, 8, 0, 28), 300, moveCoord(int2, 8, 0, 28), 300, 0);
    splineAddPoint(1, 4, moveCoord(int2, 30, 0, 16), 300, moveCoord(int2, 30, 0, 16), 300, 0);
    splineAddPoint(1, 5, moveCoord(int2, 30, 0, 16), 400, moveCoord(int2, 30, 0, 16), 400, 0);
    ifSetOnCamFinished(hook(cs2_1631, "", []), Component.interface_75.component_75_0);
    camMovealong(0, 0, 200, 200, 1, 0);
}
