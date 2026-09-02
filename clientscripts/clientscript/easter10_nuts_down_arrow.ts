/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,easter10_nuts_down_arrow]

function easter10_nuts_down_arrow(): void {
    if (varc_easter10_nutworkers > 0) {
        soundSynth(Sound.sound_8729, 1, 0);
        varc_easter10_nutworkers = varc_easter10_nutworkers - 1;
        cs2_2220();
    }
}
