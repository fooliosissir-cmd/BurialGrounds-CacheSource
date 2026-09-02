/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3387

function cs2_3387(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    let int5: component = -1;
    let int6: component = -1;

    switch (intArg4) {
        case 1:
            ifSetText("Custom Graphics Options", Component.interface_742.component_742_19);
            ifOpenSubClient(Component.interface_742.component_742_6, Interface.interface_977);
            int5 = Component.interface_742.component_742_4;
            int6 = Component.interface_742.component_742_20;
            ifSetOnClick(hook(clientscript_graphics_options_rebuild, "iiiii", [intArg0, intArg1, intArg2, intArg3, intArg4]), Component.interface_742.component_742_18);
            ifSetOp(1, "Back", Component.interface_742.component_742_18);
            break;
        case 0:
            ifOpenSubClient(Component.interface_882.component_882_28, Interface.interface_977);
            int5 = Component.interface_882.component_882_4;
            int6 = Component.interface_882.component_882_5;
            ifSetHide(true, Component.interface_882.component_882_29);
            ifSetHide(false, Component.interface_882.component_882_23);
            ifSetOnClick(hook(clientscript_graphics_options_rebuild, "iiiii", [intArg0, intArg1, intArg2, intArg3, intArg4]), Component.interface_882.component_882_23);
            ifSetOnResize(hook(clientscript_graphics_options_login_resize, "1", [true]), Component.interface_882.component_882_4);
            ifSetOnResize(hook(cs2_2919, "1i", [true, intArg4]), Component.interface_744.component_744_50);
            break;
        case 2:
            ifOpenSubClient(Component.interface_911.component_911_3, Interface.interface_977);
            int5 = Component.interface_911.component_911_1;
            int6 = Component.interface_911.component_911_74;
            ifSetHide(true, Component.interface_911.component_911_6);
            ifSetHide(false, Component.interface_911.component_911_4);
            ifSetOnClick(hook(clientscript_graphics_options_rebuild, "iiiii", [intArg0, intArg1, intArg2, intArg3, intArg4]), Component.interface_911.component_911_4);
            ifSetOnResize(hook(cs2_2919, "1i", [true, intArg4]), Component.interface_906.component_906_0);
            ifSetHide(false, Component.interface_911.component_911_0);
            ifSetScrollSize(0, 510, Component.interface_911.component_911_2);
            ifSetScrollPos(0, 0, Component.interface_911.component_911_2);
            proc_scrollbar_vertical(Component.interface_911.component_911_0, Component.interface_911.component_911_2, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
            proc_lobby_resize();
            break;
    }
    ifSetHide(true, int6);
    ifSetOnClick(noHook(""), int5);
    let int7: number = 0;
    let int8: number = 1;
    let int9: component = -1;
    let int10: component = -1;
    let int11: component = -1;
    let int12: component = -1;
    let int13: component = -1;
    ifSetGraphic(-1, Component.interface_977.component_977_63);
    ifSetGraphic(-1, Component.interface_977.component_977_59);
    ifSetGraphic(-1, Component.interface_977.component_977_61);
    ifSetGraphic(-1, Component.interface_977.component_977_57);
    hookMouseEnter(noHook(""), Component.interface_977.component_977_62);
    hookMouseEnter(noHook(""), Component.interface_977.component_977_58);
    hookMouseEnter(noHook(""), Component.interface_977.component_977_60);
    hookMouseEnter(noHook(""), Component.interface_977.component_977_56);
    hookMouseExit(noHook(""), Component.interface_977.component_977_62);
    hookMouseExit(noHook(""), Component.interface_977.component_977_58);
    hookMouseExit(noHook(""), Component.interface_977.component_977_60);
    hookMouseExit(noHook(""), Component.interface_977.component_977_56);
    ifSetOnClick(noHook(""), Component.interface_977.component_977_62);
    ifSetOnClick(noHook(""), Component.interface_977.component_977_58);
    ifSetOnClick(noHook(""), Component.interface_977.component_977_60);
    ifSetOnClick(noHook(""), Component.interface_977.component_977_56);

    if (detailcanmodToolkit() == 0) {
        switch (intArg0) {
            case 0:
                cs2_1147(0, intArg0, 64028724, Component.interface_977.component_977_62, Component.interface_977.component_977_63, intArg4);
                break;
            case 2:
                cs2_1147(2, intArg0, 64028724, Component.interface_977.component_977_62, Component.interface_977.component_977_63, intArg4);
                break;
            case 1:
                cs2_1147(1, intArg0, 64028724, Component.interface_977.component_977_62, Component.interface_977.component_977_63, intArg4);
                break;
            case 3:
                cs2_1147(3, intArg0, 64028724, Component.interface_977.component_977_62, Component.interface_977.component_977_63, intArg4);
                break;
        }
        ifSetPosition(175, ifGetY(Component.interface_977.component_977_52), 2, 0, Component.interface_977.component_977_52);
        ifSetSize(350, ifGetHeight(Component.interface_977.component_977_50), 0, 0, Component.interface_977.component_977_49);
    } else {
        if (detailGetCanchoosesafemode() == 1 || intArg0 == 0) {
            int9 = Component.interface_977.component_977_52;
            cs2_1147(0, intArg0, 64028724, Component.interface_977.component_977_62, Component.interface_977.component_977_63, intArg4);
            int7 = int7 + 1;
        }
        while (int8 < 4) {
            if (detailcansetRenderer(int8) < 3) {
                switch (int8) {
                    case 2:
                        int13 = Component.interface_977.component_977_54;
                        cs2_1147(1, intArg0, 64028726, Component.interface_977.component_977_60, Component.interface_977.component_977_61, intArg4);
                        break;
                    case 1:
                        int13 = Component.interface_977.component_977_53;
                        cs2_1147(2, intArg0, 64028725, Component.interface_977.component_977_58, Component.interface_977.component_977_59, intArg4);
                        break;
                    case 3:
                        int13 = Component.interface_977.component_977_55;
                        cs2_1147(3, intArg0, 64028727, Component.interface_977.component_977_56, Component.interface_977.component_977_57, intArg4);
                        break;
                }
                int7 = int7 + 1;
                if (int9 == -1) {
                    int9 = int13;
                } else if (int10 == -1) {
                    int10 = int13;
                } else if (int11 == -1) {
                    int11 = int13;
                } else if (int12 == -1) {
                    int12 = int13;
                }
            }
            int8 = int8 + 1;
        }
        switch (int7) {
            case 1:
                ifSetPosition(175, ifGetY(int9), 2, 0, int9);
                ifSetSize(350, ifGetHeight(Component.interface_977.component_977_50), 0, 0, Component.interface_977.component_977_49);
                break;
            case 2:
                ifSetPosition(90, ifGetY(int9), 0, 0, int9);
                ifSetPosition(90, ifGetY(int10), 2, 0, int10);
                ifSetSize(400, ifGetHeight(Component.interface_977.component_977_50), 0, 0, Component.interface_977.component_977_49);
                break;
            case 3:
                ifSetPosition(58, ifGetY(int9), 0, 0, int9);
                ifSetPosition(173, ifGetY(int10), 2, 0, int10);
                ifSetPosition(58, ifGetY(int11), 2, 0, int11);
                ifSetSize(400, ifGetHeight(Component.interface_977.component_977_50), 0, 0, Component.interface_977.component_977_49);
                break;
        }
    }
    let int14: number = 0;
    let int15: number = -1;
    let int16: component = Component.interface_977.component_977_28;
    let int17: component = Component.interface_977.component_977_27;
    ccDeleteAll(int16);
    ccDeleteAll(int17);
    cs2_2601("Brightness", 0, int14, int16);
    loginscreen_brightness(Component.interface_977.component_977_35, Component.interface_977.component_977_36);
    ifSetdraggable(64028707, -1, Component.interface_977.component_977_36);
    cs2_2601("Camera zoom", 1, int14, int16);
    loginscreen_zoom(Component.interface_977.component_977_77, Component.interface_977.component_977_78);
    ifSetdraggable(64028749, -1, Component.interface_977.component_977_78);
    ccCreate(int17, 3, ifGetNextSubId(int17));
    ccSetSize(2, 1, 1, 0);
    ccSetPosition(1, int14 + 3, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x80786D));
    int14 = int14 + 20;
    let int18: number = 0;
    let int19: number = intArg3 + 21;
    let int20: number = -1;
    let int21: struct = -1;
    let int22: Enum = -1;
    let int23: number = 0;
    let int24: number = 0;
    let int25: number = 0;
    let int26: number = -1;

    while (int24 < enumGetoutputcount(Enum.enum_201)) {
        int21 = enumOp(type_int, type_struct, Enum.enum_201, int24);
        int20 = cs2_2601(structParam(int21, Param.param_845), int18, int14, int16);
        ccCreate(int16, 3, ifGetNextSubId(int16));
        ccSetSize(int19, 16, 0, 0);
        if (int18 == 1) {
            ccSetPosition(4, int14, 2, 0);
        } else {
            ccSetPosition(233 - int19, int14, 0, 0);
        }
        ccSetfill(true);
        ccSetColour(colour(0x2E2B26));
        ccCreate<1>(int16, 3, ifGetNextSubId(int16));
        ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
        ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
        ccSetfill<1>(false);
        ccSetColour<1>(colour(0x5F5B52));
        int15 = ccGetId<1>();
        ccCreate<1>(int16, 4, ifGetNextSubId(int16));
        ccSetTextFont<1>(Graphic.p11_full);
        ccSetTextAlign<1>(1, 1, 0);
        int23 = graphics_options_detailget(int21);
        if (int23 <= -1) {
            ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
            ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
            ccSetColour<1>(colour(0xEBE0BC));
            ccSetText<1>("<col=646464>" + "N/A");
        } else {
            ccSetSize<1>(intArg3, ccGetHeight(), 0, 0);
            ccSetPosition<1>(ccGetX() + 2, ccGetY(), 0, 0);
            int22 = structParam(int21, Param.param_683);
            int25 = cs2_829(int21, int22);
            if (int21 != Struct.struct_1009) {
                if (int23 < int25) {
                    ccSetColour<1>(colour(0xEBE0BC));
                } else {
                    ccSetColour<1>(colour(0x00B1E1));
                }
            } else if (int23 > 0) {
                ccSetColour<1>(colour(0xEBE0BC));
            } else {
                ccSetColour<1>(colour(0x00B1E1));
            }
            if (testBit(structParam(int21, Param.param_682), intArg0) != 1) {
                ccSetText<1>("<col=646464>" + "N/A");
                ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
                ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
            } else {
                ccSetText<1>(enumOp(type_int, type_string, int22, int23));
                ccCreate<1>(int16, 5, ifGetNextSubId(int16));
                ccSetSize<1>(16, 16, 0, 0);
                ccSetPosition<1>(ccGetX() + ccGetWidth() - (ccGetWidth<1>() + 1), int14 + (16 - ccGetHeight<1>()) / 2, 0, 0);
                ccSetGraphic<1>(Graphic.graphic_2554);
                ccHookMouseEnter(hook(cs2_2691, "Ii1ii1", [event_com, ccGetId<1>(), true, int15, colour(0x80786D), true]));
                ccHookMouseExit(hook(cs2_2691, "Ii1ii1", [event_com, ccGetId<1>(), false, int15, colour(0x5F5B52), true]));
                ccSetOnClick(hook(cs2_2695, "IiiiiJiiiii", [event_com, event_comsubid, ccGetId<1>(), int15, int20, int21, intArg2, intArg3, intArg0, intArg1, intArg4]));
            }
        }
        if (int18 == 1) {
            int18 = 0;
            int14 = int14 + 20;
            int26 = ifGetNextSubId(int17);
            ccCreate(int17, 3, int26);
            ccSetSize(2, 1, 1, 0);
            ccSetPosition(1, int14 + 3, 0, 0);
            ccSetfill(true);
            ccSetColour(colour(0x80786D));
        } else {
            int18 = 1;
        }
        int24 = int24 + 1;
    }

    if (int18 == 1) {
        int14 = int14 + 20;
    }

    if (int26 != -1 && int18 == 0 && ccFind(int17, int26) == 1) {
        ccDelete();
    }
    ifSetSize(ifGetWidth(Component.interface_977.component_977_26), int14 + 5, 0, 0, Component.interface_977.component_977_26);
    ifSetSize(ifGetWidth(Component.interface_977.component_977_24), ifGetY(Component.interface_977.component_977_26) + ifGetHeight(Component.interface_977.component_977_26), 0, 0, Component.interface_977.component_977_24);
    ifSetSize(ifGetWidth(Component.interface_977.component_977_3), ifGetY(Component.interface_977.component_977_24) + ifGetHeight(Component.interface_977.component_977_24), 0, 0, Component.interface_977.component_977_3);

    switch (intArg4) {
        case 1:
            ifSetSize(ifGetWidth(Component.interface_742.component_742_4), 334, 0, 0, Component.interface_742.component_742_4);
            ifSetPosition(0, ifGetY(Component.interface_977.component_977_2), 0, 0, Component.interface_977.component_977_2);
            ifSetSize(20, ifGetHeight(Component.interface_742.component_742_6) - ifGetHeight(Component.interface_977.component_977_1), 1, 0, Component.interface_977.component_977_2);
            ifSetSize(ifGetWidth(Component.interface_977.component_977_0), ifGetHeight(Component.interface_742.component_742_6), 0, 0, Component.interface_977.component_977_0);
            ifSetScrollSize(0, ifGetHeight(Component.interface_977.component_977_3) + 5, Component.interface_977.component_977_2);
            proc_scrollbar_vertical(Component.interface_977.component_977_73, Component.interface_977.component_977_2, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
            break;
        case 0:
            ifSetPosition(0, 0, 1, 0, Component.interface_977.component_977_0);
            ifSetPosition(0, 0, 1, 0, Component.interface_882.component_882_28);
            ifSetSize(ifGetWidth(Component.interface_977.component_977_2), ifGetHeight(Component.interface_977.component_977_3), 0, 0, Component.interface_977.component_977_2);
            ifSetSize(ifGetWidth(Component.interface_977.component_977_0), ifGetY(Component.interface_977.component_977_2) + ifGetHeight(Component.interface_977.component_977_2), 0, 0, Component.interface_977.component_977_0);
            ifSetSize(ifGetWidth(Component.interface_882.component_882_28), ifGetHeight(Component.interface_977.component_977_0) + 15 + ifGetHeight(Component.interface_882.component_882_23), 0, 0, Component.interface_882.component_882_28);
            ifSetSize(ifGetWidth(Component.interface_882.component_882_22), ifGetHeight(Component.interface_882.component_882_28) + 5, 0, 0, Component.interface_882.component_882_22);
            ifSetSize(ifGetWidth(Component.interface_882.component_882_8), 40 + ifGetHeight(Component.interface_882.component_882_22), 0, 0, Component.interface_882.component_882_8);
            ifSetPosition(0, 10, 1, 1, Component.interface_882.component_882_22);
            break;
        case 2:
            ifSetPosition(0, 0, 1, 0, Component.interface_977.component_977_0);
            ifSetSize(ifGetWidth(Component.interface_977.component_977_2), ifGetHeight(Component.interface_977.component_977_3), 0, 0, Component.interface_977.component_977_2);
            ifSetSize(ifGetWidth(Component.interface_977.component_977_0), ifGetY(Component.interface_977.component_977_2) + ifGetHeight(Component.interface_977.component_977_2), 0, 0, Component.interface_977.component_977_0);
            ifSetSize(ifGetWidth(Component.interface_911.component_911_3), ifGetHeight(Component.interface_977.component_977_0) + 5 + ifGetHeight(Component.interface_911.component_911_4), 0, 0, Component.interface_911.component_911_3);
            break;
    }
    graphics_options_manual_setup_buttons(intArg4, true);
    proc_graphics_options_login_resize(true);
}
