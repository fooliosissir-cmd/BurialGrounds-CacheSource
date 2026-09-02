/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dom_taunt_npc_cutscene]

function dom_taunt_npc_cutscene(intArg0: number): void {
    let int1: coord = cs2_284(coord());

    if (intArg0 == 0) {
        splineNew(0, 4);
        splineNew(1, 4);
        splineAddPoint(0, 0, moveCoord(int1, 38, 2, 41), 2300, moveCoord(int1, 35, 2, 41), 2300, 0);
        splineAddPoint(1, 0, moveCoord(int1, 38, 2, 36), 1300, moveCoord(int1, 37, 2, 36), 1300, 0);
        splineAddPoint(0, 1, moveCoord(int1, 31, 2, 36), 2200, moveCoord(int1, 30, 2, 34), 2200, 0);
        splineAddPoint(1, 1, moveCoord(int1, 36, 2, 34), 1400, moveCoord(int1, 36, 2, 33), 1400, 0);
        splineAddPoint(0, 2, moveCoord(int1, 31, 2, 28), 2100, moveCoord(int1, 32, 2, 26), 2100, 0);
        splineAddPoint(1, 2, moveCoord(int1, 36, 2, 31), 1400, moveCoord(int1, 36, 2, 30), 1400, 0);
        splineAddPoint(0, 3, moveCoord(int1, 38, 2, 24), 1900, moveCoord(int1, 40, 2, 24), 1900, 0);
        splineAddPoint(1, 3, moveCoord(int1, 38, 2, 29), 1400, moveCoord(int1, 39, 2, 29), 1400, 0);
    } else if (intArg0 == 1) {
        splineNew(0, 4);
        splineNew(1, 4);
        splineAddPoint(0, 0, moveCoord(int1, 34, 2, 41), 2400, moveCoord(int1, 32, 2, 40), 2400, 0);
        splineAddPoint(1, 0, moveCoord(int1, 38, 2, 36), 1300, moveCoord(int1, 37, 2, 36), 1300, 0);
        splineAddPoint(0, 1, moveCoord(int1, 30, 2, 36), 2300, moveCoord(int1, 29, 2, 34), 2300, 0);
        splineAddPoint(1, 1, moveCoord(int1, 36, 2, 34), 1400, moveCoord(int1, 36, 2, 33), 1400, 0);
        splineAddPoint(0, 2, moveCoord(int1, 30, 2, 29), 2200, moveCoord(int1, 31, 2, 27), 2200, 0);
        splineAddPoint(1, 2, moveCoord(int1, 36, 2, 31), 1400, moveCoord(int1, 36, 2, 30), 1400, 0);
        splineAddPoint(0, 3, moveCoord(int1, 34, 2, 25), 2000, moveCoord(int1, 35, 2, 25), 2000, 0);
        splineAddPoint(1, 3, moveCoord(int1, 38, 2, 29), 1400, moveCoord(int1, 39, 2, 29), 1400, 0);
    } else if (intArg0 == 2) {
        splineNew(0, 6);
        splineNew(1, 6);
        splineAddPoint(0, 0, moveCoord(int1, 32, 2, 45), 2000, moveCoord(int1, 28, 2, 45), 2000, 0);
        splineAddPoint(1, 0, moveCoord(int1, 31, 2, 37), 1300, moveCoord(int1, 30, 2, 37), 1300, 0);
        splineAddPoint(0, 1, moveCoord(int1, 21, 2, 40), 2000, moveCoord(int1, 18, 2, 37), 2000, 0);
        splineAddPoint(1, 1, moveCoord(int1, 26, 2, 35), 1300, moveCoord(int1, 25, 2, 33), 1300, 0);
        splineAddPoint(0, 2, moveCoord(int1, 20, 2, 25), 2000, moveCoord(int1, 23, 2, 21), 2000, 0);
        splineAddPoint(1, 2, moveCoord(int1, 26, 2, 29), 1300, moveCoord(int1, 27, 2, 27), 1300, 0);
        splineAddPoint(0, 3, moveCoord(int1, 32, 2, 20), 2000, moveCoord(int1, 37, 2, 20), 2000, 0);
        splineAddPoint(1, 3, moveCoord(int1, 31, 2, 28), 1300, moveCoord(int1, 33, 2, 29), 1300, 0);
        splineAddPoint(0, 4, moveCoord(int1, 41, 2, 27), 2000, moveCoord(int1, 42, 2, 30), 2000, 0);
        splineAddPoint(1, 4, moveCoord(int1, 34, 2, 31), 1300, moveCoord(int1, 35, 2, 33), 1300, 0);
        splineAddPoint(0, 5, moveCoord(int1, 40, 2, 40), 2000, moveCoord(int1, 37, 2, 43), 2000, 0);
        splineAddPoint(1, 5, moveCoord(int1, 33, 2, 36), 1300, moveCoord(int1, 32, 2, 37), 1300, 0);
    } else {
        splineNew(0, 4);
        splineNew(1, 4);
        splineAddPoint(0, 0, moveCoord(int1, 37, 2, 41), 2200, moveCoord(int1, 35, 2, 40), 2200, 0);
        splineAddPoint(1, 0, moveCoord(int1, 41, 2, 36), 1300, moveCoord(int1, 40, 2, 36), 1300, 0);
        splineAddPoint(0, 1, moveCoord(int1, 33, 2, 36), 2100, moveCoord(int1, 32, 2, 34), 2100, 0);
        splineAddPoint(1, 1, moveCoord(int1, 39, 2, 34), 1400, moveCoord(int1, 39, 2, 33), 1400, 0);
        splineAddPoint(0, 2, moveCoord(int1, 33, 2, 29), 2000, moveCoord(int1, 34, 2, 27), 2000, 0);
        splineAddPoint(1, 2, moveCoord(int1, 39, 2, 31), 1400, moveCoord(int1, 39, 2, 30), 1400, 0);
        splineAddPoint(0, 3, moveCoord(int1, 37, 2, 25), 1800, moveCoord(int1, 38, 2, 25), 1800, 0);
        splineAddPoint(1, 3, moveCoord(int1, 41, 2, 29), 1400, moveCoord(int1, 42, 2, 29), 1400, 0);
    }
    camMovealong(0, 0, 400, 400, 1, 0);
    ifSetOnCamFinished(hook(cs2_5474, "ii", [0, 400]), Component.interface_1172.component_1172_9);
}
