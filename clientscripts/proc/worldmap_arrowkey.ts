/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_arrowkey]

function worldmap_arrowkey(intArg0: number, intArg1: number): void {
    if (worldMapIsloaded() == 0) {
        return;
    }
    let int2: number = 15 + max(varc_worldmap_arrowscroll - clientClock(), 0);
    varc_worldmap_arrowscroll = min(max(varc_worldmap_arrowscroll + 2, clientClock() + 2), clientClock() + 25);

    switch (varc_worldmap_zoom) {
        case 37:
            int2 = int2 * 5;
            break;
        case 50:
            int2 = int2 * 4;
            break;
        case 75:
            int2 = int2 * 3;
            break;
        case 100:
            int2 = int2 * 2;
            break;
    }
    let [int3, int4] = worldMapGetDisplayPosition();
    worldMapJumptodisplaycoord(moveCoord(0, max(int3 + intArg0 * int2, 0), 0, max(int4 + intArg1 * int2, 0)));
}
