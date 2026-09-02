/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2772

function cs2_2772(intArg0: component, intArg1: number): void {
    let int2: number = splineLength(0) - 2;

    if (varc_tutorial3_cutscene_tracker != 2 || intArg1 > int2) {
        ifSetOnCamFinished(noHook(""), intArg0);
        return;
    }

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
    camMovealong(0, intArg1, 2500, 2400, 1, intArg1);

    if (intArg1 < int2) {
        ifSetOnCamFinished(hook(cs2_2772, "Ii", [intArg0, intArg1 + 1]), intArg0);
    }
}
