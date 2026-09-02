/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,love_puzzle_scroller]

function love_puzzle_scroller(intArg0: component, intArg1: component, intArg2: component, intArg3: boolean, intArg4: number): void {
    let int5: number = ifGetScrollY(intArg0);

    if (intArg3 == true) {
        if (int5 != 0) {
            int5 = max(int5 - 6, 0);
            ifSetScrollPos(0, int5, intArg0);
        }
        if (int5 <= 0) {
            ifSetScrollPos(0, 0, intArg0);
            ifSetOnTimer(noHook(""), intArg0);
            ifSetHide(false, intArg1);
            ifSetHide(false, intArg2);
            return;
        }
    } else {
        if (int5 != 300) {
            int5 = min(int5 + 6, 300);
            ifSetScrollPos(0, int5, intArg0);
        }
        if (int5 >= 300) {
            ifSetScrollPos(0, 300, intArg0);
            ifSetOnTimer(noHook(""), intArg0);
            ifSetHide(false, intArg1);
            ifSetHide(false, intArg2);
            return;
        }
    }
    ifSetHide(true, intArg1);
    ifSetHide(true, intArg2);

    if (clientClock() - intArg4 >= 10) {
        soundSynth(Sound.sound_2871, 1, 0);
        ifSetOnTimer(hook(love_puzzle_scroller, "III1i", [intArg0, intArg1, intArg2, intArg3, clientClock()]), intArg0);
    }
}
