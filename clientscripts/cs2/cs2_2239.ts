/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2239

function cs2_2239(): void {
    soundSynth(Sound.sound_8729, 1, 0);

    if (varc_easter10_neggrepair == 0) {
        varc_easter10_neggrepair = 1;
    } else {
        varc_easter10_neggrepair = 0;
    }
    cs2_2220();
}
