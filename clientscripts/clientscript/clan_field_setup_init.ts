/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_field_setup_init]

function clan_field_setup_init(intArg0: component): void {
    cs2_4762(Component.clan_field_setup.dropdown_graphics, Struct.struct_1788);
    ccDeleteAll(Component.clan_field_setup.rules);
    let int1: number = 0;
    let int2: number = enumGetoutputcount(Enum.clan_field_rules);
    let int3: Enum = -1;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    defineArray(0, type_int, int2 + 1);
    let int7: number = 1;

    while (int1 < int2) {
        int3 = enumOp(type_int, type_enum, Enum.clan_field_rules, int1);
        if (int3 != -1) {
            [int4, int5] = [0, enumGetoutputcount(int3)];
            while (int4 < int5) {
                int6 = max(int6, stringWidth(enumOp(type_int, type_string, int3, int4), Graphic.p11_full));
                int4 = int4 + 1;
            }
            array0[int7] = array0[int7 - 1] + int5;
            int7 = int7 + 1;
        }
        int1 = int1 + 1;
    }
    let int8: number = int6 + 28;
    int1 = 0;
    let int9: number = 0;
    let int10: number = 0;

    while (int1 < int2) {
        int3 = enumOp(type_int, type_enum, Enum.clan_field_rules, int1);
        if (int3 != -1) {
            ccCreate(Component.clan_field_setup.rules, 3, ifGetNextSubId(Component.clan_field_setup.rules));
            ccSetSize(0, 33, 1, 0);
            ccSetPosition(0, int9, 0, 0);
            ccSetfill(true);
            if (int1 % 2 == 0) {
                ccSetColour(colour(0x211F1C));
            } else {
                ccSetColour(colour(0x181715));
            }
            ccCreate(Component.clan_field_setup.rules, 4, ifGetNextSubId(Component.clan_field_setup.rules));
            ccSetSize(int8 + 15, 33, 1, 0);
            ccSetPosition(5, int9, 0, 0);
            ccSetTextFont(Graphic.p11_full);
            ccSetTextAlign(0, 1, 0);
            ccSetColour(colour(0xE9E2B4));
            ccSetTextShadow(true);
            ccSetText(enumOp(type_int, type_string, int3, -1));
            ccCreate(Component.clan_field_setup.rules, 3, ifGetNextSubId(Component.clan_field_setup.rules));
            ccSetSize(int8, 21, 0, 0);
            ccSetPosition(6, int9 + 6, 2, 0);
            ccSetTrans(255);
            ccCreate<1>(Component.clan_field_setup.rules, 5, ifGetNextSubId(Component.clan_field_setup.rules));
            ccSetSize<1>(ccGetWidth() - 40, ccGetHeight(), 0, 0);
            ccSetPosition<1>(26, ccGetY(), 2, 0);
            if (varc_demomode_create == 1) {
                ccSetGraphic<1>(Graphic.aif_drop_down_button_1_1);
            } else {
                ccSetGraphic<1>(Graphic.aif_drop_down_button_1_10);
            }
            ccCreate<1>(Component.clan_field_setup.rules, 5, ifGetNextSubId(Component.clan_field_setup.rules));
            ccSetSize<1>(ccGetWidth() - 40, ccGetHeight(), 0, 0);
            ccSetPosition<1>(26, ccGetY(), 2, 0);
            if (varc_demomode_create == 1) {
                ccSetGraphic<1>(Graphic.aif_drop_down_button_1_4);
                ccSetTrans<1>(255);
            } else {
                ccSetHide<1>(true);
            }
            ccCreate<1>(Component.clan_field_setup.rules, 5, ifGetNextSubId(Component.clan_field_setup.rules));
            ccSetSize<1>(20, ccGetHeight(), 0, 0);
            ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
            if (varc_demomode_create == 1) {
                ccSetGraphic<1>(Graphic.aif_drop_down_button_1_0);
            } else {
                ccSetGraphic<1>(Graphic.aif_drop_down_button_1_9);
            }
            ccCreate<1>(Component.clan_field_setup.rules, 5, ifGetNextSubId(Component.clan_field_setup.rules));
            ccSetSize<1>(20, ccGetHeight(), 0, 0);
            ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
            if (varc_demomode_create == 1) {
                ccSetGraphic<1>(Graphic.aif_drop_down_button_1_3);
                ccSetTrans<1>(255);
            } else {
                ccSetHide<1>(true);
            }
            ccCreate<1>(Component.clan_field_setup.rules, 5, ifGetNextSubId(Component.clan_field_setup.rules));
            ccSetSize<1>(20, ccGetHeight(), 0, 0);
            ccSetPosition<1>(6, ccGetY(), 2, 0);
            if (varc_demomode_create == 1) {
                ccSetGraphic<1>(Graphic.aif_drop_down_button_1_2);
            } else {
                ccSetGraphic<1>(Graphic.aif_drop_down_button_1_11);
            }
            ccCreate<1>(Component.clan_field_setup.rules, 5, ifGetNextSubId(Component.clan_field_setup.rules));
            ccSetSize<1>(20, ccGetHeight(), 0, 0);
            ccSetPosition<1>(6, ccGetY(), 2, 0);
            if (varc_demomode_create == 1) {
                ccSetGraphic<1>(Graphic.aif_drop_down_button_1_5);
                ccSetTrans<1>(255);
            } else {
                ccSetHide<1>(true);
            }
            ccCreate<1>(Component.clan_field_setup.rules, 4, ifGetNextSubId(Component.clan_field_setup.rules));
            ccSetSize<1>(int6, 21, 0, 0);
            ccSetPosition<1>(30, ccGetY(), 2, 0);
            ccSetTextFont<1>(Graphic.p11_full);
            ccSetTextAlign<1>(1, 1, 0);
            ccSetColour<1>(colour(0xEFB063));
            ccSetTextShadow<1>(false);
            ccSetText<1>("");
            int9 = int9 + 33;
            if (varc_demomode_create == 1) {
                ccHookMouseEnter(hook(clan_field_setup_highlight, "Iii", [event_com, int1, 0]));
                ccHookMouseExit(hook(clan_field_setup_highlight, "Iii", [event_com, int1, 1]));
                ccSetOnRelease(hook(clan_field_setup_highlight, "Iii", [event_com, int1, 255]));
                if (int3 == Enum.clan_field_rules_layout) {
                    ccSetOnClick(hook(cs2_5081, "Iigiiii", [event_com, int1, int3, array0[int1], min(array0[int1 + 1] - array0[int1], varbit_clan_field_initiatordata), int10, int8]));
                } else {
                    ccSetOnClick(hook(cs2_5081, "Iigiiii", [event_com, int1, int3, array0[int1], array0[int1 + 1] - array0[int1], int10, int8]));
                }
            }
        }
        int1 = int1 + 1;
    }

    if (int9 > ifGetHeight(Component.clan_field_setup.rules)) {
        ifSetScrollSize(0, int9, Component.clan_field_setup.rules);
        ifSetScrollPos(0, ifGetScrollY(Component.clan_field_setup.rules), Component.clan_field_setup.rules);
    } else {
        ifSetScrollSize(0, 0, Component.clan_field_setup.rules);
        ifSetScrollPos(0, 0, Component.clan_field_setup.rules);
    }
    proc_scrollbar_vertical(Component.clan_field_setup.rules_scrollbar, Component.clan_field_setup.rules, Graphic.aif_scrollbar_dragger_1_3, Graphic.aif_scrollbar_dragger_1_0, Graphic.aif_scrollbar_dragger_1_1, Graphic.aif_scrollbar_dragger_1_2, Graphic.aif_scrollbar_arrow_1_1, Graphic.aif_scrollbar_arrow_1_0);
    proc_clan_field_setup_update(Component.clan_field_setup.rules);
    ifSetOnClick(hook(cs2_5084, "I", [Component.clan_field_setup.rules]), Component.clan_field_setup.dropdown_container);
    ifSetOnVarcTransmit(hook(clan_field_setup_init, "IY", [event_com], [1095]), intArg0);
    ifSetOnVarTransmit(hook(clan_field_setup_init, "IY", [event_com], [1734]), intArg0);
    ifSetOnVarTransmit(hook(clientscript_clan_field_setup_update, "IY", [event_com], [1736]), Component.clan_field_setup.rules);
    ifSetOnVarcStrTransmit(hook(clientscript_clan_field_setup_update, "IY", [event_com], [129]), Component.clan_field_setup.rules);
}
