/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_857

function cs2_857(): void {
    soundSynth(Sound.sound_2605, 1, 0);

    if (varbit_catcon_2x1_x > 0) {
        varc_108 = varbit_catcon_2x1_x - 1;
        cs2_861();
    }
}
