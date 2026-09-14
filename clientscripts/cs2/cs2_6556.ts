/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6556

function cs2_6556(intArg0: number): void {
    let int1: graphic = Graphic.aif_buy_button_group_3_2;
    let int2: graphic = Graphic.aif_buy_button_group_3_0;
    let int3: graphic = Graphic.aif_buy_button_group_3_2;
    let int4: graphic = Graphic.aif_buy_button_group_3_0;
    let int5: number = testBit(varp_megagames_shop2_base, intArg0);
    let int6: component = Component.interface_1317.component_1317_25;
    let int7: component = Component.interface_1317.component_1317_27;

    switch (intArg0) {
        case 0:
            int6 = Component.interface_1317.component_1317_25;
            int7 = Component.interface_1317.component_1317_27;
            break;
        case 1:
            int6 = Component.interface_1317.component_1317_128;
            int7 = Component.interface_1317.component_1317_130;
            break;
        case 2:
            int6 = Component.interface_1317.component_1317_133;
            int7 = Component.interface_1317.component_1317_135;
            break;
        case 3:
            int6 = Component.interface_1317.component_1317_138;
            int7 = Component.interface_1317.component_1317_140;
            break;
        case 4:
            int6 = Component.interface_1317.component_1317_143;
            int7 = Component.interface_1317.component_1317_145;
            break;
        case 5:
            int6 = Component.interface_1317.component_1317_148;
            int7 = Component.interface_1317.component_1317_150;
            break;
        case 6:
            int6 = Component.interface_1317.component_1317_153;
            int7 = Component.interface_1317.component_1317_155;
            break;
        case 7:
            int6 = Component.interface_1317.component_1317_158;
            int7 = Component.interface_1317.component_1317_160;
            break;
        case 8:
            int6 = Component.interface_1317.component_1317_163;
            int7 = Component.interface_1317.component_1317_165;
            break;
        case 9:
            int6 = Component.interface_1317.component_1317_168;
            int7 = Component.interface_1317.component_1317_170;
            break;
        case 10:
            int6 = Component.interface_1317.component_1317_173;
            int7 = Component.interface_1317.component_1317_175;
            break;
        case 11:
            int6 = Component.interface_1317.component_1317_178;
            int7 = Component.interface_1317.component_1317_180;
            break;
        case 12:
            int6 = Component.interface_1317.component_1317_183;
            int7 = Component.interface_1317.component_1317_185;
            break;
        case 13:
            int6 = Component.interface_1317.component_1317_188;
            int7 = Component.interface_1317.component_1317_190;
            break;
        case 14:
            int6 = Component.interface_1317.component_1317_193;
            int7 = Component.interface_1317.component_1317_195;
            break;
        case 15:
            int6 = Component.interface_1317.component_1317_198;
            int7 = Component.interface_1317.component_1317_200;
            break;
        case 16:
            int6 = Component.interface_1317.component_1317_203;
            int7 = Component.interface_1317.component_1317_205;
            break;
        case 17:
            int6 = Component.interface_1317.component_1317_208;
            int7 = Component.interface_1317.component_1317_210;
            break;
        case 18:
            int6 = Component.interface_1317.component_1317_212;
            int7 = Component.interface_1317.component_1317_214;
            break;
        case 19:
            int6 = Component.interface_1317.component_1317_217;
            int7 = Component.interface_1317.component_1317_219;
            break;
        case 20:
            int6 = Component.interface_1317.component_1317_222;
            int7 = Component.interface_1317.component_1317_224;
            break;
        case 21:
            int6 = Component.interface_1317.component_1317_227;
            int7 = Component.interface_1317.component_1317_229;
            break;
        case 22:
            int6 = Component.interface_1317.component_1317_232;
            int7 = Component.interface_1317.component_1317_234;
            break;
        case 23:
            int6 = Component.interface_1317.component_1317_237;
            int7 = Component.interface_1317.component_1317_239;
            break;
        case 24:
            int6 = Component.interface_1317.component_1317_242;
            int7 = Component.interface_1317.component_1317_244;
            break;
        case 25:
            int6 = Component.interface_1317.component_1317_247;
            int7 = Component.interface_1317.component_1317_249;
            break;
    }

    if (int5 == 0) {
        ifSetOp(1, "Buy", int6);
        ifSetText(tostring(enumOp(type_int, type_int, Enum.enum_5996, intArg0)), int7);
        ifSetGraphic(Graphic.aif_buy_button_group_3_0, int6);
        ifSetOnClick(hook(graphic_swapper, "Id", [event_com, int1]), int6);
        ifSetOnRelease(hook(graphic_swapper, "Id", [event_com, int2]), int6);
        ifSetOnMouseOver(hook(graphic_swapper, "Id", [event_com, int3]), int6);
        ifSetOnMouseLeave(hook(graphic_swapper, "Id", [event_com, int4]), int6);
    } else if (int5 == 1) {
        if (intArg0 == 0 || intArg0 == 8 || intArg0 == 23 || intArg0 == 24 || intArg0 == 25) {
            ifSetOp(1, "", int6);
            ifSetText("Purchased", int7);
            ifSetGraphic(Graphic.aif_buy_button_group_3_1, int6);
            ifSetOnClick(noHook(""), int6);
            ifSetOnRelease(noHook(""), int6);
            ifSetOnMouseOver(noHook(""), int6);
            ifSetOnMouseLeave(noHook(""), int6);
        } else if (intArg0 == 1 || intArg0 == 9 || intArg0 == 16) {
            int1 = Graphic.aif_buy_button_group_3_3;
            int2 = Graphic.aif_buy_button_group_3_1;
            int3 = Graphic.aif_buy_button_group_3_3;
            int4 = Graphic.aif_buy_button_group_3_1;
            ifSetOp(1, "Recharge", int6);
            ifSetText("Recharge", int7);
            ifSetGraphic(Graphic.aif_buy_button_group_3_1, int6);
            ifSetOnClick(hook(graphic_swapper, "Id", [event_com, int1]), int6);
            ifSetOnRelease(hook(graphic_swapper, "Id", [event_com, int2]), int6);
            ifSetOnMouseOver(hook(graphic_swapper, "Id", [event_com, int3]), int6);
            ifSetOnMouseLeave(hook(graphic_swapper, "Id", [event_com, int4]), int6);
        } else {
            int1 = Graphic.aif_buy_button_group_3_3;
            int2 = Graphic.aif_buy_button_group_3_1;
            int3 = Graphic.aif_buy_button_group_3_3;
            int4 = Graphic.aif_buy_button_group_3_1;
            ifSetOp(1, "Reclaim", int6);
            ifSetText("Reclaim", int7);
            ifSetGraphic(Graphic.aif_buy_button_group_3_1, int6);
            ifSetOnClick(hook(graphic_swapper, "Id", [event_com, int1]), int6);
            ifSetOnRelease(hook(graphic_swapper, "Id", [event_com, int2]), int6);
            ifSetOnMouseOver(hook(graphic_swapper, "Id", [event_com, int3]), int6);
            ifSetOnMouseLeave(hook(graphic_swapper, "Id", [event_com, int4]), int6);
        }
    }
}
