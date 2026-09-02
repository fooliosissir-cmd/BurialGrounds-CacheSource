/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3479

function cs2_3479(intArg0: component, intArg1: component, intArg2: component, intArg3: boolean): void {
    ifSetHide(true, intArg1);
    ifSetHide(true, intArg2);
    soundSynth(Sound.sound_2871, 1, 0);
    ifSetOnTimer(hook(love_puzzle_scroller, "III1i", [intArg0, intArg1, intArg2, intArg3, clientClock()]), intArg0);
}
