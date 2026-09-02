/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_268

function cs2_268(intArg0: component): void {
    let int1: coord = cs2_284(coord());

    switch (varc_tutorial3_cutscene_tracker) {
        case 0:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 1:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 5);
            splineNew(1, 5);
            splineAddPoint(0, 0, moveCoord(int1, 25, 0, 17), 586, moveCoord(int1, 27, 0, 14), 586, 0);
            splineAddPoint(1, 0, moveCoord(int1, 26, 0, 24), 284, moveCoord(int1, 29, 0, 24), 284, 0);
            splineAddPoint(0, 1, moveCoord(int1, 25, 0, 17), 586, moveCoord(int1, 27, 0, 14), 586, 0);
            splineAddPoint(1, 1, moveCoord(int1, 26, 0, 24), 284, moveCoord(int1, 29, 0, 24), 284, 0);
            splineAddPoint(0, 2, moveCoord(int1, 35, 0, 16), 618, moveCoord(int1, 40, 0, 21), 618, 0);
            splineAddPoint(1, 2, moveCoord(int1, 28, 0, 20), 372, moveCoord(int1, 28, 0, 18), 372, 0);
            splineAddPoint(0, 3, moveCoord(int1, 27, 0, 24), 1500, moveCoord(int1, 24, 0, 23), 1025, 0);
            splineAddPoint(1, 3, moveCoord(int1, 32, 0, 13), 308, moveCoord(int1, 36, 0, 13), 308, 0);
            splineAddPoint(0, 4, moveCoord(int1, 25, 0, 22), 450, moveCoord(int1, 25, 0, 22), 450, 0);
            splineAddPoint(1, 4, moveCoord(int1, 32, 0, 13), 600, moveCoord(int1, 32, 0, 13), 600, 0);
            camMovealong(0, 0, 0, 0, 1, 0);
            break;
        case 2:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 5);
            splineNew(1, 5);
            splineAddPoint(0, 0, moveCoord(int1, 36, 0, 17), 626, moveCoord(int1, 33, 0, 14), 626, 0);
            splineAddPoint(1, 0, moveCoord(int1, 37, 0, 25), 308, moveCoord(int1, 35, 0, 22), 308, 0);
            splineAddPoint(0, 1, moveCoord(int1, 36, 0, 17), 626, moveCoord(int1, 33, 0, 14), 626, 0);
            splineAddPoint(1, 1, moveCoord(int1, 37, 0, 25), 308, moveCoord(int1, 35, 0, 22), 308, 0);
            splineAddPoint(0, 2, moveCoord(int1, 30, 0, 17), 840, moveCoord(int1, 31, 0, 19), 1395, 0);
            splineAddPoint(1, 2, moveCoord(int1, 36, 0, 21), 388, moveCoord(int1, 37, 0, 20), 388, 0);
            splineAddPoint(0, 3, moveCoord(int1, 38, 0, 22), 1500, moveCoord(int1, 41, 0, 22), 1670, 0);
            splineAddPoint(1, 3, moveCoord(int1, 33, 0, 14), 300, moveCoord(int1, 26, 0, 11), 300, 0);
            splineAddPoint(0, 4, moveCoord(int1, 38, 0, 22), 450, moveCoord(int1, 38, 0, 22), 450, 0);
            splineAddPoint(1, 4, moveCoord(int1, 33, 0, 14), 600, moveCoord(int1, 33, 0, 14), 600, 0);
            camMovealong(0, 0, 0, 0, 1, 0);
            break;
        case 3:
            camMovealong(0, 1, 50, 1000, 1, 1);
            ifSetOnCamFinished(hook(cs2_270, "iI", [2, intArg0]), intArg0);
            break;
    }
}
