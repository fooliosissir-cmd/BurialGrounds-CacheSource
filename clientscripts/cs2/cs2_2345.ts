/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2345

function cs2_2345(): void {
    varc_mah1_orbit_step = 0;
    let int0: number = coordX(coord()) - coordX(coord()) % 64;
    let int1: number = coordZ(coord()) - coordZ(coord()) % 64;
    let int2: coord = moveCoord(0, int0, 0, int1);
    let int3: coord = moveCoord(int2, coordX(coord(31, 40, 0)), 0, coordZ(coord(31, 40, 0)));
    splineNew(0, 5);
    splineAddPoint(0, 0, moveCoord(int3, 0, 0, -5), 800, moveCoord(int3, 0, 0, -5), 900, 0);
    splineAddPoint(0, 1, moveCoord(int3, -5, 0, -1), 800, moveCoord(int3, -5, 0, 0), 900, 0);
    splineAddPoint(0, 2, moveCoord(int3, -1, 0, 5), 800, moveCoord(int3, 0, 0, 5), 900, 0);
    splineAddPoint(0, 3, moveCoord(int3, 5, 0, 1), 800, moveCoord(int3, 5, 0, 0), 900, 0);
    splineAddPoint(0, 4, moveCoord(int3, 0, 0, -3), 800, moveCoord(int3, 0, 0, -3), 900, 0);
    splineNew(1, 5);
    splineAddPoint(1, 0, int3, 400, int3, 400, 0);
    splineAddPoint(1, 1, int3, 400, int3, 400, 0);
    splineAddPoint(1, 2, int3, 400, int3, 400, 0);
    splineAddPoint(1, 3, int3, 400, int3, 400, 0);
    splineAddPoint(1, 4, int3, 500, int3, 500, 0);
    camMovealong(0, 0, 200, 200, 1, 0);
    ifSetOnCamFinished(hook(mah1_orbit_next, "", []), Component.interface_582.component_582_0);
}
