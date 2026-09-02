/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,love_flashback]

function love_flashback(intArg0: component, intArg1: component): void {
    switch (varc_tutorial3_cutscene_tracker) {
        case 51:
            ccDeleteAll(intArg0);
            proc_tutorial3_fadeout(colour(0x000000), 100, intArg0);
            break;
        case 52:
            if (varc_evq_region_sw == -1 || coordX(coord()) - coordX(varc_evq_region_sw) > 128 || coordZ(coord()) - coordZ(varc_evq_region_sw) > 128) {
                varc_evq_region_sw = cs2_284(coord());
            }
            proc_tutorial3_fadein(75, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, cs2_3474(0, 30, 26), 500, cs2_3474(0, 29, 26), 500, 0);
            splineAddPoint(1, 0, cs2_3474(0, 33, 26), 250, cs2_3474(0, 33, 26), 250, 0);
            splineAddPoint(0, 1, cs2_3474(0, 20, 30), 600, cs2_3474(0, 20, 30), 500, 0);
            splineAddPoint(1, 1, cs2_3474(0, 23, 26), 250, cs2_3474(0, 23, 26), 250, 0);
            camMovealong(0, 0, 150, 150, 1, 0);
            break;
        case 53:
            splineNew(0, 3);
            splineNew(1, 3);
            splineAddPoint(0, 0, cs2_3474(0, 7, 26), 425, cs2_3474(0, 6, 26), 425, 0);
            splineAddPoint(1, 0, cs2_3474(0, 13, 25), 275, cs2_3474(0, 13, 25), 275, 0);
            splineAddPoint(0, 1, cs2_3474(0, 5, 28), 425, cs2_3474(0, 6, 26), 425, 0);
            splineAddPoint(1, 1, cs2_3474(0, 11, 27), 275, cs2_3474(0, 11, 27), 275, 0);
            splineAddPoint(0, 2, cs2_3474(0, 3, 26), 425, cs2_3474(0, 3, 27), 425, 0);
            splineAddPoint(1, 2, cs2_3474(0, 11, 26), 275, cs2_3474(0, 11, 26), 275, 0);
            ifSetOnCamFinished(hook(cs2_3473, "Iiiiii", [intArg0, 1, 50, 0, 0, 0]), intArg0);
            camMovealong(0, 0, 150, 50, 1, 0);
            break;
        case 54:
            ifSetOnCamFinished(noHook(""), intArg0);
            proc_tutorial3_fadeout(colour(0x000000), 25, intArg0);
            break;
        case 55:
            proc_tutorial3_fadein(25, intArg0);
            splineNew(0, 4);
            splineNew(1, 4);
            splineAddPoint(0, 0, cs2_3474(0, 79, 16), 800, cs2_3474(0, 79, 16), 800, 0);
            splineAddPoint(1, 0, cs2_3474(0, 73, 18), 325, cs2_3474(0, 73, 18), 325, 0);
            splineAddPoint(0, 1, cs2_3474(0, 81, 17), 900, cs2_3474(0, 81, 17), 900, 0);
            splineAddPoint(1, 1, cs2_3474(0, 73, 17), 275, cs2_3474(0, 73, 17), 275, 0);
            splineAddPoint(0, 2, cs2_3474(0, 82, 19), 1000, cs2_3474(0, 82, 19), 1000, 0);
            splineAddPoint(1, 2, cs2_3474(0, 73, 16), 225, cs2_3474(0, 73, 16), 225, 0);
            splineAddPoint(0, 3, cs2_3474(0, 82, 16), 1100, cs2_3474(0, 82, 16), 1100, 0);
            splineAddPoint(1, 3, cs2_3474(0, 73, 17), 175, cs2_3474(0, 73, 17), 175, 0);
            ifSetOnCamFinished(hook(cs2_3473, "Iiiiii", [intArg0, 1, 175, 125, 125, 0]), intArg0);
            camMovealong(0, 0, 150, 175, 1, 0);
            break;
        case 56:
            proc_tutorial3_fadein(25, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, cs2_3474(0, 3, 28), 425, cs2_3474(0, 3, 27), 425, 0);
            splineAddPoint(1, 0, cs2_3474(0, 11, 26), 275, cs2_3474(0, 11, 26), 275, 0);
            splineAddPoint(0, 1, cs2_3474(0, 0, 25), 425, cs2_3474(0, 0, 26), 425, 0);
            splineAddPoint(1, 1, cs2_3474(0, 11, 26), 275, cs2_3474(0, 11, 26), 275, 0);
            camMovealong(0, 0, 75, 0, 1, 0);
            break;
        case 57:
            proc_tutorial3_fadein(25, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, cs2_3474(0, 123, 15), 800, cs2_3474(0, 123, 15), 800, 0);
            splineAddPoint(1, 0, cs2_3474(0, 114, 11), 175, cs2_3474(0, 114, 11), 175, 0);
            splineAddPoint(0, 1, cs2_3474(0, 120, 10), 600, cs2_3474(0, 120, 10), 600, 0);
            splineAddPoint(1, 1, cs2_3474(0, 114, 12), 275, cs2_3474(0, 114, 12), 275, 0);
            camMovealong(0, 0, 100, 0, 1, 0);
            break;
        case 58:
            proc_tutorial3_fadein(25, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, cs2_3474(0, 7, 26), 400, cs2_3474(0, 7, 26), 400, 0);
            splineAddPoint(1, 0, cs2_3474(0, 11, 27), 275, cs2_3474(0, 11, 27), 275, 0);
            splineAddPoint(0, 1, cs2_3474(0, 8, 29), 400, cs2_3474(0, 8, 29), 400, 0);
            splineAddPoint(1, 1, cs2_3474(0, 11, 28), 275, cs2_3474(0, 11, 28), 275, 0);
            camMovealong(0, 0, 50, 0, 1, 0);
            break;
        case 59:
            ifSetOnCamFinished(noHook(""), intArg0);
            proc_tutorial3_fadeout(colour(0x000000), 75, intArg0);
            break;
        case 60:
            proc_tutorial3_fadein(75, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, cs2_3474(0, 43, 28), 700, cs2_3474(0, 42, 28), 700, 0);
            splineAddPoint(1, 0, cs2_3474(0, 31, 24), 200, cs2_3474(0, 31, 24), 200, 0);
            splineAddPoint(0, 1, cs2_3474(0, 36, 25), 425, cs2_3474(0, 36, 25), 425, 0);
            splineAddPoint(1, 1, cs2_3474(0, 32, 27), 275, cs2_3474(0, 32, 27), 275, 0);
            camMovealong(0, 0, 125, 0, 1, 0);
            break;
        case 61:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 3);
            splineNew(1, 3);
            splineAddPoint(0, 0, cs2_3474(0, 40, 90), 1200, cs2_3474(0, 35, 90), 1200, -2000);
            splineAddPoint(1, 0, cs2_3474(0, 24, 110), 425, cs2_3474(0, 24, 110), 425, 0);
            splineAddPoint(0, 1, cs2_3474(0, 15, 97), 700, cs2_3474(0, 14, 97), 700, 500);
            splineAddPoint(1, 1, cs2_3474(0, 29, 110), 400, cs2_3474(0, 29, 110), 400, 0);
            splineAddPoint(0, 2, cs2_3474(0, 22, 102), 650, cs2_3474(0, 22, 102), 650, 0);
            splineAddPoint(1, 2, cs2_3474(0, 30, 111), 400, cs2_3474(0, 30, 111), 400, 0);
            ifSetOnCamFinished(hook(cs2_3473, "Iiiiii", [intArg0, 1, 400, 100, 100, 0]), intArg0);
            camMovealong(0, 0, 400, 400, 1, 0);
            break;
        case 62:
            ifSetOnCamFinished(noHook(""), intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, cs2_3474(0, 34, 120), 750, cs2_3474(0, 29, 120), 750, 0);
            splineAddPoint(1, 0, cs2_3474(0, 30, 112), 425, cs2_3474(0, 30, 112), 425, 0);
            splineAddPoint(0, 1, cs2_3474(0, 33, 117), 750, cs2_3474(0, 33, 117), 750, 0);
            splineAddPoint(1, 1, cs2_3474(0, 30, 111), 425, cs2_3474(0, 30, 111), 425, 0);
            camMovealong(0, 0, 50, 100, 1, 0);
            break;
        case 63:
            proc_tutorial3_fadein(50, intArg0);
            proc_clanwars_ffa(1, intArg1, Component.interface_990.component_990_5, Component.interface_990.component_990_6, Component.interface_990.component_990_7, Component.interface_990.component_990_8, -1, 1);
            ifSetHide(false, intArg1);
            splineNew(0, 3);
            splineNew(1, 3);
            splineAddPoint(0, 0, cs2_3474(1, 64, 98), 500, cs2_3474(1, 66, 96), 500, 0);
            splineAddPoint(1, 0, cs2_3474(1, 90, 98), 500, cs2_3474(1, 90, 98), 500, 0);
            splineAddPoint(0, 1, cs2_3474(1, 90, 80), 1000, cs2_3474(1, 88, 80), 950, 0);
            splineAddPoint(1, 1, cs2_3474(1, 91, 98), 500, cs2_3474(1, 91, 98), 500, 0);
            splineAddPoint(0, 2, cs2_3474(1, 91, 87), 1000, cs2_3474(1, 91, 87), 1000, 0);
            splineAddPoint(1, 2, cs2_3474(1, 90, 98), 500, cs2_3474(1, 90, 98), 500, 0);
            ifSetOnCamFinished(hook(cs2_3473, "Iiiiii", [intArg0, 1, 200, 0, 0, 0]), intArg0);
            camMovealong(0, 0, 700, 700, 1, 0);
            break;
        case 64:
            ifSetOnCamFinished(noHook(""), intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, cs2_3474(1, 91, 91), 800, cs2_3474(1, 91, 91), 800, 0);
            splineAddPoint(1, 0, cs2_3474(1, 91, 98), 450, cs2_3474(1, 91, 98), 450, 0);
            splineAddPoint(0, 1, cs2_3474(1, 91, 94), 750, cs2_3474(1, 91, 94), 750, 0);
            splineAddPoint(1, 1, cs2_3474(1, 91, 98), 425, cs2_3474(1, 91, 98), 425, 0);
            camMovealong(0, 0, 75, 0, 1, 0);
            break;
        case 65:
            ifSetHide(true, intArg1);
            proc_tutorial3_fadein(75, intArg0);
            break;
        default:
            camSmoothreset();
            break;
    }
}
