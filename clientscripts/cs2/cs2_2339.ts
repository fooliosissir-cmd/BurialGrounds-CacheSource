/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2339

function cs2_2339(): void {
    varc_mah1_tutorial_camera_step = 0;
    let int0: number = coordX(coord()) - coordX(coord()) % 64;
    let int1: number = coordZ(coord()) - coordZ(coord()) % 64;
    let int2: number = 574;
    let int3: number = 942;
    let int4: coord = moveCoord(0, int0, 0, int1);
    splineNew(0, 14);
    splineNew(1, 14);
    splineAddPoint(0, 0, moveCoord(int4, 20, 0, 30), int3, moveCoord(int4, 27, 0, 26), int3, 0);
    splineAddPoint(1, 0, moveCoord(int4, 25, 0, 36), int2, moveCoord(int4, 31, 0, 33), int2, 0);
    splineAddPoint(0, 1, moveCoord(int4, 41, 0, 36), int3, moveCoord(int4, 41, 0, 39), int3, 0);
    splineAddPoint(1, 1, moveCoord(int4, 38, 0, 42), int2, moveCoord(int4, 38, 0, 46), int2, 0);
    splineAddPoint(0, 2, moveCoord(int4, 35, 0, 49), int3, moveCoord(int4, 37, 0, 51), int3, 0);
    splineAddPoint(1, 2, moveCoord(int4, 38, 0, 57), int2, moveCoord(int4, 40, 0, 57), int2, 0);
    splineAddPoint(0, 3, moveCoord(int4, 35, 0, 40), int3, moveCoord(int4, 31, 0, 37), int3, 0);
    splineAddPoint(1, 3, moveCoord(int4, 38, 0, 54), int2, moveCoord(int4, 37, 0, 54), int2, 0);
    splineAddPoint(0, 4, moveCoord(int4, 24, 0, 41), int3, moveCoord(int4, 24, 0, 38), int3, 0);
    splineAddPoint(1, 4, moveCoord(int4, 12, 0, 43), int2, moveCoord(int4, 7, 0, 41), int2, 0);
    splineAddPoint(0, 5, moveCoord(int4, 30, 0, 43), int3, moveCoord(int4, 31, 0, 43), int3, 0);
    splineAddPoint(1, 5, moveCoord(int4, 8, 0, 41), int2, moveCoord(int4, 0, 0, 39), int2, 0);
    splineAddPoint(0, 6, moveCoord(int4, 35, 0, 43), int3, moveCoord(int4, 37, 0, 43), int3, 0);
    splineAddPoint(1, 6, moveCoord(int4, 36, 0, 27), int2, moveCoord(int4, 27, 0, 28), int2, 0);
    splineAddPoint(0, 7, moveCoord(int4, 35, 0, 45), int3, moveCoord(int4, 31, 0, 44), int3, 0);
    splineAddPoint(1, 7, moveCoord(int4, 36, 0, 30), int2, moveCoord(int4, 35, 0, 31), int2, 0);
    splineAddPoint(0, 8, moveCoord(int4, 41, 0, 40), int3, moveCoord(int4, 42, 0, 40), int3, 0);
    splineAddPoint(1, 8, moveCoord(int4, 54, 0, 39), int2, moveCoord(int4, 56, 0, 39), int2, 0);
    splineAddPoint(0, 9, moveCoord(int4, 44, 0, 42), int3, moveCoord(int4, 44, 0, 45), int3, 0);
    splineAddPoint(1, 9, moveCoord(int4, 54, 0, 40), int2, moveCoord(int4, 53, 0, 39), int2, 0);
    splineAddPoint(0, 10, moveCoord(int4, 30, 0, 51), int3, moveCoord(int4, 20, 0, 50), int3, 0);
    splineAddPoint(1, 10, moveCoord(int4, 32, 0, 40), int2, moveCoord(int4, 26, 0, 42), int2, 0);
    splineAddPoint(0, 11, moveCoord(int4, 22, 0, 39), int3, moveCoord(int4, 22, 0, 36), int3, 0);
    splineAddPoint(1, 11, moveCoord(int4, 33, 0, 41), int2, moveCoord(int4, 34, 0, 41), int2, 0);
    splineAddPoint(0, 12, moveCoord(int4, 32, 0, 29), int3, moveCoord(int4, 42, 0, 27), int3, 0);
    splineAddPoint(1, 12, moveCoord(int4, 32, 0, 42), int2, moveCoord(int4, 32, 0, 43), int2, 0);
    splineAddPoint(0, 13, moveCoord(int4, 47, 0, 40), 778, moveCoord(int4, 47, 0, 46), 778, 0);
    splineAddPoint(1, 13, moveCoord(int4, 31, 0, 41), int2, moveCoord(int4, 28, 0, 41), int2, 0);
    ifSetOnCamFinished(hook(mah1_tutorial_camera_next, "", []), Component.interface_558.component_558_0);
    camMovealong(0, varc_mah1_tutorial_camera_step, 500, 900, 1, varc_mah1_tutorial_camera_step);
}
