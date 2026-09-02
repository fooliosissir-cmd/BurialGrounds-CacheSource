/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2237

function cs2_2237(): void {
    soundSynth(Sound.sound_8729, 1, 0);

    if (varc_easter10_fcrepair == 0) {
        varc_easter10_fcrepair = 1;
    } else {
        varc_easter10_fcrepair = 0;
    }
    cs2_2220();
}
