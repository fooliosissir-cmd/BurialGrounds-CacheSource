/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stats_update]

function stats_update(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: stat, intArg8: component, intArg9: component): void {
    if (varc_80 == 0) {
        return;
    }
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;
    let int17: number = 0;
    let int18: number = 0;
    let str0: string = "";
    let str1: string = enumOp(type_stat, type_string, Enum.stat_to_string, intArg7) + ": " + tostring(stat(intArg7)) + "/" + tostring(statBase(intArg7));

    if (ccFind(intArg9, intArg0) == 1 && parawidth(str1, 190, Graphic.p12_full) < ccGetWidth() && varc_80 == statBase(intArg7)) {
        ccSetText(str1);
        if (ccFind(intArg9, intArg1) == 1) {
            ccSetText(tostring_spacer(statVisibleXp(intArg7), ","));
        }
        if (statBase(intArg7) < 99 && ccFind(intArg9, intArg2) == 1) {
            ccSetText(tostring_spacer(enumOp(type_int, type_int, Enum.xp_for_level, statBase(intArg7) + 1) - statVisibleXp(intArg7), ","));
        }
        if (cs2_4036(enumOp(type_stat, type_int, Enum.stat_to_int, intArg7)) == 1) {
            [int12, int10, int11] = cs2_4037(enumOp(type_stat, type_int, Enum.stat_to_int, intArg7));
            int17 = int10;
            if (int12 == 1) {
                int17 = enumOp(type_int, type_int, Enum.xp_for_level, int10);
            }
            int18 = max(0, int17 - statVisibleXp(intArg7));
            str0 = tostring_spacer(int18, ",");
            if (ccFind(intArg9, intArg5) == 1) {
                if (int12 == 1) {
                    int15 = enumOp(type_int, type_int, Enum.xp_for_level, int11);
                    int16 = enumOp(type_int, type_int, Enum.xp_for_level, int10);
                    if (int16 - int15 != 0) {
                        int13 = scale(statVisibleXp(intArg7) - int15, int16 - int15, 100);
                    } else {
                        int13 = -1;
                    }
                } else if (int10 - int11 != 0) {
                    int13 = scale(statVisibleXp(intArg7) - int11, int10 - int11, 100);
                } else {
                    int13 = -1;
                }
                if (int13 > 100) {
                    int13 = 100;
                }
                int13 = max(int13, 0);
                int14 = int13 * (intArg6 - 4);
                int14 = int14 / 100;
                ccSetSize(int14, 16, 0, 0);
                if (ccFind(intArg9, intArg4) == 1) {
                    if (int13 > 47) {
                        ccSetColour(colour(0x000000));
                    }
                    ccSetText(tostring(int13) + "%");
                }
                if (ccFind(intArg9, intArg3) == 1) {
                    ccSetText(str0);
                }
            }
        }
        return;
    }
    ccDeleteAll(intArg9);
    varc_80 = statBase(intArg7);
    stats_mouseover_create(intArg8, intArg7, intArg9);
}
