/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5726

function cs2_5726(intArg0: component): void {
    let int1: coord = cs2_284(coord());

    switch (varc_tutorial3_cutscene_tracker) {
        case 1:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 2:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, moveCoord(int1, 34, 0, 52), 300, moveCoord(int1, 34, 0, 52), 300, 0);
            splineAddPoint(0, 1, moveCoord(int1, 34, 0, 52), 300, moveCoord(int1, 34, 0, 52), 300, 0);
            splineAddPoint(1, 0, moveCoord(int1, 30, 0, 51), 150, moveCoord(int1, 30, 0, 51), 150, 0);
            splineAddPoint(1, 1, moveCoord(int1, 30, 0, 51), 150, moveCoord(int1, 30, 0, 51), 150, 0);
            camMovealong(0, 0, 50, 0, 1, 0);
            break;
        case 5:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, moveCoord(int1, 32, 0, 47), 350, moveCoord(int1, 32, 0, 47), 400, 0);
            splineAddPoint(0, 1, moveCoord(int1, 32, 0, 47), 350, moveCoord(int1, 32, 0, 47), 400, 0);
            splineAddPoint(1, 0, moveCoord(int1, 32, 0, 52), 200, moveCoord(int1, 32, 0, 52), 200, 0);
            splineAddPoint(1, 1, moveCoord(int1, 32, 0, 52), 200, moveCoord(int1, 32, 0, 52), 200, 0);
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
