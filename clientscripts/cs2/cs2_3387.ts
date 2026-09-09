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
    graphics_options_renderer_buttons(intArg0, intArg4);
    let int7: number = 0;
    let int8: number = -1;
    let int9: component = Component.interface_977.component_977_28;
    let int10: component = Component.interface_977.component_977_27;
    ccDeleteAll(int9);
    ccDeleteAll(int10);
    cs2_2601("Brightness", 0, int7, int9);
    loginscreen_brightness(Component.interface_977.component_977_35, Component.interface_977.component_977_36);
    ifSetdraggable(64028707, -1, Component.interface_977.component_977_36);
    cs2_2601("Camera zoom", 1, int7, int9);
    loginscreen_zoom(Component.interface_977.component_977_77, Component.interface_977.component_977_78);
    ifSetdraggable(64028749, -1, Component.interface_977.component_977_78);
    ccCreate(int10, 3, ifGetNextSubId(int10));
    ccSetSize(2, 1, 1, 0);
    ccSetPosition(1, int7 + 3, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x80786D));
    int7 = int7 + 20;
    let int11: number = 0;
    let int12: number = intArg3 + 21;
    let int13: number = -1;
    let int14: struct = -1;
    let int15: Enum = -1;
    let int16: number = 0;
    let int17: number = 0;
    let int18: number = 0;
    let int19: number = -1;

    while (int17 < enumGetoutputcount(Enum.enum_201)) {
        int14 = enumOp(type_int, type_struct, Enum.enum_201, int17);
        int13 = cs2_2601(structParam(int14, Param.param_845), int11, int7, int9);
        ccCreate(int9, 3, ifGetNextSubId(int9));
        ccSetSize(int12, 16, 0, 0);
        if (int11 == 1) {
            ccSetPosition(4, int7, 2, 0);
        } else {
            ccSetPosition(233 - int12, int7, 0, 0);
        }
        ccSetfill(true);
        ccSetColour(colour(0x2E2B26));
        ccCreate<1>(int9, 3, ifGetNextSubId(int9));
        ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
        ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
        ccSetfill<1>(false);
        ccSetColour<1>(colour(0x5F5B52));
        int8 = ccGetId<1>();
        ccCreate<1>(int9, 4, ifGetNextSubId(int9));
        ccSetTextFont<1>(Graphic.p11_full);
        ccSetTextAlign<1>(1, 1, 0);
        int16 = graphics_options_detailget(int14);
        if (int16 <= -1) {
            ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
            ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
            ccSetColour<1>(colour(0xEBE0BC));
            ccSetText<1>("<col=646464>" + "N/A");
        } else {
            ccSetSize<1>(intArg3, ccGetHeight(), 0, 0);
            ccSetPosition<1>(ccGetX() + 2, ccGetY(), 0, 0);
            int15 = structParam(int14, Param.param_683);
            int18 = cs2_829(int14, int15);
            if (int14 != Struct.struct_1009) {
                if (int16 < int18) {
                    ccSetColour<1>(colour(0xEBE0BC));
                } else {
                    ccSetColour<1>(colour(0x00B1E1));
                }
            } else if (int16 > 0) {
                ccSetColour<1>(colour(0xEBE0BC));
            } else {
                ccSetColour<1>(colour(0x00B1E1));
            }
            if (testBit(structParam(int14, Param.param_682), intArg0) != 1) {
                ccSetText<1>("<col=646464>" + "N/A");
                ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
                ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
            } else {
                ccSetText<1>(enumOp(type_int, type_string, int15, int16));
                ccCreate<1>(int9, 5, ifGetNextSubId(int9));
                ccSetSize<1>(16, 16, 0, 0);
                ccSetPosition<1>(ccGetX() + ccGetWidth() - (ccGetWidth<1>() + 1), int7 + (16 - ccGetHeight<1>()) / 2, 0, 0);
                ccSetGraphic<1>(Graphic.graphic_2554);
                ccHookMouseEnter(hook(cs2_2691, "Ii1ii1", [event_com, ccGetId<1>(), true, int8, colour(0x80786D), true]));
                ccHookMouseExit(hook(cs2_2691, "Ii1ii1", [event_com, ccGetId<1>(), false, int8, colour(0x5F5B52), true]));
                ccSetOnClick(hook(cs2_2695, "IiiiiJiiiii", [event_com, event_comsubid, ccGetId<1>(), int8, int13, int14, intArg2, intArg3, intArg0, intArg1, intArg4]));
            }
        }
        if (int11 == 1) {
            int11 = 0;
            int7 = int7 + 20;
            int19 = ifGetNextSubId(int10);
            ccCreate(int10, 3, int19);
            ccSetSize(2, 1, 1, 0);
            ccSetPosition(1, int7 + 3, 0, 0);
            ccSetfill(true);
            ccSetColour(colour(0x80786D));
        } else {
            int11 = 1;
        }
        int17 = int17 + 1;
    }

    if (int11 == 1) {
        int7 = int7 + 20;
    }

    if (int19 != -1 && int11 == 0 && ccFind(int10, int19) == 1) {
        ccDelete();
    }
    ifSetSize(ifGetWidth(Component.interface_977.component_977_26), int7 + 5, 0, 0, Component.interface_977.component_977_26);
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
