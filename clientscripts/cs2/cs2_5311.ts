/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5311

function cs2_5311(intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    let int4: number = 0;
    let int5: number = enumGetoutputcount(Enum.clan_theatre_sounds_int2string);
    let int6: number = enumGetoutputcount(Enum.clan_theatre_sounds_int2vorbis);

    defineArray(0, type_int, min(int5, int6));
    let int7: number = 0;

    while (int4 < min(int5, int6)) {
        if (ccFind(intArg1, int4) == 1 && stringLength(ccGetText()) > 0) {
            array0[int7] = int4;
            int7 = int7 + 1;
        }
        int4 = int4 + 1;
    }

    if (int7 > 1) {
        if (varc_clan_keep_theatre_sound_sortorder == 1) {
            cs2_4425(0, intArg1, 0, int7 - 1);
            varc_clan_keep_theatre_sound_sortorder = -1;
        } else {
            cs2_4424(0, intArg1, 0, int7 - 1);
            varc_clan_keep_theatre_sound_sortorder = 1;
        }
    }
    let int8: number = 15;
    int4 = 0;

    while (int4 < int7) {
        if (ccFind(intArg1, array0[int4]) == 1) {
            ccSetPosition(2, int8 * int4, 0, 0);
            if (ccFind<1>(intArg2, array0[int4]) == 1) {
                ccSetPosition<1>(140, int8 * int4 + 1, 0, 0);
            }
            if (ccFind<1>(intArg3, array0[int4]) == 1) {
                ccSetPosition<1>(152, int8 * int4 + 1, 0, 0);
            }
            if (ccFind<1>(intArg0, array0[int4]) == 1) {
                ccSetPosition<1>(0, int8 * int4, 0, 0);
                if (int4 % 2 == 0) {
                    ccSetColour<1>(colour(0x222222));
                } else {
                    ccSetColour<1>(colour(0x111111));
                }
            }
        }
        int4 = int4 + 1;
    }
}
