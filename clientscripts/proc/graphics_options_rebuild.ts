/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_rebuild]

function proc_graphics_options_rebuild(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    let int5: component = -1;
    let int6: component = -1;

    switch (intArg4) {
        case 1:
            ifSetText("Graphics Options", Component.interface_742.component_742_19);
            ifOpenSubClient(Component.interface_742.component_742_6, Interface.interface_978);
            int5 = Component.interface_742.component_742_4;
            int6 = Component.interface_742.component_742_20;
            ifSetSize(0, 0, 1, 1, Component.interface_978.component_978_5);
            ifSetSize(ifGetWidth(Component.interface_742.component_742_4), 304, 0, 0, Component.interface_742.component_742_4);
            ifSetOnClick(hook(closebutton_click, "", []), Component.interface_742.component_742_18);
            ifSetOp(1, "Close", Component.interface_742.component_742_18);
            break;
        case 0:
            ifOpenSubClient(Component.interface_882.component_882_28, Interface.interface_978);
            ifSetGraphic(Graphic.corner_flourish_0, Component.interface_882.component_882_11);
            ifSetGraphic(Graphic.corner_flourish_0, Component.interface_882.component_882_12);
            ifSetGraphic(Graphic.corner_flourish_0, Component.interface_882.component_882_14);
            int5 = Component.interface_882.component_882_4;
            int6 = Component.interface_882.component_882_5;
            cs2_1217(Component.interface_882.component_882_57, Component.interface_882.component_882_58);
            loginscreen_musicvol(Component.interface_882.component_882_50, Component.interface_882.component_882_51);
            cs2_1218(Component.interface_882.component_882_65, Component.interface_882.component_882_66);
            cs2_5868(Component.interface_882.component_882_88, Component.interface_882.component_882_89);
            cs2_1220(Component.interface_882.component_882_84, Component.interface_882.component_882_82);
            ifSetPosition(0, 5, 1, 0, Component.interface_978.component_978_0);
            ifSetPosition(0, 5, 1, 0, Component.interface_978.component_978_5);
            ifSetSize(ifGetWidth(Component.interface_882.component_882_28), ifGetY(Component.interface_978.component_978_0) + ifGetY(Component.interface_978.component_978_8) + ifGetHeight(Component.interface_978.component_978_0) + 5 + ifGetHeight(Component.interface_882.component_882_29), 0, 0, Component.interface_882.component_882_28);
            ifSetSize(ifGetWidth(Component.interface_882.component_882_28), ifGetHeight(Component.interface_882.component_882_28), 0, 0, Component.interface_882.component_882_22);
            ifSetSize(ifGetWidth(Component.interface_882.component_882_8), ifGetHeight(Component.interface_882.component_882_22) + 47, 0, 0, Component.interface_882.component_882_8);
            ifSetPosition(0, ifGetY(Component.interface_882.component_882_8) + 33, 1, 0, Component.interface_882.component_882_22);
            ifSetPosition(0, 0, 1, 1, Component.interface_882.component_882_28);
            ifSetPosition(0, 100, 1, 1, Component.interface_882.component_882_29);
            ifSetPosition(0, -5, 1, 1, Component.interface_978.component_978_2);
            ifSetHide(false, Component.interface_882.component_882_29);
            ifSetHide(true, Component.interface_882.component_882_23);
            proc_graphics_options_login_resize(false);
            ifSetOnResize(hook(clientscript_graphics_options_login_resize, "1", [false]), Component.interface_882.component_882_4);
            ifSetOnResize(hook(cs2_2919, "1i", [false, intArg4]), Component.interface_744.component_744_50);
            break;
        case 2:
            ifOpenSubClient(Component.interface_911.component_911_3, Interface.interface_978);
            int5 = Component.interface_911.component_911_1;
            int6 = Component.interface_911.component_911_74;
            ifSetPosition(0, 5, 1, 0, Component.interface_978.component_978_0);
            ifSetPosition(0, 0, 1, 0, Component.interface_978.component_978_5);
            ifSetSize(ifGetWidth(Component.interface_911.component_911_3), ifGetY(Component.interface_978.component_978_0) + ifGetY(Component.interface_978.component_978_8) + ifGetHeight(Component.interface_978.component_978_0) + 5 + ifGetHeight(Component.interface_911.component_911_6), 0, 0, Component.interface_911.component_911_3);
            ifSetHide(false, Component.interface_911.component_911_6);
            ifSetHide(true, Component.interface_911.component_911_4);
            ifSetHide(true, Component.interface_911.component_911_0);
            ifSetScrollPos(0, 0, Component.interface_911.component_911_2);
            ifSetScrollSize(0, 0, Component.interface_911.component_911_2);
            ifSetOnResize(hook(cs2_2919, "1i", [false, intArg4]), Component.interface_906.component_906_0);
            proc_lobby_resize();
            break;
    }
    ifSetOnClick(hook(clientscript_autosetup, "i", [intArg4]), Component.interface_978.component_978_1);
    cs2_1149(1, intArg1, Component.interface_978.component_978_12, Component.interface_978.component_978_21, Component.interface_978.component_978_22, intArg2, intArg3, intArg0, intArg4);
    cs2_1149(2, intArg1, Component.interface_978.component_978_13, Component.interface_978.component_978_19, Component.interface_978.component_978_20, intArg2, intArg3, intArg0, intArg4);
    cs2_1149(3, intArg1, Component.interface_978.component_978_14, Component.interface_978.component_978_17, Component.interface_978.component_978_18, intArg2, intArg3, intArg0, intArg4);
    ifSetHide(true, int6);
    ifSetOnClick(noHook(""), int5);

    if (varc_178 < 0) {
        varc_178 = max(fullScreenLastMode(), 0);
    }

    if (varc_178 >= fullScreenModeCount()) {
        varc_178 = 0;
    }
    let int7: component = Component.interface_978.component_978_16;
    ccDeleteAll(int7);
    ccCreate(int7, 3, ifGetNextSubId(int7));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetfill(true);
    ccSetColour(colour(0x2E2B26));
    ccCreate<1>(int7, 3, ifGetNextSubId(int7));
    ccSetSize<1>(0, 0, 1, 1);
    ccSetPosition<1>(0, 0, 1, 0);
    ccSetfill<1>(false);
    ccSetColour<1>(colour(0x5F5B52));
    let int8: number = ccGetId<1>();
    ccCreate<1>(int7, 4, ifGetNextSubId(int7));
    ccSetTextFont<1>(Graphic.p11_full);
    ccSetTextAlign<1>(1, 1, 0);

    if (fullScreenModeCount() <= 0) {
        ccSetSize<1>(0, 0, 1, 1);
        ccSetPosition<1>(0, 0, 1, 1);
        ccSetColour<1>(colour(0xEBE0BC));
        ccSetText<1>("N/A");
    } else {
        ccSetSize<1>(21, 0, 1, 1);
        ccSetPosition<1>(2, 0, 0, 1);
        if (varc_178 < fullScreenModeCount() - 1) {
            ccSetColour<1>(colour(0xEBE0BC));
        } else {
            ccSetColour<1>(colour(0x00B1E1));
        }
        ccSetText<1>(graphics_options_resolutions(varc_178));
        ccCreate<1>(int7, 5, ifGetNextSubId(int7));
        ccSetSize<1>(16, 16, 0, 0);
        ccSetPosition<1>(1, 0, 2, 1);
        ccSetGraphic<1>(Graphic.graphic_2554);
        ccHookMouseEnter(hook(cs2_2691, "Ii1ii1", [event_com, ccGetId<1>(), true, int8, colour(0x80786D), true]));
        ccHookMouseExit(hook(cs2_2691, "Ii1ii1", [event_com, ccGetId<1>(), false, int8, colour(0x5F5B52), true]));
        ccSetOnClick(hook(cs2_2695, "IiiiiJiiiii", [event_com, event_comsubid, ccGetId<1>(), int8, -1, Struct.struct_845, intArg2, intArg3, intArg0, intArg1, intArg4]));
    }
    graphics_options_manual_setup_buttons(intArg4, false);
}
