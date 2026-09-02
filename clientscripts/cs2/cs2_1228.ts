/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1228

function cs2_1228(intArg0: component, intArg1: component, intArg2: component, intArg3: number): void {
    let int4: number = ifGetHeight(intArg0);
    let int5: number = clientClock() - intArg3;
    let int6: number = 0;

    if (int5 == 25) {
        soundVorbisVolume(8105, 1, 0, 100);
    }

    if (int5 <= 30) {
        int6 = scale(int5, 30, int4) - int4;
        ifSetPosition(0, int6, 1, 1, intArg1);
        ifSetPosition(0, int6, 1, 1, intArg2);
        return;
    }

    if (int5 < 170) {
        return;
    }

    if (int5 < 200) {
        int6 = 0 - scale(int5 - 170, 30, int4);
        ifSetPosition(0, int6, 1, 1, intArg1);
        ifSetPosition(0, int6, 1, 1, intArg2);
        return;
    }
    ifSetOnTimer(noHook(""), intArg0);
    ifClearops(intArg1);
    ifSetHide(true, intArg1);
    ifSetHide(true, intArg2);
    ifSetHide(true, intArg0);
}
