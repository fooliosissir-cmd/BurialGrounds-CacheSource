/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4806

function cs2_4806(intArg0: Enum, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    let [int5, int6, int7, int8, int9, int10, int11, int12, int13, int14, int15] = cs2_4818(intArg1, intArg2);

    switch (intArg2) {
        case 1:
            ifSetText(enumOp(type_int, type_string, Enum.clan_custom_category_top_section_title, intArg4), int15);
            break;
        case 2:
            ifSetText(enumOp(type_int, type_string, Enum.clan_custom_category_middle_section_title, intArg4), int15);
            break;
        case 3:
            ifSetText(enumOp(type_int, type_string, Enum.clan_custom_category_bottom_section_title, intArg4), int15);
            break;
    }
    ifSetHide(false, int5);
    let int16: number = 0;
    let int17: number = 1;
    let int18: struct = -1;
    let int19: number = 0;

    switch (varbit_clan_custom_stronghold_current_slot_varp) {
        case 1:
            switch (intArg2) {
                case 1:
                    int19 = varbit_clan_custom_slot_1_options1_varp;
                    break;
                case 2:
                    int19 = varbit_clan_custom_slot_1_options2_varp;
                    break;
                case 3:
                    int19 = varbit_clan_custom_slot_1_options3_varp;
                    break;
            }
            break;
        case 2:
            switch (intArg2) {
                case 1:
                    int19 = varbit_clan_custom_slot_2_options1_varp;
                    break;
                case 2:
                    int19 = varbit_clan_custom_slot_2_options2_varp;
                    break;
                case 3:
                    int19 = varbit_clan_custom_slot_2_options3_varp;
                    break;
            }
            break;
        case 3:
            switch (intArg2) {
                case 1:
                    int19 = varbit_clan_custom_slot_3_options1_varp;
                    break;
                case 2:
                    int19 = varbit_clan_custom_slot_3_options2_varp;
                    break;
                case 3:
                    int19 = varbit_clan_custom_slot_3_options3_varp;
                    break;
            }
            break;
    }

    while (int17 <= enumGetoutputcount(intArg0)) {
        int18 = enumOp(type_int, type_struct, intArg0, int17);
        if (int18 != -1) {
            ccCreate(int14, 3, int16);
            ccSetSize(0, 26, 1, 0);
            ccSetPosition(0, int16 * 27, 0, 0);
            ccSetfill(true);
            ccSetColour(colour(0x2C2820));
            ccCreate(int6, 5, int16);
            ccSetGraphic(structParam(int18, Param.clan_custom_if_gfx));
            ccSetSize(22, 22, 0, 0);
            ccSetPosition(0, 2 + int16 * 27, 0, 0);
            ccSetOnMouseOver(hook(cs2_4812, "sdii", [structParam(int18, Param.clan_custom_if_name), structParam(int18, Param.clan_custom_if_gfx), structParam(int18, Param.clan_custom_if_tier), 25]));
            ccHookMouseExit(hook(cs2_4813, "", []));
            ccCreate(int7, 5, int16);
            ccSetGraphic(structParam(int18, Param.clan_custom_if_resource_gfx1));
            ccSetSize(20, 20, 0, 0);
            ccSetPosition(1, 2 + int16 * 27, 0, 0);
            ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_484]));
            ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_484, event_com, event_comsubid, structParam(int18, Param.clan_custom_if_resource_name1), 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]));
            ccCreate(int10, 4, int16);
            ccSetText(tostring(structParam(int18, Param.clan_custom_if_resource_cost1)));
            ccSetSize(0, 26, 1, 0);
            ccSetPosition(0, int16 * 27, 0, 0);
            ccSetTextShadow(false);
            ccSetTextFont(Graphic.p11_full);
            ccSetTextAlign(1, 1, 0);
            ccSetColour(colour(0xFFFFFF));
            if (int8 != -1) {
                ccCreate(int8, 5, int16);
                ccSetGraphic(structParam(int18, Param.clan_custom_if_resource_gfx2));
                ccSetSize(20, 20, 0, 0);
                ccSetPosition(1, 2 + int16 * 27, 0, 0);
                ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_484]));
                ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_484, event_com, event_comsubid, structParam(int18, Param.clan_custom_if_resource_name2), 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]));
            }
            if (int11 != -1) {
                ccCreate(int11, 4, int16);
                ccSetText(tostring(structParam(int18, Param.clan_custom_if_resource_cost2)));
                ccSetSize(0, 26, 1, 0);
                ccSetPosition(0, int16 * 27, 0, 0);
                ccSetTextShadow(false);
                ccSetTextFont(Graphic.p11_full);
                ccSetTextAlign(1, 1, 0);
                ccSetColour(colour(0xFFFFFF));
            }
            if (int9 != -1) {
                ccCreate(int9, 5, int16);
                ccSetGraphic(structParam(int18, Param.clan_custom_if_resource_gfx3));
                ccSetSize(20, 20, 0, 0);
                ccSetPosition(0, 2 + int16 * 27, 0, 0);
                ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_484]));
                ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_484, event_com, event_comsubid, structParam(int18, Param.clan_custom_if_resource_name3), 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]));
            }
            if (int12 != -1) {
                ccCreate(int12, 4, int16);
                ccSetText(tostring(structParam(int18, Param.clan_custom_if_resource_cost3)));
                ccSetSize(0, 26, 1, 0);
                ccSetPosition(0, int16 * 27, 0, 0);
                ccSetTextShadow(false);
                ccSetTextFont(Graphic.p11_full);
                ccSetTextAlign(1, 1, 0);
                ccSetColour(colour(0xFFFFFF));
            }
            ccCreate(int13, 5, int16);
            ccSetSize(16, 16, 0, 0);
            ccSetPosition(1, 5 + int16 * 27, 0, 0);
            if (intArg3 == 0) {
                ccSetOp(1, "Select");
                ccSetOnOpt(hook(cs2_4832, "Ii", [event_com, event_comsubid]));
            }
            if (int19 == int16 + 1) {
                ccSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_0));
            } else {
                ccSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_5));
            }
            int16 = int16 + 1;
        }
        int17 = int17 + 1;
        int18 = -1;
    }
    ifSetParamInt(Param.clan_custom_if_subsection_height, int16 * 27, int5);
}
