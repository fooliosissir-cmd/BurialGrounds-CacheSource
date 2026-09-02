/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6124

function cs2_6124(intArg0: coord, intArg1: coord, intArg2: number, intArg3: number, intArg4: coord, intArg5: coord, intArg6: number, intArg7: number, intArg8: number): void {
    splineNew(0, 2);
    splineNew(1, 2);
    splineAddPoint(0, 0, intArg0, intArg2, intArg0, intArg2, 0);
    splineAddPoint(1, 0, intArg4, intArg6, intArg4, intArg6, 0);
    splineAddPoint(0, 1, intArg1, intArg3, intArg1, intArg3, 0);
    splineAddPoint(1, 1, intArg5, intArg7, intArg5, intArg7, 0);
    camMovealong(0, 0, intArg8, intArg8, 1, 0);
}
