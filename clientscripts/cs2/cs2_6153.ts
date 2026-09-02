/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6153

function cs2_6153(intArg0: coord, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number): void {
    splineNew(0, 2);
    splineNew(1, 2);
    splineAddPoint(0, 0, moveCoord(intArg0, intArg1, 0, intArg2), intArg3, moveCoord(intArg0, intArg1, 0, intArg2), intArg3, 0);
    splineAddPoint(1, 0, moveCoord(intArg0, intArg4, 0, intArg5), intArg6, moveCoord(intArg0, intArg4, 0, intArg5), intArg6, 0);
    splineAddPoint(0, 1, moveCoord(intArg0, intArg1, 0, intArg2), intArg3, moveCoord(intArg0, intArg1, 0, intArg2), intArg3, 0);
    splineAddPoint(1, 1, moveCoord(intArg0, intArg4, 0, intArg5), intArg6, moveCoord(intArg0, intArg4, 0, intArg5), intArg6, 0);
    camMovealong(0, 0, 999, 999, 1, 0);
}
