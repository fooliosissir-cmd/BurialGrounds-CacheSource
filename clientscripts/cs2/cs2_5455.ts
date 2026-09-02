/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5455

function cs2_5455(intArg0: number): void {
    if (intArg0 == 1) {
        if (varc_1684 == 1) {
            varc_1684 = 4;
        } else {
            varc_1684 = varc_1684 - 1;
        }
    } else if (varc_1684 == 4) {
        varc_1684 = 1;
    } else {
        varc_1684 = varc_1684 + 1;
    }
    cs2_5456();
    soundVorbisVolume(8088, 1, 0, 255);
}
