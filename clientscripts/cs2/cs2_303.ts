/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_303

function cs2_303(intArg0: coord, intArg1: boolean): void {
    soundSynth(Sound.sound_2266, 1, 0);

    if (intArg1 == false) {
        worldMapJumptosourcecoord(intArg0);
    } else {
        worldMapJumptodisplaycoord(intArg0);
    }
}
