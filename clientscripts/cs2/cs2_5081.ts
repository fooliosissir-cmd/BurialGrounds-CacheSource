/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5081

function cs2_5081(intArg0: component, intArg1: number, intArg2: Enum, intArg3: number, intArg4: number, intArg5: number, intArg6: number): void {
    if (varc_demomode_create == 0 || varc_demomode_create == -1) {
        cs2_5085(intArg0);
        return;
    }
    soundVorbisVolume(6185, 1, 0, 200);
    ifSetHide(false, Component.clan_field_setup.dropdown_container);
    varc_welcome_screen_time = intArg1;
    let int7: number = intArg1 * 10;

    if (ccFind(intArg0, int7) == 1) {
        ccSetOnTimer(noHook(""));
    }

    if (ccFind(intArg0, int7 + 3) == 1) {
        ccSetGraphic(Graphic.aif_drop_down_button_1_7);
    }

    if (ccFind(intArg0, int7 + 5) == 1) {
        ccSetGraphic(Graphic.aif_drop_down_button_1_6);
    }

    if (ccFind(intArg0, int7 + 7) == 1) {
        ccSetGraphic(Graphic.aif_drop_down_button_1_8);
    }

    if (ccFind(intArg0, int7 + 4) == 1) {
        ccSetTrans(255);
    }

    if (ccFind(intArg0, int7 + 6) == 1) {
        ccSetTrans(255);
    }

    if (ccFind(intArg0, int7 + 8) == 1) {
        ccSetTrans(255);
    }
    ccDeleteAll(Component.clan_field_setup.dropdown_options);
    let int8: number = 0;

    while (int8 < intArg3) {
        ccCreate(Component.clan_field_setup.dropdown_options, 3, ifGetNextSubId(Component.clan_field_setup.dropdown_options));
        ccSetHide(true);
        int8 = int8 + 1;
    }
    let int9: number = cs2_5089(intArg2);
    let int10: number = 0;
    int8 = 0;

    while (int8 < intArg4) {
        if (int9 != int8) {
            ccCreate(Component.clan_field_setup.dropdown_options, 4, ifGetNextSubId(Component.clan_field_setup.dropdown_options));
            ccSetSize(0, 12, 1, 0);
            ccSetPosition(0, int10, 0, 0);
            ccSetTextFont(Graphic.p11_full);
            ccSetTextAlign(1, 1, 0);
            ccSetColour(colour(0xEFB063));
            ccSetTextShadow(false);
            ccSetText(enumOp(type_int, type_string, intArg2, int8));
            ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
            ccHookMouseExit(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xEFB063)]));
            ccSetOp(1, "Select");
            ccSetOnOpt(hook(cs2_5084, "I", [intArg0]));
            int10 = int10 + ccGetHeight();
        } else {
            ccCreate(Component.clan_field_setup.dropdown_options, 3, ifGetNextSubId(Component.clan_field_setup.dropdown_options));
            ccSetHide(true);
        }
        int8 = int8 + 1;
    }
    ifSetParamInt(Param.clan_field_element_w, intArg6, Component.clan_field_setup.dropdown);
    ifSetParamInt(Param.clan_field_element_h, int10, Component.clan_field_setup.dropdown);
    ifSetScrollSize(0, int10, Component.clan_field_setup.dropdown_options);
    cs2_5082(intArg0);

    if (intArg4 > 4) {
        proc_scrollbar_vertical(Component.clan_field_setup.dropdown_scrollbar, Component.clan_field_setup.dropdown_options, Graphic.aif_scrollbar_dragger_1_3, Graphic.aif_scrollbar_dragger_1_0, Graphic.aif_scrollbar_dragger_1_1, Graphic.aif_scrollbar_dragger_1_2, Graphic.aif_scrollbar_arrow_1_1, Graphic.aif_scrollbar_arrow_1_0);
    } else {
        ccDeleteAll(Component.clan_field_setup.dropdown_scrollbar);
    }
}
