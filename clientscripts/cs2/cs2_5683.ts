/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5683

function cs2_5683(intArg0: number): void {
    ccDeleteAll(Component.interface_1218.component_1218_30);
    ccDeleteAll(Component.interface_1218.component_1218_72);
    varc_skillguide_skill_clicked = intArg0;
    varc_1754 = 1;
    let int1: number = 0;
    let int2: Enum = -1;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 30;
    let int6: number = 0;
    ifSetText("Milestones", Component.interface_1218.component_1218_172);
    ifSetHide(false, Component.interface_1218.component_1218_3);

    if (intArg0 > 0) {
        ifSetHide(false, Component.interface_1218.component_1218_6);
        ifSetHide(false, Component.interface_1218.component_1218_7);
        ifSetText(enumOp(type_int, type_string, Enum.statstring, intArg0), Component.interface_1218.component_1218_85);
        ifSetText(tostring(statBase(enumOp(type_int, type_stat, Enum.int_to_stat, intArg0))), Component.interface_1218.component_1218_86);
        ccDeleteAll(Component.interface_1218.component_1218_161);
        int2 = enumOp(type_int, type_enum, Enum.skillguide_skill_filters, intArg0);
        int6 = enumGetoutputcount(int2);
        int1 = 35 + enumGetoutputcount(int2) * 15;
        ifSetSize(150, int1, 0, 0, Component.interface_1218.component_1218_7);
        while (int3 < int6) {
            ccCreate(Component.interface_1218.component_1218_161, 4, int4);
            ccSetOnMouseOver(hook(cs2_5708, "i", [int4]));
            ccSetOnMouseLeave(hook(cs2_5709, "i", [int4]));
            ccSetOnClick(hook(cs2_5710, "ii", [intArg0, int4]));
            int4 = int4 + 1;
            ccSetPosition(0, int5, 0, 0);
            ccSetTextFont(Graphic.graphic_4040);
            ccSetTextShadow(true);
            if (int3 < 2) {
                ccSetColour(colour(0x8BEB74));
            } else {
                ccSetColour(colour(0xE6BE78));
            }
            ccSetText(enumOp(type_int, type_string, int2, int3));
            ccSetTextAlign(1, 2, 0);
            ccSetSize(0, 15, 1, 0);
            int5 = int5 + 15;
            int3 = int3 + 1;
        }
    }
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_31);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_82);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_112);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_106);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_145);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_124);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_91);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_109);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_155);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_148);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_142);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_127);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_117);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_133);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_100);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_136);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_97);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_94);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_103);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_130);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_139);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_88);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_158);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_121);
    ifSetGraphic(Graphic.aif_select_button_blue_1_0, Component.interface_1218.component_1218_152);
    let int7: number = 0;

    switch (intArg0) {
        case 1:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_82);
            int7 = 0;
            break;
        case 2:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_88);
            int7 = -640;
            break;
        case 5:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_91);
            int7 = 0;
            break;
        case 3:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_94);
            int7 = -640;
            break;
        case 7:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_97);
            int7 = -640;
            break;
        case 4:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_100);
            int7 = -320;
            break;
        case 6:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_112);
            int7 = 0;
            break;
        case 8:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_31);
            int7 = 0;
            break;
        case 9:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_117);
            int7 = -320;
            break;
        case 10:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_121);
            int7 = -640;
            break;
        case 11:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_124);
            int7 = 0;
            break;
        case 19:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_127);
            int7 = -320;
            break;
        case 13:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_136);
            int7 = -320;
            break;
        case 14:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_139);
            int7 = -640;
            break;
        case 15:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_142);
            int7 = -320;
            break;
        case 16:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_145);
            int7 = 0;
            break;
        case 17:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_148);
            int7 = -320;
            break;
        case 18:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_152);
            int7 = -960;
            break;
        case 12:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_103);
            int7 = -640;
            break;
        case 20:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_130);
            int7 = -640;
            break;
        case 21:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_155);
            int7 = -320;
            break;
        case 22:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_106);
            int7 = 0;
            break;
        case 23:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_133);
            int7 = -320;
            break;
        case 24:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_158);
            int7 = -640;
            break;
        case 25:
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, Component.interface_1218.component_1218_109);
            int7 = 0;
            break;
    }
    varc_1752 = 0;
    ifSetOnTimer(noHook(""), Component.interface_1218.component_1218_74);
    ifSetPosition(ifGetX(Component.interface_1218.component_1218_32), int7, 0, 0, Component.interface_1218.component_1218_32);
}
