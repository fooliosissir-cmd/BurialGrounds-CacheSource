/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,stats_mouseover_create]

function stats_mouseover_create(intArg0: component, intArg1: stat, intArg2: component): void {
    let str0: string = "";
    let str1: string = "";
    let int3: number = 2;

    if (statBase(intArg1) < 99 || (intArg1 == 24 && statBase(intArg1) < 120)) {
        str0 = tostring_spacer(enumOp(type_int, type_int, Enum.xp_for_level, statBase(intArg1) + 1), ",");
        str1 = tostring_spacer(enumOp(type_int, type_int, Enum.xp_for_level, statBase(intArg1) + 1) - statVisibleXp(intArg1), ",");
        int3 = 4;
    }
    let int4: number = cs2_4036(enumOp(type_stat, type_int, Enum.stat_to_int, intArg1));

    if (int4 == 1) {
        int3 = int3 + 3;
    }
    let [int5, int6, int7] = cs2_4037(enumOp(type_stat, type_int, Enum.stat_to_int, intArg1));
    let str2: string = tostring_spacer(int6, ",");
    let str3: string = enumOp(type_stat, type_string, Enum.stat_to_string, intArg1) + ": " + tostring(stat(intArg1)) + "/" + tostring(statBase(intArg1));
    let str4: string = tostring_spacer(statVisibleXp(intArg1), ",");
    let int8: number = int6;

    if (int5 == 1) {
        int8 = enumOp(type_int, type_int, Enum.xp_for_level, int6);
    }
    let int9: number = max(0, int8 - statVisibleXp(intArg1));
    let str5: string = tostring_spacer(int9, ",");

    if (statBase(intArg1) == 1 && enumOp(type_stat, type_stat, Enum.stat_f2p_list, intArg1) == -1 && playerMember() == 0) {
        int3 = 1;
        str3 = "Members' Skill";
    }
    let int10: number = parawidth(str3, 190, Graphic.p12_full) + 10;
    let int11: number = parawidth("Current Xp:", 190, Graphic.p12_full);
    let int12: number = parawidth(str4, 190, Graphic.p12_full);
    let int13: number = int11 + 10 + int12;
    let int14: number = 0;
    let int15: number = 0;
    int10 = max(int10, int13);

    if (statBase(intArg1) < 99 || (intArg1 == 24 && statBase(intArg1) < 120)) {
        int11 = parawidth("Next level:", 190, Graphic.p12_full);
        int12 = parawidth(str0, 190, Graphic.p12_full);
        int13 = int11 + 3 + int12;
    } else {
        int13 = 0;
    }
    int10 = max(int10, int13);

    if (statBase(intArg1) < 99 || (intArg1 == 24 && statBase(intArg1) < 120)) {
        int11 = parawidth("Remainder:", 190, Graphic.p12_full);
        int12 = parawidth(str1, 190, Graphic.p12_full);
        int13 = int11 + 3 + int12;
    } else {
        int13 = 0;
    }
    int10 = max(int10, int13);

    if (int4 == 1) {
        if (int5 == 1) {
            int11 = parawidth("Target lvl:", 190, Graphic.p12_full);
            int12 = parawidth(str2, 190, Graphic.p12_full);
        } else {
            int11 = parawidth("Target xp:", 190, Graphic.p12_full);
            int12 = parawidth(str2, 190, Graphic.p12_full);
        }
        int13 = int11 + 3 + int12;
    } else {
        int13 = 0;
    }
    int10 = max(int10, int13);

    if (int4 == 1) {
        int11 = parawidth("Remainder:", 190, Graphic.p12_full);
        int12 = parawidth(str5, 190, Graphic.p12_full);
        int13 = int11 + 3 + int12;
    } else {
        int13 = 0;
    }
    int10 = max(int10, int13);
    int11 = if_getx_absolute(intArg0) + 40;
    int12 = trh_esc_mouseleave(intArg0) + 50;

    if (int11 + int10 + 4 > 190) {
        int11 = 190 - (int10 + 4);
    }

    if (int12 + int3 * 14 + 4 > ifGetHeight(intArg2)) {
        int12 = trh_esc_mouseleave(intArg0) - (int3 * 14 + 4);
    }

    if (statBase(intArg1) == 1 && enumOp(type_stat, type_stat, Enum.stat_f2p_list, intArg1) == -1 && playerMember() == 0) {
        ccCreate(intArg2, 3, 0);
        ccSetSize(int10 + 4, 4 + int3 * 14, 0, 0);
        ccSetPosition(int11, int12, 0, 0);
        ccSetfill(true);
        ccSetColour(colour(0x0E0E0E));
        ccCreate(intArg2, 3, 1);
        ccSetSize(int10 + 4, 4 + int3 * 14, 0, 0);
        ccSetPosition(int11, int12, 0, 0);
        ccSetfill(false);
        ccSetColour(colour(0xEBECE6));
        ccCreate(intArg2, 4, 2);
        ccSetPosition(int11 + 2, int12 + 2, 0, 0);
        ccSetSize(int10, 16, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetColour(colour(0x707070));
        ccSetTextAlign(0, 0, 0);
        ccSetTextShadow(false);
        ccSetText(str3);
        return;
    }
    let int16: number = 0;
    let int17: number = 2;
    let int18: number = 0;
    let int19: number = 0;
    let int20: number = 0;
    ccCreate(intArg2, 3, int16);
    let int21: number = 4 + int3 * 14;

    if (int4 == 1) {
        int21 = int21 + 6;
    }
    ccSetSize(int10 + 4, int21, 0, 0);
    ccSetPosition(int11, int12, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x0E0E0E));
    int16 = int16 + 1;
    ccCreate(intArg2, 3, int16);
    ccSetSize(int10 + 4, int21, 0, 0);
    ccSetPosition(int11, int12, 0, 0);
    ccSetfill(false);
    ccSetColour(colour(0xEBECE6));
    int16 = int16 + 1;
    ccCreate(intArg2, 4, int16);
    let int22: number = int16;
    ccSetPosition(int11 + 2, int12 + int17, 0, 0);
    ccSetSize(int10, 16, 0, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetTextAlign(0, 0, 0);
    ccSetTextShadow(false);
    ccSetText(str3);
    ccSetColour(colour(0xF5B241));
    int16 = int16 + 1;
    int17 = int17 + 14;
    ccCreate(intArg2, 4, int16);
    ccSetPosition(int11 + 2, int12 + int17, 0, 0);
    ccSetSize(int10, 16, 0, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetTextAlign(0, 0, 0);
    ccSetTextShadow(false);
    ccSetText("Current Xp:");
    ccSetColour(colour(0xF5B241));
    int16 = int16 + 1;
    ccCreate(intArg2, 4, int16);
    let int23: number = int16;
    ccSetPosition(int11 + 2, int12 + int17, 0, 0);
    ccSetSize(int10, 16, 0, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetTextAlign(2, 0, 0);
    ccSetTextShadow(false);
    ccSetColour(colour(0xF5B241));
    ccSetText(str4);
    int16 = int16 + 1;
    int17 = int17 + 14;
    let int24: number = 0;
    let int25: number = 0;

    if (statBase(intArg1) < 99 || (intArg1 == 24 && statBase(intArg1) < 120)) {
        ccCreate(intArg2, 4, int16);
        ccSetPosition(int11 + 2, int12 + int17, 0, 0);
        ccSetSize(int10, 16, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 0, 0);
        ccSetTextShadow(false);
        ccSetText("Next level:");
        ccSetColour(colour(0xF5B241));
        int16 = int16 + 1;
        ccCreate(intArg2, 4, int16);
        ccSetPosition(int11 + 2, int12 + int17, 0, 0);
        ccSetSize(int10, 16, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(2, 0, 0);
        ccSetTextShadow(false);
        ccSetText(str0);
        ccSetColour(colour(0xF5B241));
        int16 = int16 + 1;
        int17 = int17 + 14;
        ccCreate(intArg2, 4, int16);
        ccSetPosition(int11 + 2, int12 + int17, 0, 0);
        ccSetSize(int10, 16, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 0, 0);
        ccSetTextShadow(false);
        ccSetText("Remainder:");
        ccSetColour(colour(0xF5B241));
        int16 = int16 + 1;
        ccCreate(intArg2, 4, int16);
        int18 = int16;
        ccSetPosition(int11 + 2, int12 + int17, 0, 0);
        ccSetSize(int10, 16, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(2, 0, 0);
        ccSetTextShadow(false);
        ccSetText(str1);
        ccSetColour(colour(0xF5B241));
        int16 = int16 + 1;
        int17 = int17 + 14;
    }
    let int26: number = 0;

    if (int4 == 1) {
        ccCreate(intArg2, 4, int16);
        ccSetPosition(int11 + 2, int12 + int17, 0, 0);
        ccSetSize(int10, 16, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 0, 0);
        ccSetTextShadow(false);
        ccSetColour(colour(0xF5B241));
        if (int5 == 1) {
            ccSetText("Target lvl:");
        } else {
            ccSetText("Target XP:");
        }
        int16 = int16 + 1;
        ccCreate(intArg2, 4, int16);
        ccSetPosition(int11 + 2, int12 + int17, 0, 0);
        ccSetSize(int10, 16, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(2, 0, 0);
        ccSetTextShadow(false);
        ccSetColour(colour(0xF5B241));
        if (int5 == 1) {
            ccSetText(str2);
        } else {
            ccSetText(str2);
        }
        int16 = int16 + 1;
        int17 = int17 + 14;
        ccCreate(intArg2, 4, int16);
        ccSetPosition(int11 + 2, int12 + int17, 0, 0);
        ccSetSize(int10, 16, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 0, 0);
        ccSetTextShadow(false);
        ccSetText("Remainder:");
        ccSetColour(colour(0xF5B241));
        int16 = int16 + 1;
        ccCreate(intArg2, 4, int16);
        ccSetPosition(int11 + 2, int12 + int17, 0, 0);
        ccSetSize(int10, 16, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(2, 0, 0);
        ccSetTextShadow(false);
        ccSetColour(colour(0xF5B241));
        ccSetText(str5);
        int19 = int16;
        int16 = int16 + 1;
        int17 = int17 + 17;
        ccCreate(intArg2, 3, int16);
        ccSetPosition(int11 + 4, int12 + int17, 0, 0);
        ccSetSize(int10 - 4, 16, 0, 0);
        ccSetfill(true);
        ccSetColour(colour(0xFF0000));
        int16 = int16 + 1;
        ccCreate(intArg2, 3, int16);
        int26 = int16;
        ccSetPosition(int11 + 4, int12 + int17, 0, 0);
        ccSetfill(true);
        ccSetColour(colour(0x00FF00));
        int16 = int16 + 1;
        if (int5 == 1) {
            int24 = enumOp(type_int, type_int, Enum.xp_for_level, int7);
            int25 = enumOp(type_int, type_int, Enum.xp_for_level, int6);
            if (int25 - int24 != 0) {
                int14 = scale(statVisibleXp(intArg1) - int24, int25 - int24, 100);
            } else {
                int14 = -1;
            }
        } else if (int6 - int7 != 0) {
            int14 = scale(statVisibleXp(intArg1) - int7, int6 - int7, 100);
        } else {
            int14 = -1;
        }
        if (int14 > 100) {
            int14 = 100;
        }
        int14 = max(int14, 0);
        int15 = int14 * (4 + int10);
        int15 = int15 / 100;
        ccSetSize(int15, 16, 0, 0);
        ccCreate(intArg2, 3, int16);
        ccSetPosition(int11 + 4, int12 + int17, 0, 0);
        ccSetSize(int10 - 4, 16, 0, 0);
        int16 = int16 + 1;
        ccCreate(intArg2, 4, int16);
        ccSetSize(stringWidth(tostring(int14) + "%", Graphic.p12_full), 16, 0, 0);
        ccSetPosition(int11 + int10 / 2 - ccGetWidth() / 2 + 2, int12 + int17 + 1, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(1, 0, 0);
        ccSetTextShadow(false);
        ccSetColour(colour(0xFFFFFF));
        if (int14 > 47) {
            ccSetColour(colour(0x000000));
        }
        ccSetText(tostring(int14) + "%");
        int20 = int16;
        int16 = int16 + 1;
    }

    if (ccFind(intArg2, 0) == 1) {
        ccSetOnStatTransmit(hook(stats_update, "iiiiiiiSIIY", [int22, int23, int18, int19, int20, int26, int10, intArg1, intArg0, intArg2], [intArg1]));
    }
}
