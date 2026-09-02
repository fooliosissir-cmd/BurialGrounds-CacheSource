/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,love_wizardstower_thingummywut]

function love_wizardstower_thingummywut(intArg0: component, intArg1: number): void {
    switch (randominc(2)) {
        case 0:
            soundSynth(Sound.sound_6645, 1, random(15));
            break;
        case 1:
            soundSynth(Sound.sound_6644, 1, random(15));
            break;
        case 2:
            soundSynth(Sound.sound_6643, 1, random(15));
            break;
    }

    if (intArg1 < splineLength(0) - 2) {
        camMovealong(0, intArg1, 3100, 3300, 1, intArg1);
        ifSetOnCamFinished(hook(love_wizardstower_thingummywut, "Ii", [intArg0, intArg1 + 1]), intArg0);
        return;
    }
    camMovealong(0, intArg1, 1000, 0, 1, intArg1);
    ifSetOnCamFinished(noHook(""), intArg0);
}
