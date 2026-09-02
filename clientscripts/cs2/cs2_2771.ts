/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2771

function cs2_2771(intArg0: component, intArg1: number): void {
    let int2: number = clientClock() - intArg1;

    if (int2 >= 181 || varc_tutorial3_cutscene_tracker != 1) {
        ifSetOnTimer(noHook(""), intArg0);
        return;
    }

    if (int2 % 25 == 0) {
        switch (randominc(2)) {
            case 0:
                soundSynth(Sound.sound_6645, 1, 0);
                break;
            case 1:
                soundSynth(Sound.sound_6644, 1, 0);
                break;
            case 2:
                soundSynth(Sound.sound_6643, 1, 0);
                break;
        }
    }
}
