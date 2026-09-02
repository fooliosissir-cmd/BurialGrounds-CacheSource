/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2238

function cs2_2238(): void {
    soundSynth(Sound.sound_8729, 1, 0);

    if (varc_easter10_teggrepair == 0) {
        varc_easter10_teggrepair = 1;
    } else {
        varc_easter10_teggrepair = 0;
    }
    cs2_2220();
}
