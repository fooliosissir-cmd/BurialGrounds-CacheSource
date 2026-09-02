/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_354

function cs2_354(intArg0: number, intArg1: number): void {
    if (intArg0 != 1 || intArg1 == varc_1020) {
        return;
    }
    soundSynth(Sound.sound_9819, 1, 0);
    varc_1020 = intArg1;
    varbit_6501 = intArg1;
    cs2_391();
}
