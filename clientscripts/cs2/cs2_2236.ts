/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2236

function cs2_2236(): void {
    if (varc_easter10_totalworkers < 15 && varp_easter10_resourcegame_totalnuts + varp_easter10_resourcegame_totalfruit + varp_easter10_resourcegame_totalchoc > 1) {
        soundSynth(Sound.sound_8729, 1, 0);
        varc_easter10_totalworkers = varc_easter10_totalworkers + 1;
    } else {
        varp_easter10_resourcegame_errortextflag = 2;
        soundVorbisVolume(10046, 1, 0, 255);
    }
    cs2_2220();
}
