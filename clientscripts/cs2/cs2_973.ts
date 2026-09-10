/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_973

function cs2_973(): void {
    let int0: number = varbit_lvl_setting;

    if (varbit_lvl_setting < 1 || varbit_lvl_setting > 25) {
        return;
    }
    let str0: string = enumString(Enum.lvl_congrats_skill, int0);
    let int1: stat = enumOp(type_int, type_stat, Enum.int_to_stat, int0);
    let int2: graphic = enumOp(type_int, type_graphic, Enum.enum_1478, int0);
    let int3: number = 1;
    let int4: obj = Obj.mcannontoolkit;

    switch (int0) {
        case 1:
            int4 = varc_1469;
            break;
        case 2:
            int4 = varc_1470;
            break;
        case 5:
            int4 = varc_1471;
            break;
        case 3:
            int4 = varc_1472;
            break;
        case 7:
            int4 = varc_1473;
            break;
        case 4:
            int4 = varc_1474;
            break;
        case 6:
            int4 = varc_1475;
            break;
        case 8:
            int4 = varc_1476;
            break;
        case 9:
            int4 = varc_1477;
            break;
        case 10:
            int4 = varc_1478;
            break;
        case 11:
            int4 = varc_1479;
            break;
        case 19:
            int4 = varc_1480;
            break;
        case 13:
            int4 = varc_1481;
            break;
        case 14:
            int4 = varc_1482;
            break;
        case 15:
            int4 = varc_1483;
            break;
        case 16:
            int4 = varc_1484;
            break;
        case 17:
            int4 = varc_1485;
            break;
        case 18:
            int4 = varc_1486;
            break;
        case 12:
            int4 = varc_1487;
            break;
        case 20:
            int4 = varc_1488;
            break;
        case 21:
            int4 = varc_1489;
            break;
        case 22:
            int4 = varc_1490;
            break;
        case 23:
            int4 = varc_1491;
            break;
        case 24:
            int4 = varc_1492;
            break;
        case 25:
            int4 = varc_1493;
            break;
    }

    if (int4 + 1 != statBase(int1)) {
        str0 = enumString(Enum.multi_levelup_skill_plural_a, int0) + tostring(statBase(int1) - int4) + enumString(Enum.multi_levelup_skill_plural_b, int0);
    }
    ifSetText(str0, Component.interface_741.component_741_3);
    ifSetText("You have now reached level " + tostring(statBase(int1)) + ".", Component.interface_741.component_741_5);
    ifSetGraphic(int2, Component.interface_741.component_741_6);
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let str1: string = "";
    let int8: graphic = Graphic.graphic_2287;
    let int9: graphic = int8;
    let int10: obj = Obj.mcannonremains;
    ccDeleteAll(Component.interface_741.component_741_1);
    ccDeleteAll(Component.interface_741.component_741_2);

    if (varp_tutorial < 1000 && statBase(int1) == 3) {
        str1 = "<col=000080>" + "You've now reached the highest skill level that you can achieve during the tutorial. Once you finish the tutorial, you can advance this skill even further!";
        int7 = cs2_974(int5, int6, Obj.obj_7620, int8, str1, 0, 0);
        ccSetText(str1);
        int6 = cs2_975(int6, int7);
        int5 = 2 + int5;
    }

    if (varbit_lvl_total_ready == 1) {
        str1 = "<col=800000>" + "Well done! You've reached the total level " + tostring(enumOp(type_int, type_int, Enum.enum_1475, varbit_4728)) + " milestone!";
        int7 = cs2_974(int5, int6, Obj.obj_7620, int8, str1, 0, 0);
        ccSetText(str1);
        int6 = cs2_975(int6, int7);
        int5 = 2 + int5;
    }
    let int11: number = 0;
    str1 = "null";
    let int12: obj = Obj.obj_7620;

    if (int0 == 1 || int0 == 2 || int0 == 5 || int0 == 3 || int0 == 7 || int0 == 4 || int0 == 6 || int0 == 24) {
        if (varbit_lvl_combat_ready == 1) {
            str1 = "<col=800000>" + "Well done! You've reached the Combat level " + tostring(enumOp(type_int, type_int, Enum.enum_1473, varbit_lvl_combat_milestone)) + " milestone!";
            int7 = cs2_974(int5, int6, Obj.obj_7620, int8, str1, 0, 0);
            ccSetText(str1);
            int6 = cs2_975(int6, int7);
            int5 = 2 + int5;
        }
        if (varbit_lvl_combat_level_change == 1) {
            while (int12 != -1) {
                [int10, int12, str1] = cs2_976(int11);
                if (int10 == comlevel()) {
                    int7 = cs2_974(int5, int6, int12, int8, str1, 0, 0);
                    ccSetText(str1);
                    int6 = cs2_975(int6, int7);
                    int5 = 2 + int5;
                }
                int11 = int11 + 1;
            }
        }
    }
    str1 = "";
    int12 = Obj.obj_7620;
    let int13: number = 0;
    int11 = 0;

    while (int13 != -1) {
        int13 = 0;
        [str1, int12, int13] = cs2_1023(int1, int11);
        if (int13 == 1) {
            int7 = cs2_974(int5, int6, int12, int8, str1, 0, 0);
            ccSetText(str1);
            int6 = cs2_975(int6, int7);
            int5 = 2 + int5;
            int3 = 0;
        }
        int11 = int11 + 1;
    }
    int9 = int8;
    int12 = Obj.obj_7620;
    str1 = "";
    int11 = 0;
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;
    let str2: string = "";
    [str0, int14] = cs2_12(int0);
    let [int17, int18] = skillguide_legacy_tabs(int0);

    while (int11 < 1) {
        [str0, int15] = cs2_13(int0, int11, int17, int18);
        int16 = 0;
        int12 = Obj.obj_7620;
        int9 = int8;
        int10 = 0;
        if (cs2_1566(int0, int11) == 1) {
            while (int10 != -1) {
                [int10, int12, str2, str1] = cs2_14(int0, int11, int16);
                [int10, int9, str2, str1] = cs2_1567(int0, int11, int16);
                if (int10 <= statBase(int1) && int10 > int4) {
                    int7 = cs2_974(int5, int6, int12, int9, str1, int0, int11);
                    ccSetText(str1);
                    int6 = cs2_975(int6, int7);
                    int5 = 2 + int5;
                    int3 = 0;
                }
                int16 = int16 + 1;
            }
            int11 = int11 + 1;
        } else {
            while (int10 != -1) {
                [int10, int12, str2, str1] = cs2_14(int0, int11, int16);
                if (int10 <= statBase(int1) && int10 > int4) {
                    int7 = cs2_974(int5, int6, int12, int9, str1, int0, int11);
                    ccSetText(str1);
                    int6 = cs2_975(int6, int7);
                    int5 = 2 + int5;
                    int3 = 0;
                }
                int16 = int16 + 1;
            }
            int11 = int11 + 1;
        }
    }

    if (int3 == 1) {
        str1 = append(cs2_4242(int0), "Check out the skill advance guide to see what you'll be able to do when you reach even higher levels...");
        int7 = cs2_974(int5, int6, Obj.obj_7620, int8, str1, 0, 0);
        ccSetText(str1);
        int6 = cs2_975(int6, int7);
    }
    ifSetScrollPos(0, 0, Component.interface_741.component_741_1);
    ifSetScrollSize(296, int6, Component.interface_741.component_741_1);

    if (int6 > 160) {
        proc_scrollbar_vertical(Component.interface_741.component_741_2, Component.interface_741.component_741_1, Graphic.scrollbar_parchment_dragger_v2_3, Graphic.scrollbar_parchment_dragger_v2_0, Graphic.scrollbar_parchment_dragger_v2_1, Graphic.scrollbar_parchment_dragger_v2_2, Graphic.scrollbar_parchment_v2_0, Graphic.scrollbar_parchment_v2_1);
    }
}
