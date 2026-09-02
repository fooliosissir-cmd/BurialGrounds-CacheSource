/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1678

function cs2_1678(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: coord = -1;

    if (splineLength(0) == 0) {
        int0 = coordX(coord()) - coordX(coord()) % 64;
        int1 = coordZ(coord()) - coordZ(coord()) % 64;
        int2 = moveCoord(0, int0, 0, int1);
        splineNew(0, 5);
        splineNew(1, 5);
        splineAddPoint(0, 0, moveCoord(int2, 51, 0, 39), 400, moveCoord(int2, 51, 0, 39), 400, 0);
        splineAddPoint(1, 0, moveCoord(int2, 50, 0, 25), 225, moveCoord(int2, 50, 0, 25), 225, 0);
        splineAddPoint(0, 1, moveCoord(int2, 51, 0, 29), 325, moveCoord(int2, 51, 0, 29), 225, 0);
        splineAddPoint(1, 1, moveCoord(int2, 50, 0, 19), 175, moveCoord(int2, 50, 0, 19), 175, 0);
        splineAddPoint(0, 2, moveCoord(int2, 57, 0, 23), 1200, moveCoord(int2, 57, 0, 23), 1200, 0);
        splineAddPoint(1, 2, moveCoord(int2, 47, 0, 18), 25, moveCoord(int2, 47, 0, 18), 25, 0);
        splineAddPoint(0, 3, moveCoord(int2, 46, 0, 5), 600, moveCoord(int2, 46, 0, 5), 600, 0);
        splineAddPoint(1, 3, moveCoord(int2, 46, 0, 16), 250, moveCoord(int2, 46, 0, 16), 250, 0);
        splineAddPoint(0, 4, moveCoord(int2, 41, 0, 27), 1125, moveCoord(int2, 41, 0, 27), 1125, 0);
        splineAddPoint(1, 4, moveCoord(int2, 44, 0, 19), 275, moveCoord(int2, 44, 0, 19), 275, 0);
    }
}
