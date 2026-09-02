/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_267

function cs2_267(intArg0: component): void {
    let int1: coord = cs2_284(coord());

    switch (varc_tutorial3_cutscene_tracker) {
        case 0:
            proc_tutorial3_fadeout(colour(0x000000), 0, intArg0);
            break;
        case 1:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 4);
            splineNew(1, 4);
            splineAddPoint(0, 0, moveCoord(int1, 33, 0, 18), 326, moveCoord(int1, 31, 0, 20), 326, 0);
            splineAddPoint(1, 0, moveCoord(int1, 32, 0, 15), 300, moveCoord(int1, 32, 0, 15), 300, 0);
            splineAddPoint(0, 1, moveCoord(int1, 33, 0, 18), 326, moveCoord(int1, 31, 0, 20), 326, 0);
            splineAddPoint(1, 1, moveCoord(int1, 32, 0, 15), 300, moveCoord(int1, 32, 0, 15), 300, 0);
            splineAddPoint(0, 2, moveCoord(int1, 25, 0, 19), 970, moveCoord(int1, 23, 0, 18), 1035, 0);
            splineAddPoint(1, 2, moveCoord(int1, 32, 0, 15), 300, moveCoord(int1, 32, 0, 15), 300, 0);
            splineAddPoint(0, 3, moveCoord(int1, 23, 0, 11), 1055, moveCoord(int1, 24, 0, 9), 1055, 0);
            splineAddPoint(1, 3, moveCoord(int1, 32, 0, 15), 300, moveCoord(int1, 32, 0, 15), 300, 0);
            camMovealong(0, 0, 0, 0, 1, 0);
            break;
        case 2:
            camMovealong(0, 1, 1500, 1500, 1, 0);
            ifSetOnCamFinished(hook(cs2_269, "iI", [2, intArg0]), intArg0);
            break;
    }
}
