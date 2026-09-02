/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,love_wizardstower]

function love_wizardstower(intArg0: component, intArg1: coord): void {
    switch (varc_tutorial3_cutscene_tracker) {
        case 101:
            ccDeleteAll(intArg0);
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 102:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, love_instance(7, 54, intArg1), 1000, love_instance(8, 54, intArg1), 1000, 0);
            splineAddPoint(1, 0, love_instance(13, 50, intArg1), 450, love_instance(13, 50, intArg1), 450, 0);
            splineAddPoint(0, 1, love_instance(13, 51, intArg1), 800, love_instance(13, 52, intArg1), 800, 0);
            splineAddPoint(1, 1, love_instance(14, 44, intArg1), 550, love_instance(14, 44, intArg1), 550, 0);
            camMovealong(0, 0, 100, 100, 1, 0);
            proc_tutorial3_fadein(75, intArg0);
            break;
        case 103:
            ccDeleteAll(intArg0);
            ifSetOnTimer(hook(cs2_3467, "Iii", [intArg0, clientClock(), 100]), intArg0);
            break;
        case 104:
            ifSetOnTimer(noHook(""), intArg0);
            if (ccFind(intArg0, 0) == 1) {
                ccSetTrans(0);
                ccSetOnTimer(noHook(""));
            } else {
                proc_tutorial3_fadeout(colour(0x000000), 0, intArg0);
            }
            break;
        case 105:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, love_instance(31, 22, intArg1), 600, love_instance(31, 23, intArg1), 600, 0);
            splineAddPoint(1, 0, love_instance(32, 29, intArg1), 50, love_instance(32, 30, intArg1), 50, 0);
            splineAddPoint(0, 1, love_instance(35, 33, intArg1), 500, love_instance(35, 32, intArg1), 500, 0);
            splineAddPoint(1, 1, love_instance(29, 36, intArg1), 50, love_instance(30, 36, intArg1), 50, 0);
            camMovealong(0, 0, 500, 450, 1, 0);
            proc_tutorial3_fadein(50, intArg0);
            break;
        case 106:
            camMoveto(love_instance(33, 38, intArg1), 475, 1000, 100);
            camLookat(love_instance(29, 33, intArg1), 50, 1000, 100);
            break;
        case 107:
            camMoveto(love_instance(32, 37, intArg1), 450, 1000, 100);
            camLookat(love_instance(31, 31, intArg1), 50, 1000, 100);
            break;
        case 108:
            camMoveto(love_instance(35, 38, intArg1), 600, 1000, 100);
            camLookat(love_instance(29, 36, intArg1), 50, 1000, 100);
            break;
        case 109:
            camMoveto(love_instance(35, 37, intArg1), 500, 1000, 100);
            camLookat(love_instance(31, 31, intArg1), 50, 1000, 100);
            break;
        case 110:
            camMoveto(love_instance(35, 36, intArg1), 400, 1000, 100);
            camLookat(love_instance(28, 34, intArg1), 50, 1000, 100);
            break;
        case 111:
            camMoveto(love_instance(36, 35, intArg1), 800, 1000, 100);
            camLookat(love_instance(29, 36, intArg1), 50, 1000, 100);
            break;
        case 112:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 113:
            splineNew(0, 7);
            splineNew(1, 7);
            splineAddPoint(0, 0, love_instance(42, 82, intArg1), 400, love_instance(42, 79, intArg1), 400, 0);
            splineAddPoint(1, 0, love_instance(42, 58, intArg1), 250, love_instance(42, 58, intArg1), 250, 0);
            splineAddPoint(0, 1, love_instance(42, 59, intArg1), 1500, love_instance(40, 55, intArg1), 1500, 0);
            splineAddPoint(1, 1, love_instance(41, 46, intArg1), 600, love_instance(41, 46, intArg1), 600, 0);
            splineAddPoint(0, 2, love_instance(29, 50, intArg1), 1800, love_instance(25, 47, intArg1), 1800, 0);
            splineAddPoint(1, 2, love_instance(36, 43, intArg1), 600, love_instance(35, 43, intArg1), 600, 0);
            splineAddPoint(0, 3, love_instance(24, 40, intArg1), 2100, love_instance(24, 34, intArg1), 2100, 0);
            splineAddPoint(1, 3, love_instance(36, 42, intArg1), 600, love_instance(36, 41, intArg1), 600, 0);
            splineAddPoint(0, 4, love_instance(37, 26, intArg1), 2400, love_instance(45, 26, intArg1), 2400, 0);
            splineAddPoint(1, 4, love_instance(37, 42, intArg1), 500, love_instance(38, 43, intArg1), 500, 0);
            splineAddPoint(0, 5, love_instance(52, 35, intArg1), 1700, love_instance(55, 39, intArg1), 1700, 0);
            splineAddPoint(1, 5, love_instance(38, 42, intArg1), 400, love_instance(38, 41, intArg1), 400, 0);
            splineAddPoint(0, 6, love_instance(47, 52, intArg1), 600, love_instance(43, 55, intArg1), 600, 0);
            splineAddPoint(1, 6, love_instance(37, 48, intArg1), 325, love_instance(37, 49, intArg1), 325, 0);
            ifSetOnCamFinished(hook(cs2_3468, "Iiiiiiiiiiii", [intArg0, 1, 900, 1300, 1300, 1600, 1600, 1600, 1600, 1200, 1200, 200]), intArg0);
            camMovealong(0, 0, 100, 900, 1, 0);
            proc_tutorial3_fadein(50, intArg0);
            break;
        case 114:
            splineNew(0, 3);
            splineNew(1, 3);
            splineAddPoint(0, 0, love_instance(43, 59, intArg1), 800, love_instance(43, 59, intArg1), 800, 0);
            splineAddPoint(1, 0, love_instance(37, 37, intArg1), 10, love_instance(37, 37, intArg1), 10, 0);
            splineAddPoint(0, 1, love_instance(35, 59, intArg1), 800, love_instance(35, 59, intArg1), 800, 0);
            splineAddPoint(1, 1, love_instance(39, 38, intArg1), 10, love_instance(39, 38, intArg1), 10, 0);
            splineAddPoint(0, 2, love_instance(33, 60, intArg1), 1000, love_instance(33, 60, intArg1), 1000, 0);
            splineAddPoint(1, 2, love_instance(39, 38, intArg1), 10, love_instance(39, 38, intArg1), 10, 0);
            ifSetOnCamFinished(hook(cs2_3468, "Iiiiiiiiiiii", [intArg0, 1, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0]), intArg0);
            camMovealong(0, 0, 150, 100, 1, 0);
            break;
        case 115:
            ifSetOnCamFinished(noHook(""), intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, love_instance(35, 49, intArg1), 800, love_instance(36, 48, intArg1), 800, 0);
            splineAddPoint(1, 0, love_instance(42, 52, intArg1), 200, love_instance(42, 52, intArg1), 200, 0);
            splineAddPoint(0, 1, love_instance(39, 48, intArg1), 800, love_instance(39, 48, intArg1), 800, 0);
            splineAddPoint(1, 1, love_instance(41, 52, intArg1), 200, love_instance(41, 52, intArg1), 200, 0);
            camMovealong(0, 0, 150, 0, 1, 0);
            break;
        case 116:
            splineNew(0, 15);
            splineNew(1, 15);
            splineAddPoint(0, 0, love_instance(41, 55, intArg1), 275, love_instance(41, 55, intArg1), 275, 0);
            splineAddPoint(1, 0, love_instance(39, 47, intArg1), 10, love_instance(39, 47, intArg1), 10, 0);
            splineAddPoint(0, 1, love_instance(42, 55, intArg1), 280, love_instance(42, 55, intArg1), 280, 250);
            splineAddPoint(1, 1, love_instance(39, 47, intArg1), 20, love_instance(39, 47, intArg1), 20, 0);
            splineAddPoint(0, 2, love_instance(41, 55, intArg1), 285, love_instance(41, 55, intArg1), 285, -500);
            splineAddPoint(1, 2, love_instance(39, 47, intArg1), 30, love_instance(39, 47, intArg1), 30, 0);
            splineAddPoint(0, 3, love_instance(42, 55, intArg1), 290, love_instance(42, 55, intArg1), 290, 500);
            splineAddPoint(1, 3, love_instance(39, 47, intArg1), 40, love_instance(39, 47, intArg1), 40, 0);
            splineAddPoint(0, 4, love_instance(41, 55, intArg1), 295, love_instance(41, 55, intArg1), 295, -500);
            splineAddPoint(1, 4, love_instance(39, 47, intArg1), 50, love_instance(39, 47, intArg1), 50, 0);
            splineAddPoint(0, 5, love_instance(42, 55, intArg1), 350, love_instance(42, 55, intArg1), 350, 750);
            splineAddPoint(1, 5, love_instance(39, 47, intArg1), 50, love_instance(39, 47, intArg1), 50, 0);
            splineAddPoint(0, 6, love_instance(40, 55, intArg1), 425, love_instance(40, 55, intArg1), 425, -750);
            splineAddPoint(1, 6, love_instance(39, 47, intArg1), 50, love_instance(39, 47, intArg1), 50, 0);
            splineAddPoint(0, 7, love_instance(42, 55, intArg1), 550, love_instance(42, 55, intArg1), 550, 750);
            splineAddPoint(1, 7, love_instance(39, 47, intArg1), 50, love_instance(39, 47, intArg1), 50, 0);
            splineAddPoint(0, 8, love_instance(41, 55, intArg1), 675, love_instance(41, 55, intArg1), 675, -750);
            splineAddPoint(1, 8, love_instance(39, 47, intArg1), 50, love_instance(39, 47, intArg1), 50, 0);
            splineAddPoint(0, 9, love_instance(43, 55, intArg1), 850, love_instance(43, 55, intArg1), 850, 500);
            splineAddPoint(1, 9, love_instance(39, 47, intArg1), 50, love_instance(39, 47, intArg1), 50, 0);
            splineAddPoint(0, 10, love_instance(41, 55, intArg1), 1000, love_instance(41, 55, intArg1), 1000, -500);
            splineAddPoint(1, 10, love_instance(39, 47, intArg1), 50, love_instance(39, 47, intArg1), 50, 0);
            splineAddPoint(0, 11, love_instance(42, 55, intArg1), 1150, love_instance(42, 55, intArg1), 1150, 250);
            splineAddPoint(1, 11, love_instance(39, 47, intArg1), 50, love_instance(39, 47, intArg1), 50, 0);
            splineAddPoint(0, 12, love_instance(41, 55, intArg1), 1300, love_instance(41, 55, intArg1), 1300, -250);
            splineAddPoint(1, 12, love_instance(39, 47, intArg1), 50, love_instance(39, 47, intArg1), 50, 0);
            splineAddPoint(0, 13, love_instance(42, 55, intArg1), 1450, love_instance(42, 55, intArg1), 1450, 125);
            splineAddPoint(1, 13, love_instance(39, 47, intArg1), 50, love_instance(39, 47, intArg1), 50, 0);
            splineAddPoint(0, 14, love_instance(41, 55, intArg1), 1500, love_instance(41, 55, intArg1), 1500, 0);
            splineAddPoint(1, 14, love_instance(39, 47, intArg1), 50, love_instance(39, 47, intArg1), 50, 0);
            ifSetOnCamFinished(hook(love_wizardstower_thingummywut, "Ii", [intArg0, 1]), intArg0);
            camMovealong(0, 0, 2500, 3200, 1, 0);
            break;
        case 117:
            ifSetOnCamFinished(noHook(""), intArg0);
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 118:
            proc_tutorial3_fadein(50, intArg0);
            break;
        default:
            camSmoothreset();
            break;
    }
}
