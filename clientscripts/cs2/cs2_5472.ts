/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5472

function cs2_5472(intArg0: coord): void {
    splineNew(0, 4);
    splineNew(1, 4);
    splineAddPoint(0, 0, moveCoord(intArg0, -7, 2, -7), 1800, moveCoord(intArg0, -6, 2, -9), 1800, 0);
    splineAddPoint(1, 0, moveCoord(intArg0, -2, 2, -2), 1200, moveCoord(intArg0, -1, 2, -3), 1200, 0);
    splineAddPoint(0, 1, moveCoord(intArg0, 5, 2, -7), 1800, moveCoord(intArg0, 9, 2, -3), 1800, 0);
    splineAddPoint(1, 1, moveCoord(intArg0, 1, 2, -2), 1200, moveCoord(intArg0, 2, 2, -1), 1200, 0);
    splineAddPoint(0, 2, moveCoord(intArg0, 5, 2, 6), 1800, moveCoord(intArg0, 2, 2, 8), 1800, 0);
    splineAddPoint(1, 2, moveCoord(intArg0, 1, 2, 1), 1200, moveCoord(intArg0, 0, 2, 2), 1200, 0);
    splineAddPoint(0, 3, moveCoord(intArg0, -7, 2, 5), 1800, moveCoord(intArg0, -11, 2, 1), 1800, 0);
    splineAddPoint(1, 3, moveCoord(intArg0, -2, 2, 1), 1200, moveCoord(intArg0, -3, 2, 0), 1200, 0);
    camMovealong(0, 0, 450, 450, 1, 0);
    ifSetOnCamFinished(hook(cs2_5474, "ii", [0, 450]), Component.interface_1172.component_1172_9);
}
