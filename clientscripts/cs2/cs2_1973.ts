/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1973

function cs2_1973(intArg0: number, intArg1: component, intArg2: number): void {
    if (intArg2 != 1) {
        return;
    }
    soundSynth(Sound.sound_4911, 1, 0);

    switch (intArg0) {
        case 0:
            varc_seer_a = cs2_686(varc_seer_a - 1, 26);
            break;
        case 1:
            varc_seer_b = cs2_686(varc_seer_b - 1, 26);
            break;
        case 2:
            varc_seer_c = cs2_686(varc_seer_c - 1, 26);
            break;
        case 3:
            varc_seer_d = cs2_686(varc_seer_d - 1, 26);
            break;
    }
    cs2_1971(intArg0, intArg1);
}
