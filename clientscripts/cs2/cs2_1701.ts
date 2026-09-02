/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1701

function cs2_1701(): void {
    if (varc_1052 == 1) {
        soundSynth(Sound.sound_8123, 1, 0);
        varc_1052 = 0;
    } else {
        soundSynth(Sound.dom_arena_nudge_button, 1, 0);
        varc_1052 = 1;
    }
    ifSetOnTimer(hook(cs2_1702, "i", [0]), Component.interface_271.component_271_9);
    cs2_1700();
}
