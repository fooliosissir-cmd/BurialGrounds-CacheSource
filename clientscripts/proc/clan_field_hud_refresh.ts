/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_field_hud_refresh]

function proc_clan_field_hud_refresh(): void {
    ccDeleteAll(Component.interface_1112.component_1112_4);
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";
    let str3: string = "";
    let str4: string = "";
    let str5: string = "";
    let str6: string = "";
    let str7: string = "";
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;

    if (varbit_clan_field_team != 3) {
        if (varbit_clan_field_rules_enableteams > 0) {
            str0 = "<br>" + "Members:" + "<br>" + "Score:";
            str3 = str0;
            str1 = "<br>" + tostringLocalised(varc_788 & 0x3FF, 1);
            str4 = "<br>" + tostringLocalised(varc_788 / pow(2, 10) & 0x3FF, 1);
            str1 = str1 + "<br>" + tostringLocalised(varc_786 & 0xFFFF, 1);
            int8 = varc_786 / pow(2, 16);
            if (int8 < 0) {
                int8 = pow(2, 16) + int8;
            }
            str4 = str4 + "<br>" + tostringLocalised(int8, 1);
            int8 = enumOp(type_int, type_int, Enum.clan_field_rules_endcondition_points, varbit_clan_field_rules_endcondition_teampoints);
            if (int8 < 2147483647) {
                str1 = str1 + " / " + tostringLocalised(int8, 1);
                str4 = str4 + " / " + tostringLocalised(int8, 1);
            }
            if (varbit_clan_field_rules_enableteams < 2) {
                str6 = "<br>" + "<br>" + "<br>" + "Neutral players:";
                str7 = "<br>" + "<br>" + "<br>" + tostringLocalised(varc_788 / pow(2, 20), 1);
            } else {
                [str6, str7] = ["<br>" + "<br>" + "<br>", "<br>" + "<br>" + "<br>"];
            }
            if (varbit_clan_field_team == 1) {
                [str2, str5] = ["Your team:", "Blue team:"];
            } else if (varbit_clan_field_team == 2) {
                [str2, str5] = ["Red team:", "Your team:"];
            } else {
                [str2, str5] = ["Red team:", "Blue team:"];
                if (varbit_clan_field_rules_enableteams < 2) {
                    str6 = str6 + "<br>" + "Your score:";
                    str7 = str7 + "<br>" + tostringLocalised(varbit_clan_field_points, 1);
                    int8 = enumOp(type_int, type_int, Enum.clan_field_rules_endcondition_points, varbit_clan_field_rules_endcondition_playerpoints);
                    if (int8 < 2147483647) {
                        str7 = str7 + " / " + tostringLocalised(int8, 1);
                    }
                }
            }
        } else {
            [str6, str7] = ["Score:", tostringLocalised(varbit_clan_field_points, 1)];
        }
        int8 = enumOp(type_int, type_int, Enum.clan_field_rules_pointsforkilling_int, varbit_clan_field_rules_pointsforkilling);
        if (int8 != 0) {
            str6 = str6 + "<br>" + "Reward for pking:";
            if (int8 > 0) {
                str7 = str7 + "<br>" + tostring(int8);
            } else {
                str7 = str7 + "<br>" + "A key";
            }
        }
        if (varc_787 < 0) {
            str6 = str6 + "<br>" + "Scoring begins in:";
            if (varc_787 <= -2147483648) {
                str7 = str7 + "<br>" + "-";
            } else {
                int6 = 0 - varc_787;
            }
        }
        if (varbit_clan_field_rules_endcondition_timelimit > 0 && varc_787 > 0) {
            str6 = str6 + "<br>" + "Time remaining:";
            int6 = varc_787;
        }
        int5 = paraheight(str6, 2147483647, Graphic.p11_full) * 10 + 2;
        int0 = parawidth(str0, 2147483647, Graphic.p11_full) + 3 + parawidth(str1, 2147483647, Graphic.p11_full);
        int0 = max(int0, parawidth(str2, 2147483647, Graphic.p11_full));
        int1 = parawidth(str3, 2147483647, Graphic.p11_full) + 3 + parawidth(str4, 2147483647, Graphic.p11_full);
        int1 = max(int1, parawidth(str5, 2147483647, Graphic.p11_full));
        int3 = parawidth(str6, 2147483647, Graphic.p11_full) + 3 + max(parawidth(str7, 2147483647, Graphic.p11_full), 40);
        int2 = int0 + 5 + int1;
        int4 = max(int3, int2);
        int2 = (int4 - int2) / 2;
        [int0, int1] = [int0 + int2, int1 + int2];
        ifSetSize(int4 + 8, int5 + 8, 0, 0, Component.interface_1112.component_1112_1);
        ccCreate(Component.interface_1112.component_1112_4, 4, ifGetNextSubId(Component.interface_1112.component_1112_4));
        ccCreate<1>(Component.interface_1112.component_1112_4, 4, ifGetNextSubId(Component.interface_1112.component_1112_4));
        ccSetSize(int0, 0, 0, 1);
        ccSetSize<1>(int0, 0, 0, 1);
        ccSetPosition(0, 0, 0, 1);
        ccSetPosition<1>(0, 0, 0, 1);
        ccSetTextFont(Graphic.p11_full);
        ccSetTextFont<1>(Graphic.p11_full);
        ccSetTextShadow(true);
        ccSetTextShadow<1>(true);
        ccSetTextAlign(0, 0, 0);
        ccSetTextAlign<1>(2, 0, 0);
        ccSetColour(colour(0xFF0000));
        ccSetColour<1>(colour(0xFF0000));
        ccSetText(str0);
        ccSetText<1>(str1);
        ccCreate(Component.interface_1112.component_1112_4, 4, ifGetNextSubId(Component.interface_1112.component_1112_4));
        ccSetSize(int0, 0, 0, 1);
        ccSetPosition(0, 0, 0, 1);
        ccSetTextFont(Graphic.p11_full);
        ccSetTextShadow(true);
        ccSetTextAlign(1, 0, 0);
        ccSetColour(colour(0xFF0000));
        ccSetText(str2);
        ccCreate(Component.interface_1112.component_1112_4, 4, ifGetNextSubId(Component.interface_1112.component_1112_4));
        ccCreate<1>(Component.interface_1112.component_1112_4, 4, ifGetNextSubId(Component.interface_1112.component_1112_4));
        ccSetSize(int1, 0, 0, 1);
        ccSetSize<1>(int1, 0, 0, 1);
        ccSetPosition(0, 0, 2, 1);
        ccSetPosition<1>(0, 0, 2, 1);
        ccSetTextFont(Graphic.p11_full);
        ccSetTextFont<1>(Graphic.p11_full);
        ccSetTextShadow(true);
        ccSetTextShadow<1>(true);
        ccSetTextAlign(0, 0, 0);
        ccSetTextAlign<1>(2, 0, 0);
        ccSetColour(colour(0x7F7FFF));
        ccSetColour<1>(colour(0x7F7FFF));
        ccSetText(str3);
        ccSetText<1>(str4);
        ccCreate(Component.interface_1112.component_1112_4, 4, ifGetNextSubId(Component.interface_1112.component_1112_4));
        ccSetSize(int1, 0, 0, 1);
        ccSetPosition(0, 0, 2, 1);
        ccSetTextFont(Graphic.p11_full);
        ccSetTextShadow(true);
        ccSetTextAlign(1, 0, 0);
        ccSetColour(colour(0x7F7FFF));
        ccSetText(str5);
        if (stringLength(str0) > 0) {
            ccCreate(Component.interface_1112.component_1112_4, 9, ifGetNextSubId(Component.interface_1112.component_1112_4));
            ccCreate<1>(Component.interface_1112.component_1112_4, 9, ifGetNextSubId(Component.interface_1112.component_1112_4));
            ccSetSize(0, 27, 0, 0);
            ccSetSize<1>(0, 27, 0, 0);
            ccSetPosition(int0 + 2, 3, 0, 0);
            ccSetPosition<1>(ccGetX() + 1, ccGetY() + 1, 0, 0);
            ccSetColour(colour(0x7F7F7F));
            ccSetColour<1>(colour(0x3F3F3F));
        }
        ccCreate(Component.interface_1112.component_1112_4, 4, ifGetNextSubId(Component.interface_1112.component_1112_4));
        ccCreate<1>(Component.interface_1112.component_1112_4, 4, ifGetNextSubId(Component.interface_1112.component_1112_4));
        ccSetSize(int3, 0, 0, 1);
        ccSetSize<1>(int3, 0, 0, 1);
        ccSetPosition(0, 0, 1, 1);
        ccSetPosition<1>(0, 0, 1, 1);
        ccSetTextFont(Graphic.p11_full);
        ccSetTextFont<1>(Graphic.p11_full);
        ccSetTextShadow(true);
        ccSetTextShadow<1>(true);
        ccSetTextAlign(0, 0, 0);
        ccSetTextAlign<1>(2, 0, 0);
        ccSetColour(colour(0xCFCFCF));
        ccSetColour<1>(colour(0xCFCFCF));
        ccSetText(str6);
        ccSetText<1>(str7);
        if (int6 > 0) {
            ccCreate(Component.interface_1112.component_1112_4, 4, ifGetNextSubId(Component.interface_1112.component_1112_4));
            ccSetSize(int3, 12, 0, 0);
            ccSetPosition(max(int4 - int3, 0) / 2, 0, 2, 2);
            ccSetTextFont(Graphic.p11_full);
            ccSetTextShadow(true);
            ccSetTextAlign(2, 0, 0);
            ccSetColour(colour(0xCFCFCF));
            int7 = int6 * 30;
            if (int7 > varc_worldswitcher_pingtimer || int7 + 29 < varc_worldswitcher_pingtimer) {
                varc_worldswitcher_pingtimer = int7 + 15;
            }
            ccSetText(cs2_5094());
            ccSetOnTimer(hook(cs2_5093, "Ii", [event_com, event_comsubid]));
        }
    }
}
