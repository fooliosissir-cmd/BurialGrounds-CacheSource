/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,hist_key_over]

function hist_key_over(intArg0: number): void {
    if (intArg0 == 50724876) {
        ifSetModel(Model.hist_if_key_complete_head_glow, Component.interface_774.component_774_11);
        soundSynth(Sound.sound_5111, 1, 0);
    } else if (intArg0 == 50724877) {
        ifSetModel(Model.hist_if_key_complete_shaft_glow, Component.interface_774.component_774_11);
        soundSynth(Sound.sound_5112, 1, 0);
    } else if (intArg0 == 50724878) {
        ifSetModel(Model.hist_if_key_complete_teeth_glow, Component.interface_774.component_774_11);
        soundSynth(Sound.sound_5110, 1, 0);
    }
}
