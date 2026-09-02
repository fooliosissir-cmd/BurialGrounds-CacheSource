/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_357

function cs2_357(intArg0: number, intArg1: graphic, intArg2: number): void {
    if (intArg0 != 1) {
        return;
    }

    switch (intArg2) {
        case 0:
            varc_1015 = intArg1;
            break;
        case 1:
            varc_playerdesign3_torsocol = intArg1;
            break;
        case 2:
            varc_playerdesign3_legscol = intArg1;
            break;
        case 3:
            varc_playerdesign3_feetcol = intArg1;
            break;
        case 4:
            varc_1019 = intArg1;
            break;
        default:
            return;
    }
    soundSynth(Sound.sound_9830, 1, 0);
    baseColour(intArg2, intArg1);
    cs2_391();
}
