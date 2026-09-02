/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,easter10_negg_down_arrow]

function easter10_negg_down_arrow(): void {
    if (varc_easter10_neggworkers > 0) {
        soundSynth(Sound.sound_8729, 1, 0);
        varc_easter10_neggworkers = varc_easter10_neggworkers - 1;
        cs2_2220();
    }
}
