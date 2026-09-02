/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3463

function cs2_3463(intArg0: component, intArg1: coord): void {
    if (varc_tutorial3_cutscene_tracker != 22) {
        ifSetOnTimer(noHook(""), intArg0);
        return;
    }

    if (coord() == intArg1) {
        return;
    }
    soundSynth(Sound.sound_4874, 1, 0);
    camMoveto(moveCoord(coord(), 0, 0, -3), 1500, 1, 75);
    camLookat(coord(), 0, 1, 15);
    ifSetOnTimer(hook(cs2_3463, "Ic", [event_com, coord()]), intArg0);
}
