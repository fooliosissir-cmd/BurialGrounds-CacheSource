/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_355

function cs2_355(intArg0: number, intArg1: graphic, intArg2: number): void {
    if (intArg0 != 1) {
        return;
    }
    let int3: struct = -1;
    let int4: number = -1;

    switch (intArg2) {
        case 0:
        case 7:
            varc_1008 = intArg1;
            baseIdkit(intArg2, intArg1);
            soundSynth(Sound.sound_9860, 1, 0);
            break;
        case 1:
        case 8:
            varc_1009 = intArg1;
            baseIdkit(intArg2, intArg1);
            soundSynth(Sound.sound_9860, 1, 0);
            break;
        case 2:
        case 9:
        case 3:
        case 10:
        case 4:
        case 11:
            varc_86 = 0;
            setobj(2, 19713);
            setobj(3, -1);
            setobj(5, -1);
            soundSynth(Sound.sound_9819, 1, 0);
            switch (intArg2) {
                case 2:
                case 9:
                    [varc_1010, int4] = [intArg1, 3];
                    break;
                case 3:
                case 10:
                    [varc_1011, int4] = [intArg1, 4];
                    break;
                case 4:
                case 11:
                    [varc_1012, int4] = [intArg1, 5];
                    break;
            }
            int3 = cs2_361(intArg1, int4);
            if (int3 != -1) {
                if (gender() == 1) {
                    varc_1010 = structParam(int3, Param.playerdesign4_outfit_torso);
                    baseIdkit(9, varc_1010);
                    varc_1011 = structParam(int3, Param.playerdesign4_outfit_arms);
                    baseIdkit(10, varc_1011);
                    varc_1012 = structParam(int3, Param.playerdesign4_outfit_hands);
                    baseIdkit(11, varc_1012);
                    cs2_392(-1, true);
                } else {
                    varc_1010 = structParam(int3, Param.playerdesign4_outfit_torso);
                    baseIdkit(2, varc_1010);
                    varc_1011 = structParam(int3, Param.playerdesign4_outfit_arms);
                    baseIdkit(3, varc_1011);
                    varc_1012 = structParam(int3, Param.playerdesign4_outfit_hands);
                    baseIdkit(4, varc_1012);
                    cs2_392(-1, false);
                }
            } else {
                baseIdkit(intArg2, intArg1);
            }
            break;
        case 5:
        case 12:
            varc_86 = 0;
            setobj(2, 19713);
            setobj(3, -1);
            setobj(5, -1);
            cs2_392(-1, int_to_bool(gender()));
            baseIdkit(intArg2, intArg1);
            varc_1013 = intArg1;
            soundSynth(Sound.sound_9819, 1, 0);
            break;
        case 6:
        case 13:
            varc_86 = 0;
            setobj(2, 19713);
            setobj(3, -1);
            setobj(5, -1);
            cs2_392(-1, int_to_bool(gender()));
            baseIdkit(intArg2, intArg1);
            varc_1014 = intArg1;
            soundSynth(Sound.sound_9819, 1, 0);
            break;
        default:
            return;
    }
    cs2_391();
}
