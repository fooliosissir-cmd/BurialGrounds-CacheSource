/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_flythrough_client]

function clan_flythrough_client(intArg0: component): void {
    let int1: coord = cs2_284(coord());

    switch (varc_tutorial3_cutscene_tracker) {
        case 1:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 11:
            if (getWindowMode() >= 2) {
                ifSetOnVarTransmit(hook(cs2_5210, "IY", [event_com], [466]), Component.interface_746.component_746_6);
                cs2_5211(true);
            }
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, moveCoord(int1, 28, 0, 27), 900, moveCoord(int1, 28, 0, 27), 900, 0);
            splineAddPoint(0, 1, moveCoord(int1, 28, 0, 27), 750, moveCoord(int1, 28, 0, 27), 750, 0);
            splineAddPoint(1, 0, moveCoord(int1, 23, 0, 8), 200, moveCoord(int1, 23, 0, 8), 200, 0);
            splineAddPoint(1, 1, moveCoord(int1, 23, 0, 8), 250, moveCoord(int1, 23, 0, 8), 250, 0);
            camMovealong(0, 0, 50, 0, 1, 0);
            break;
        case 12:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 21:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, moveCoord(int1, 16, 0, 26), 900, moveCoord(int1, 16, 0, 26), 900, 0);
            splineAddPoint(0, 1, moveCoord(int1, 16, 0, 26), 900, moveCoord(int1, 16, 0, 26), 900, 0);
            splineAddPoint(1, 0, moveCoord(int1, 24, 0, 37), 500, moveCoord(int1, 24, 0, 37), 500, 0);
            splineAddPoint(1, 1, moveCoord(int1, 24, 0, 37), 500, moveCoord(int1, 24, 0, 37), 500, 0);
            camMovealong(0, 0, 100, 0, 1, 0);
            break;
        case 22:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 31:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, moveCoord(int1, 31, 0, 11), 700, moveCoord(int1, 31, 0, 11), 700, 0);
            splineAddPoint(0, 1, moveCoord(int1, 24, 0, 11), 800, moveCoord(int1, 24, 0, 11), 800, 0);
            splineAddPoint(1, 0, moveCoord(int1, 28, 0, 19), 350, moveCoord(int1, 28, 0, 19), 350, 0);
            splineAddPoint(1, 1, moveCoord(int1, 28, 0, 19), 350, moveCoord(int1, 28, 0, 19), 350, 0);
            camMovealong(0, 0, 50, 0, 1, 0);
            break;
        case 32:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 41:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, moveCoord(int1, 37, 0, 41), 1200, moveCoord(int1, 37, 0, 41), 1200, 0);
            splineAddPoint(0, 1, moveCoord(int1, 37, 0, 41), 800, moveCoord(int1, 37, 0, 41), 800, 0);
            splineAddPoint(1, 0, moveCoord(int1, 27, 0, 49), 700, moveCoord(int1, 27, 0, 49), 700, 0);
            splineAddPoint(1, 1, moveCoord(int1, 27, 0, 49), 650, moveCoord(int1, 27, 0, 49), 650, 0);
            camMovealong(0, 0, 50, 0, 1, 0);
            break;
        case 42:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 51:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, moveCoord(int1, 37, 0, 9), 1300, moveCoord(int1, 37, 0, 9), 1300, 0);
            splineAddPoint(0, 1, moveCoord(int1, 37, 0, 9), 1300, moveCoord(int1, 37, 0, 9), 1300, 0);
            splineAddPoint(1, 0, moveCoord(int1, 27, 0, 17), 700, moveCoord(int1, 27, 0, 17), 700, 0);
            splineAddPoint(1, 1, moveCoord(int1, 27, 0, 17), 700, moveCoord(int1, 27, 0, 17), 700, 0);
            camMovealong(0, 0, 50, 0, 1, 0);
            break;
        case 52:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 61:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, moveCoord(int1, 33, 0, 30), 600, moveCoord(int1, 33, 0, 30), 600, 0);
            splineAddPoint(0, 1, moveCoord(int1, 33, 0, 30), 550, moveCoord(int1, 33, 0, 30), 550, 0);
            splineAddPoint(1, 0, moveCoord(int1, 24, 0, 33), 180, moveCoord(int1, 24, 0, 33), 180, 0);
            splineAddPoint(1, 1, moveCoord(int1, 24, 0, 33), 180, moveCoord(int1, 24, 0, 33), 180, 0);
            camMovealong(0, 0, 30, 0, 1, 0);
            break;
        case 62:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 71:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, moveCoord(int1, 18, 1, 34), 1000, moveCoord(int1, 18, 1, 34), 1000, 0);
            splineAddPoint(0, 1, moveCoord(int1, 18, 1, 44), 1000, moveCoord(int1, 18, 1, 44), 1000, 0);
            splineAddPoint(1, 0, moveCoord(int1, 24, 1, 39), 800, moveCoord(int1, 24, 1, 39), 800, 0);
            splineAddPoint(1, 1, moveCoord(int1, 24, 1, 39), 700, moveCoord(int1, 24, 1, 39), 700, 0);
            camMovealong(0, 0, 80, 0, 1, 0);
            break;
        case 72:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 81:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, moveCoord(int1, 15, 1, 18), 700, moveCoord(int1, 15, 1, 18), 700, 0);
            splineAddPoint(0, 1, moveCoord(int1, 15, 1, 18), 700, moveCoord(int1, 15, 1, 18), 700, 0);
            splineAddPoint(1, 0, moveCoord(int1, 24, 1, 30), 300, moveCoord(int1, 24, 1, 30), 300, 0);
            splineAddPoint(1, 1, moveCoord(int1, 24, 1, 12), 600, moveCoord(int1, 24, 1, 12), 600, 0);
            camMovealong(0, 0, 300, 0, 1, 0);
            break;
        case 82:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 999:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 1000:
            camSmoothreset();
            proc_tutorial3_fadein(50, intArg0);
            break;
        default:
            camSmoothreset();
            break;
    }
}
