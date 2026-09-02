/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1135

function cs2_1135(intArg0: component): void {
    let int1: coord = cs2_284(coord());

    switch (varc_tutorial3_cutscene_tracker) {
        case 1:
            proc_tutorial3_fadeout(colour(0xFFFFFF), 50, intArg0);
            soundSynth(Sound.sound_3641, 1, 0);
            break;
        case 2:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, dream_instance(25, 25, int1), 750, dream_instance(25, 25, int1), 750, 0);
            splineAddPoint(0, 1, dream_instance(25, 26, int1), 750, dream_instance(25, 26, int1), 750, 0);
            splineAddPoint(1, 0, dream_instance(25, 29, int1), 600, dream_instance(25, 29, int1), 600, 0);
            splineAddPoint(1, 1, dream_instance(25, 30, int1), 600, dream_instance(25, 30, int1), 600, 0);
            camMovealong(0, 0, 100, 0, 1, 0);
            proc_tutorial3_fadein(45, intArg0);
            soundSynth(Sound.sound_3641, 1, 0);
            break;
        case 3:
            splineNew(0, 7);
            splineNew(1, 7);
            splineAddPoint(0, 0, dream_instance(25, 26, int1), 750, dream_instance(25, 26, int1), 1200, 0);
            splineAddPoint(0, 1, dream_instance(16, 9, int1), 2175, dream_instance(18, 11, int1), 2175, 0);
            splineAddPoint(0, 2, dream_instance(31, 9, int1), 2275, dream_instance(31, 9, int1), 2450, 0);
            splineAddPoint(0, 3, dream_instance(39, 20, int1), 1950, dream_instance(39, 20, int1), 1950, 0);
            splineAddPoint(0, 4, dream_instance(40, 34, int1), 1550, dream_instance(40, 34, int1), 1550, 0);
            splineAddPoint(0, 5, dream_instance(31, 40, int1), 1125, dream_instance(31, 40, int1), 1125, 0);
            splineAddPoint(0, 6, dream_instance(24, 38, int1), 900, dream_instance(24, 38, int1), 900, 0);
            splineAddPoint(1, 0, dream_instance(25, 30, int1), 600, dream_instance(25, 30, int1), 600, 0);
            splineAddPoint(1, 1, dream_instance(25, 23, int1), 1150, dream_instance(25, 23, int1), 1150, 0);
            splineAddPoint(1, 2, dream_instance(25, 23, int1), 1150, dream_instance(25, 23, int1), 1150, 0);
            splineAddPoint(1, 3, dream_instance(25, 23, int1), 950, dream_instance(25, 23, int1), 950, 0);
            splineAddPoint(1, 4, dream_instance(25, 23, int1), 950, dream_instance(25, 23, int1), 950, 0);
            splineAddPoint(1, 5, dream_instance(25, 23, int1), 850, dream_instance(25, 23, int1), 850, 0);
            splineAddPoint(1, 6, dream_instance(26, 23, int1), 725, dream_instance(26, 23, int1), 725, 0);
            camMovealong(0, 0, 800, 400, 1, 0);
            break;
        case 4:
            if (splineLength(0) == 7) {
                camMovealong(0, 1, 400, 400, 1, 1);
            } else {
                camSmoothreset();
            }
            break;
        case 5:
            if (splineLength(0) == 7) {
                camMovealong(0, 2, 400, 400, 1, 2);
            } else {
                camSmoothreset();
            }
            break;
        case 6:
            if (splineLength(0) == 7) {
                camMovealong(0, 3, 400, 400, 1, 3);
            } else {
                camSmoothreset();
            }
            break;
        case 7:
            if (splineLength(0) == 7) {
                camMovealong(0, 4, 400, 600, 1, 4);
                ifSetOnCamFinished(hook(cs2_1144, "I", [intArg0]), intArg0);
            } else {
                camSmoothreset();
            }
            break;
        case 8:
            proc_tutorial3_fadein(50, intArg0);
            soundSynth(Sound.sound_3641, 1, 0);
            break;
        default:
            ccDeleteAll(intArg0);
            camSmoothreset();
            break;
    }
}
