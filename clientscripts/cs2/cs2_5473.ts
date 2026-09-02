/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5473

function cs2_5473(intArg0: coord): void {
    splineNew(0, 7);
    splineNew(1, 7);
    splineAddPoint(0, 0, moveCoord(intArg0, -8, 2, -9), 1900, moveCoord(intArg0, -6, 2, -11), 1900, 0);
    splineAddPoint(1, 0, moveCoord(intArg0, -3, 2, -2), 1200, moveCoord(intArg0, -2, 2, -3), 1200, 0);
    splineAddPoint(0, 1, moveCoord(intArg0, 0, 2, -12), 1900, moveCoord(intArg0, 2, 2, -12), 1900, 0);
    splineAddPoint(1, 1, moveCoord(intArg0, 0, 2, -4), 1200, moveCoord(intArg0, 1, 2, -4), 1200, 0);
    splineAddPoint(0, 2, moveCoord(intArg0, 7, 2, -9), 1900, moveCoord(intArg0, 9, 2, -7), 1900, 0);
    splineAddPoint(1, 2, moveCoord(intArg0, 3, 2, -3), 1200, moveCoord(intArg0, 4, 2, -2), 1200, 0);
    splineAddPoint(0, 3, moveCoord(intArg0, 11, 2, 0), 1900, moveCoord(intArg0, 11, 2, 3), 1900, 0);
    splineAddPoint(1, 3, moveCoord(intArg0, 4, 2, 0), 1200, moveCoord(intArg0, 4, 2, 1), 1200, 0);
    splineAddPoint(0, 4, moveCoord(intArg0, 8, 2, 10), 1900, moveCoord(intArg0, 6, 2, 12), 1900, 0);
    splineAddPoint(1, 4, moveCoord(intArg0, 3, 2, 3), 1200, moveCoord(intArg0, 2, 2, 4), 1200, 0);
    splineAddPoint(0, 5, moveCoord(intArg0, 0, 2, 13), 1900, moveCoord(intArg0, -2, 2, 13), 1900, 0);
    splineAddPoint(1, 5, moveCoord(intArg0, 0, 2, 4), 1200, moveCoord(intArg0, -1, 2, 4), 1200, 0);
    splineAddPoint(0, 6, moveCoord(intArg0, -8, 2, 9), 1900, moveCoord(intArg0, -10, 2, 7), 1900, 0);
    splineAddPoint(1, 6, moveCoord(intArg0, -3, 2, 2), 1200, moveCoord(intArg0, -4, 2, 0), 1200, 0);
    camMovealong(0, 0, 490, 490, 1, 0);
    ifSetOnCamFinished(hook(cs2_5474, "ii", [0, 490]), Component.interface_1172.component_1172_9);
}
