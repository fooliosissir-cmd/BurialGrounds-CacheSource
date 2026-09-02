/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dom_taunt_player_cutscene]

function dom_taunt_player_cutscene(): void {
    let int0: coord = cs2_284(coord());

    splineNew(0, 3);
    splineNew(1, 3);
    splineAddPoint(0, 0, moveCoord(int0, 23, 2, 39), 1800, moveCoord(int0, 26, 2, 41), 1800, 0);
    splineAddPoint(1, 0, moveCoord(int0, 25, 2, 35), 1300, moveCoord(int0, 27, 2, 35), 1300, 0);
    splineAddPoint(0, 1, moveCoord(int0, 31, 2, 36), 1700, moveCoord(int0, 32, 2, 34), 1700, 0);
    splineAddPoint(1, 1, moveCoord(int0, 28, 2, 34), 1300, moveCoord(int0, 28, 2, 33), 1300, 0);
    splineAddPoint(0, 2, moveCoord(int0, 29, 2, 31), 1500, moveCoord(int0, 27, 2, 30), 1500, 0);
    splineAddPoint(1, 2, moveCoord(int0, 27, 2, 32), 1300, moveCoord(int0, 26, 2, 31), 1300, 0);
    camMovealong(0, 0, 400, 400, 1, 0);
    ifSetOnCamFinished(hook(cs2_5474, "ii", [0, 400]), Component.interface_1172.component_1172_9);
}
