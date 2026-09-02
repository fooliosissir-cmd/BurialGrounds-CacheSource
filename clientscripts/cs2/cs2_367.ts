/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_367

function cs2_367(intArg0: component, intArg1: number, intArg2: boolean): void {
    let int3: number = 0;

    if (intArg2 == true) {
        int3 = intArg1 + 17;
    } else {
        int3 = intArg1;
    }
    let int4: number = ifGetHeight(intArg0);

    if (int4 < int3) {
        ifSetSize(ifGetWidth(intArg0), min(int4 + 2, int3), 0, 0, intArg0);
        if (int4 % intArg1 == 0) {
            soundSynth(Sound.sound_9840, 1, 0);
        }
    } else if (int4 > int3) {
        ifSetSize(ifGetWidth(intArg0), max(int4 - 2, int3), 0, 0, intArg0);
    } else {
        ifSetOnTimer(noHook(""), intArg0);
    }
}
