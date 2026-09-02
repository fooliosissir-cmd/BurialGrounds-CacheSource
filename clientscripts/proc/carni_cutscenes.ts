/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,carni_cutscenes]

function carni_cutscenes(intArg0: component, intArg1: coord): void {
    ifSetOnCamFinished(noHook(""), intArg0);
    ifSetOnTimer(noHook(""), intArg0);

    switch (varc_tutorial3_cutscene_tracker) {
        case 201:
            ccDeleteAll(intArg0);
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 202:
            splineNew(0, 5);
            splineNew(1, 5);
            splineAddPoint(0, 0, carni_dungeon(11, 3, intArg1), 900, carni_dungeon(16, 3, intArg1), 900, 0);
            splineAddPoint(1, 0, carni_dungeon(7, 3, intArg1), 700, carni_dungeon(12, 3, intArg1), 700, 0);
            splineAddPoint(0, 1, carni_dungeon(33, 6, intArg1), 1000, carni_dungeon(39, 7, intArg1), 1000, 0);
            splineAddPoint(1, 1, carni_dungeon(17, 5, intArg1), 700, carni_dungeon(20, 8, intArg1), 700, 0);
            splineAddPoint(0, 2, carni_dungeon(39, 15, intArg1), 1700, carni_dungeon(39, 17, intArg1), 1700, 0);
            splineAddPoint(1, 2, carni_dungeon(20, 21, intArg1), 1000, carni_dungeon(22, 26, intArg1), 1000, 0);
            splineAddPoint(0, 3, carni_dungeon(39, 19, intArg1), 1800, carni_dungeon(39, 21, intArg1), 1800, 0);
            splineAddPoint(1, 3, carni_dungeon(30, 30, intArg1), 900, carni_dungeon(33, 33, intArg1), 900, 0);
            splineAddPoint(0, 4, carni_dungeon(37, 32, intArg1), 1600, carni_dungeon(37, 34, intArg1), 1600, 0);
            splineAddPoint(1, 4, carni_dungeon(34, 44, intArg1), 800, carni_dungeon(34, 47, intArg1), 800, 0);
            camMovealong(0, 0, 100, 400, 1, 0);
            proc_tutorial3_fadein(50, intArg0);
            ifSetOnCamFinished(hook(cs2_3468, "Iiiiiiiiiiii", [intArg0, 1, 400, 400, 400, 300, 300, 0, 0, 0, 0, 0]), intArg0);
            break;
        case 203:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, carni_dungeon(29, 6, intArg1), 550, carni_dungeon(29, 6, intArg1), 550, 0);
            splineAddPoint(1, 0, carni_dungeon(20, 5, intArg1), 550, carni_dungeon(20, 5, intArg1), 550, 0);
            splineAddPoint(0, 1, carni_dungeon(31, 6, intArg1), 600, carni_dungeon(31, 6, intArg1), 600, 0);
            splineAddPoint(1, 1, carni_dungeon(21, 5, intArg1), 600, carni_dungeon(21, 5, intArg1), 600, 0);
            camMovealong(0, 0, 100, 0, 1, 0);
            break;
        case 204:
            splineNew(0, 4);
            splineNew(1, 4);
            splineAddPoint(0, 0, carni_dungeon(15, 15, intArg1), 1500, carni_dungeon(15, 15, intArg1), 1500, 0);
            splineAddPoint(1, 0, carni_dungeon(19, 21, intArg1), 600, carni_dungeon(19, 21, intArg1), 600, 0);
            splineAddPoint(0, 1, carni_dungeon(14, 14, intArg1), 1600, carni_dungeon(14, 14, intArg1), 1600, 0);
            splineAddPoint(1, 1, carni_dungeon(18, 21, intArg1), 500, carni_dungeon(18, 21, intArg1), 500, 0);
            splineAddPoint(0, 2, carni_dungeon(16, 27, intArg1), 900, carni_dungeon(16, 27, intArg1), 900, 0);
            splineAddPoint(1, 2, carni_dungeon(27, 29, intArg1), 600, carni_dungeon(27, 29, intArg1), 600, 0);
            splineAddPoint(0, 3, carni_dungeon(16, 28, intArg1), 900, carni_dungeon(16, 28, intArg1), 900, 0);
            splineAddPoint(1, 3, carni_dungeon(30, 28, intArg1), 600, carni_dungeon(30, 28, intArg1), 600, 0);
            camMovealong(0, 0, 400, 400, 1, 0);
            break;
        case 205:
            if (splineLength(0) == 4) {
                camMovealong(0, 1, 500, 400, 1, 1);
            }
            break;
        case 206:
            if (splineLength(0) == 4) {
                camMovealong(0, 2, 500, 400, 1, 2);
            }
            break;
        case 207:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, carni_dungeon(16, 24, intArg1), 1200, carni_dungeon(17, 24, intArg1), 1200, 0);
            splineAddPoint(1, 0, carni_dungeon(52, 19, intArg1), 250, carni_dungeon(52, 19, intArg1), 250, 0);
            splineAddPoint(0, 1, carni_dungeon(40, 23, intArg1), 900, carni_dungeon(40, 23, intArg1), 900, 0);
            splineAddPoint(1, 1, carni_dungeon(56, 18, intArg1), 200, carni_dungeon(56, 18, intArg1), 200, 0);
            camMovealong(0, 0, 500, 0, 1, 0);
            break;
        case 208:
            proc_tutorial3_fadeout(colour(0x000000), 25, intArg0);
            break;
        case 209:
            proc_tutorial3_fadein(25, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, carni_dungeon_n(34, 38, intArg1), 1200, carni_dungeon_n(34, 38, intArg1), 1200, 0);
            splineAddPoint(1, 0, carni_dungeon_n(31, 46, intArg1), 550, carni_dungeon_n(31, 46, intArg1), 550, 0);
            splineAddPoint(0, 1, carni_dungeon_n(37, 36, intArg1), 1250, carni_dungeon_n(37, 36, intArg1), 1250, 0);
            splineAddPoint(1, 1, carni_dungeon_n(32, 46, intArg1), 650, carni_dungeon_n(32, 46, intArg1), 650, 0);
            camMovealong(0, 0, 300, 0, 1, 0);
            break;
        case 210:
            splineNew(0, 3);
            splineNew(1, 3);
            splineAddPoint(0, 0, carni_dungeon_n(26, 50, intArg1), 1200, carni_dungeon_n(26, 50, intArg1), 1200, 0);
            splineAddPoint(1, 0, carni_dungeon_n(33, 67, intArg1), 550, carni_dungeon_n(33, 67, intArg1), 550, 0);
            splineAddPoint(0, 1, carni_dungeon_n(25, 49, intArg1), 1600, carni_dungeon_n(25, 49, intArg1), 1600, 0);
            splineAddPoint(1, 1, carni_dungeon_n(32, 66, intArg1), 550, carni_dungeon_n(32, 66, intArg1), 550, 0);
            splineAddPoint(0, 2, carni_dungeon_n(20, 19, intArg1), 1200, carni_dungeon_n(20, 19, intArg1), 1200, 0);
            splineAddPoint(1, 2, carni_dungeon_n(27, 36, intArg1), 700, carni_dungeon_n(27, 36, intArg1), 700, 0);
            camMovealong(0, 0, 300, 200, 1, 0);
            break;
        case 211:
            if (splineLength(0) == 3) {
                camMovealong(0, 1, 300, 400, 1, 1);
            }
            ifSetOnTimer(hook(cs2_3467, "Iii", [intArg0, clientClock(), 100]), intArg0);
            break;
        case 212:
            if (ccFind(intArg0, 0) == 1) {
                ccSetTrans(0);
                ccSetOnTimer(noHook(""));
            } else {
                proc_tutorial3_fadeout(colour(0x000000), 0, intArg0);
            }
            break;
        case 213:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, carni_dungeon_n(34, 67, intArg1), 600, carni_dungeon_n(34, 67, intArg1), 600, 0);
            splineAddPoint(1, 0, carni_dungeon_n(33, 64, intArg1), 550, carni_dungeon_n(33, 64, intArg1), 550, 0);
            splineAddPoint(0, 1, carni_dungeon_n(29, 70, intArg1), 700, carni_dungeon_n(29, 70, intArg1), 700, 0);
            splineAddPoint(1, 1, carni_dungeon_n(34, 65, intArg1), 600, carni_dungeon_n(34, 65, intArg1), 600, 0);
            camMovealong(0, 0, 0, 0, 1, 0);
            proc_tutorial3_fadein(25, intArg0);
            break;
        case 214:
            if (splineLength(0) == 2) {
                camMovealong(0, 0, 600, 600, 1, 0);
            }
            break;
        case 215:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, carni_dungeon_n(31, 62, intArg1), 600, carni_dungeon_n(31, 62, intArg1), 600, 0);
            splineAddPoint(1, 0, carni_dungeon_n(34, 65, intArg1), 550, carni_dungeon_n(34, 65, intArg1), 550, 0);
            splineAddPoint(0, 1, carni_dungeon_n(35, 59, intArg1), 600, carni_dungeon_n(35, 59, intArg1), 600, 0);
            splineAddPoint(1, 1, carni_dungeon_n(33, 65, intArg1), 550, carni_dungeon_n(33, 65, intArg1), 550, 0);
            camMovealong(0, 0, 75, 0, 1, 0);
            break;
        case 216:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, carni_dungeon_n(35, 68, intArg1), 600, carni_dungeon_n(35, 68, intArg1), 600, 0);
            splineAddPoint(1, 0, carni_dungeon_n(33, 65, intArg1), 450, carni_dungeon_n(33, 65, intArg1), 450, 0);
            splineAddPoint(0, 1, carni_dungeon_n(35, 67, intArg1), 550, carni_dungeon_n(35, 67, intArg1), 550, 0);
            splineAddPoint(1, 1, carni_dungeon_n(33, 65, intArg1), 425, carni_dungeon_n(33, 65, intArg1), 425, 0);
            camMovealong(0, 0, 100, 0, 1, 0);
            break;
        case 217:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, carni_dungeon_n(35, 59, intArg1), 700, carni_dungeon_n(35, 59, intArg1), 700, 0);
            splineAddPoint(1, 0, carni_dungeon_n(33, 65, intArg1), 550, carni_dungeon_n(33, 65, intArg1), 550, 0);
            splineAddPoint(0, 1, carni_dungeon_n(43, 31, intArg1), 600, carni_dungeon_n(43, 31, intArg1), 600, 0);
            splineAddPoint(1, 1, carni_dungeon_n(36, 65, intArg1), 550, carni_dungeon_n(36, 65, intArg1), 550, 0);
            camMovealong(0, 0, 100, 300, 1, 0);
            ifSetOnTimer(hook(cs2_3467, "Iii", [intArg0, clientClock(), 200]), intArg0);
            break;
        case 218:
            proc_tutorial3_fadein(25, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, carni_dungeon(47, 35, intArg1), 1300, carni_dungeon(49, 25, intArg1), 1300, 0);
            splineAddPoint(1, 0, carni_dungeon(54, 1, intArg1), 300, carni_dungeon(54, 1, intArg1), 300, 0);
            splineAddPoint(0, 1, carni_dungeon(54, 8, intArg1), 500, carni_dungeon(54, 8, intArg1), 500, 0);
            splineAddPoint(1, 1, carni_dungeon(54, 0, intArg1), 100, carni_dungeon(54, 0, intArg1), 100, 0);
            camMovealong(0, 0, 400, 100, 1, 0);
            break;
        case 219:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, carni_dungeon(36, 67, intArg1), 550, carni_dungeon(36, 67, intArg1), 550, 0);
            splineAddPoint(1, 0, carni_dungeon(33, 65, intArg1), 500, carni_dungeon(33, 65, intArg1), 500, 0);
            splineAddPoint(0, 1, carni_dungeon(36, 67, intArg1), 600, carni_dungeon(36, 67, intArg1), 600, 0);
            splineAddPoint(1, 1, carni_dungeon(33, 65, intArg1), 550, carni_dungeon(33, 65, intArg1), 550, 0);
            camMovealong(0, 0, 10, 0, 1, 0);
            break;
        case 220:
            ccCreate(intArg0, 3, 0);
            ccSetTrans(0);
            ccSetfill(true);
            ccSetColour(colour(0x000000));
            ccSetSize(0, 0, 1, 1);
            ccSetPosition(0, 0, 1, 1);
            ccSetOnTimer(hook(clientscript_tutorial3_fadein, "iI", [clientClock() + 15, event_com]));
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, carni_dungeon(54, 4, intArg1), 230, carni_dungeon(54, 4, intArg1), 230, 0);
            splineAddPoint(1, 0, carni_dungeon(55, 7, intArg1), 240, carni_dungeon(55, 7, intArg1), 240, 0);
            splineAddPoint(0, 1, carni_dungeon(57, 11, intArg1), 280, carni_dungeon(57, 11, intArg1), 280, 0);
            splineAddPoint(1, 1, carni_dungeon(57, 15, intArg1), 250, carni_dungeon(57, 15, intArg1), 250, 0);
            camMovealong(0, 0, 300, 800, 1, 0);
            break;
        case 221:
            splineNew(0, 7);
            splineNew(1, 7);
            splineAddPoint(0, 0, carni_dungeon(52, 21, intArg1), 500, carni_dungeon(52, 21, intArg1), 500, 250);
            splineAddPoint(1, 0, carni_dungeon(50, 27, intArg1), 450, carni_dungeon(50, 27, intArg1), 450, 0);
            splineAddPoint(0, 1, carni_dungeon(51, 24, intArg1), 550, carni_dungeon(51, 24, intArg1), 550, 0);
            splineAddPoint(1, 1, carni_dungeon(51, 30, intArg1), 500, carni_dungeon(51, 30, intArg1), 500, 0);
            splineAddPoint(0, 2, carni_dungeon(50, 27, intArg1), 600, carni_dungeon(50, 27, intArg1), 600, -250);
            splineAddPoint(1, 2, carni_dungeon(52, 33, intArg1), 550, carni_dungeon(52, 33, intArg1), 550, 0);
            splineAddPoint(0, 3, carni_dungeon(51, 30, intArg1), 650, carni_dungeon(51, 30, intArg1), 650, 0);
            splineAddPoint(1, 3, carni_dungeon(50, 36, intArg1), 600, carni_dungeon(50, 36, intArg1), 600, 0);
            splineAddPoint(0, 4, carni_dungeon(52, 33, intArg1), 700, carni_dungeon(52, 33, intArg1), 700, 100);
            splineAddPoint(1, 4, carni_dungeon(47, 37, intArg1), 600, carni_dungeon(47, 37, intArg1), 600, 0);
            splineAddPoint(0, 5, carni_dungeon(49, 35, intArg1), 700, carni_dungeon(49, 35, intArg1), 700, 0);
            splineAddPoint(1, 5, carni_dungeon(44, 39, intArg1), 600, carni_dungeon(44, 39, intArg1), 600, 0);
            splineAddPoint(0, 6, carni_dungeon(45, 38, intArg1), 700, carni_dungeon(45, 38, intArg1), 700, 0);
            splineAddPoint(1, 6, carni_dungeon(43, 45, intArg1), 600, carni_dungeon(43, 45, intArg1), 600, 0);
            ifSetOnCamFinished(hook(cs2_3468, "Iiiiiiiiiiii", [intArg0, 1, 2500, 2000, 2500, 2000, 2500, 2000, 2500, 2000, 2500, 2000]), intArg0);
            camMovealong(0, 0, 2500, 2000, 1, 0);
            break;
        case 222:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, carni_dungeon_n(35, 65, intArg1), 600, carni_dungeon_n(35, 65, intArg1), 600, 0);
            splineAddPoint(1, 0, carni_dungeon_n(33, 65, intArg1), 500, carni_dungeon_n(33, 65, intArg1), 500, 0);
            splineAddPoint(0, 1, carni_dungeon_n(34, 65, intArg1), 700, carni_dungeon_n(34, 65, intArg1), 700, 0);
            splineAddPoint(1, 1, carni_dungeon_n(33, 65, intArg1), 550, carni_dungeon_n(33, 65, intArg1), 550, 0);
            camMovealong(0, 0, 100, 0, 1, 0);
            break;
        case 223:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, carni_dungeon_n(32, 55, intArg1), 600, carni_dungeon_n(32, 55, intArg1), 600, 0);
            splineAddPoint(1, 0, carni_dungeon_n(32, 48, intArg1), 600, carni_dungeon_n(32, 48, intArg1), 600, 0);
            splineAddPoint(0, 1, carni_dungeon_n(32, 75, intArg1), 800, carni_dungeon_n(32, 75, intArg1), 800, 0);
            splineAddPoint(1, 1, carni_dungeon_n(32, 55, intArg1), 600, carni_dungeon_n(32, 55, intArg1), 600, 0);
            camMovealong(0, 0, 200, 0, 1, 0);
            break;
        case 224:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, carni_dungeon_n(31, 67, intArg1), 500, carni_dungeon_n(31, 67, intArg1), 500, 0);
            splineAddPoint(1, 0, carni_dungeon_n(32, 70, intArg1), 500, carni_dungeon_n(32, 70, intArg1), 500, 0);
            splineAddPoint(0, 1, carni_dungeon_n(31, 68, intArg1), 500, carni_dungeon_n(31, 68, intArg1), 500, 0);
            splineAddPoint(1, 1, carni_dungeon_n(32, 71, intArg1), 500, carni_dungeon_n(32, 71, intArg1), 500, 0);
            camMovealong(0, 0, 100, 0, 1, 0);
            break;
        default:
            camSmoothreset();
            break;
    }
}
