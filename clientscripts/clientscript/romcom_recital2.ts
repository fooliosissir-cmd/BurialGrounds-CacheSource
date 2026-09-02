/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,romcom_recital2]

function romcom_recital2(intArg0: component): void {
    let int1: coord = cs2_284(coord());

    switch (varc_tutorial3_cutscene_tracker) {
        case 1:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 2:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, moveCoord(int1, 31, 0, 37), 900, moveCoord(int1, 31, 0, 37), 900, 0);
            splineAddPoint(0, 1, moveCoord(int1, 31, 0, 39), 750, moveCoord(int1, 31, 0, 39), 750, 0);
            splineAddPoint(1, 0, moveCoord(int1, 31, 0, 43), 700, moveCoord(int1, 31, 0, 43), 700, 0);
            splineAddPoint(1, 1, moveCoord(int1, 31, 0, 43), 700, moveCoord(int1, 31, 0, 43), 700, 0);
            camMovealong(0, 0, 50, 0, 1, 0);
            break;
        case 3:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, moveCoord(int1, 31, 0, 27), 900, moveCoord(int1, 31, 0, 27), 900, 0);
            splineAddPoint(0, 1, moveCoord(int1, 31, 0, 27), 1000, moveCoord(int1, 31, 0, 27), 1000, 0);
            splineAddPoint(1, 0, moveCoord(int1, 31, 0, 33), 750, moveCoord(int1, 31, 0, 33), 750, 0);
            splineAddPoint(1, 1, moveCoord(int1, 31, 0, 33), 750, moveCoord(int1, 31, 0, 33), 750, 0);
            camMovealong(0, 0, 50, 0, 1, 0);
            break;
        case 40:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, moveCoord(int1, 36, 0, 29), 850, moveCoord(int1, 36, 0, 29), 850, 0);
            splineAddPoint(0, 1, moveCoord(int1, 36, 0, 29), 800, moveCoord(int1, 36, 0, 29), 800, 0);
            splineAddPoint(1, 0, moveCoord(int1, 33, 0, 36), 700, moveCoord(int1, 33, 0, 36), 700, 0);
            splineAddPoint(1, 1, moveCoord(int1, 33, 0, 36), 600, moveCoord(int1, 33, 0, 36), 600, 0);
            camMovealong(0, 0, 50, 0, 1, 0);
            break;
        case 50:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, moveCoord(int1, 39, 0, 23), 1000, moveCoord(int1, 39, 0, 23), 1000, 0);
            splineAddPoint(0, 1, moveCoord(int1, 39, 0, 23), 950, moveCoord(int1, 39, 0, 23), 950, 0);
            splineAddPoint(1, 0, moveCoord(int1, 36, 0, 28), 750, moveCoord(int1, 36, 0, 28), 750, 0);
            splineAddPoint(1, 1, moveCoord(int1, 36, 0, 28), 650, moveCoord(int1, 36, 0, 28), 650, 0);
            camMovealong(0, 0, 50, 0, 1, 0);
            break;
        case 99:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 100:
            camSmoothreset();
            proc_tutorial3_fadein(50, intArg0);
            break;
        default:
            camSmoothreset();
            break;
    }
}
