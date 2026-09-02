/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,trail_puzzle_click]

function trail_puzzle_click(intArg0: component, intArg1: number, intArg2: number): void {
    if (intArg2 != 1) {
        return;
    }
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;

    while (int3 < invSize(140)) {
        if (ccFind(intArg0, int3) == 1 && ccGetHide() == 1) {
            int4 = int3;
        }
        int3 = int3 + 1;
    }
    let int6: number = intArg1 / 5;
    let int7: number = intArg1 - int6 * 5;

    if (int4 == intArg1 - 1 && int7 > 0 && ccFind(intArg0, intArg1) == 1 && ccFind<1>(intArg0, int4) == 1) {
        soundSynth(Sound.sound_1859, 1, 0);
        ccSetPosition(56 * (int7 - 1), 56 * int6, 0, 0);
        ccSetPosition<1>(56 * int7, 56 * int6, 0, 0);
        return;
    }

    if (int4 == intArg1 + 1 && int7 < 5 && ccFind(intArg0, intArg1) == 1 && ccFind<1>(intArg0, int4) == 1) {
        soundSynth(Sound.sound_1859, 1, 0);
        ccSetPosition(56 * (int7 + 1), 56 * int6, 0, 0);
        ccSetPosition<1>(56 * int7, 56 * int6, 0, 0);
        return;
    }

    if (int4 == intArg1 - 5 && int6 > 0 && ccFind(intArg0, intArg1) == 1 && ccFind<1>(intArg0, int4) == 1) {
        soundSynth(Sound.sound_1859, 1, 0);
        ccSetPosition(56 * int7, 56 * (int6 - 1), 0, 0);
        ccSetPosition<1>(56 * int7, 56 * int6, 0, 0);
        return;
    }

    if (int4 == intArg1 + 5 && int6 < 5 && ccFind(intArg0, intArg1) == 1 && ccFind<1>(intArg0, int4) == 1) {
        soundSynth(Sound.sound_1859, 1, 0);
        ccSetPosition(56 * int7, 56 * (int6 + 1), 0, 0);
        ccSetPosition<1>(56 * int7, 56 * int6, 0, 0);
        return;
    }
}
