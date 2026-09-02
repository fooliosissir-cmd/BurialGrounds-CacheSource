/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,warguild_overlay_arrow]

function clientscript_warguild_overlay_arrow(intArg0: component, intArg1: number): void {
    if (intArg1 == 1) {
        soundSynth(Sound.sound_10223, 1, 0);
    }
    proc_warguild_overlay_arrow(intArg0, intArg1);
}
