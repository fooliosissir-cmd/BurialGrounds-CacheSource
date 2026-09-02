/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,easter10_tegg_up_arrow]

function easter10_tegg_up_arrow(): void {
    if (varc_easter10_chocworkers < 15 && cs2_2240() < varc_easter10_totalworkers) {
        soundSynth(Sound.sound_8729, 1, 0);
        varc_easter10_teggworkers = varc_easter10_teggworkers + 1;
    } else {
        varp_easter10_resourcegame_errortextflag = 1;
        soundVorbisVolume(10046, 1, 0, 255);
    }
    cs2_2220();
}
