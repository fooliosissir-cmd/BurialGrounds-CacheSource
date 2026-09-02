/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2318

function cs2_2318(intArg0: number): void {
    if (intArg0 != 1) {
        return;
    }
    soundSynth(Sound.sound_2266, 1, 0);
    varbit_bank_show_equipscreen = 1 - varbit_bank_show_equipscreen;
    cs2_2319();
}
