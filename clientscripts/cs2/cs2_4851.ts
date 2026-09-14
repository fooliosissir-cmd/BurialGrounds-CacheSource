/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4851

function cs2_4851(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    ifSetHide(true, Component.interface_1258.component_1258_201);
    ccDeleteAll(intArg2);
    ccDeleteAll(intArg3);
    ccDeleteAll(intArg4);
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 1;
    let int9: number = 0;
    let int10: number = 28;
    let int11: Enum = -1;
    let int12: Enum = -1;
    let int13: Enum = -1;
    let int14: number = 0;
    let int15: number = 0;

    switch (varbit_clan_custom_stronghold_current_slot_varp) {
        case 1:
            int14 = varbit_clan_custom_slot_1_type_varp;
            int15 = varbit_clan_custom_slot_1_resource_id_varp;
            break;
        case 2:
            int14 = varbit_clan_custom_slot_2_type_varp;
            int15 = varbit_clan_custom_slot_2_resource_id_varp;
            break;
        case 3:
            int14 = varbit_clan_custom_slot_3_type_varp;
            int15 = varbit_clan_custom_slot_3_resource_id_varp;
            break;
    }
    ccCreate(intArg4, 3, 0);
    ccSetHide(true);
    ccCreate(intArg2, 4, 0);
    ccSetHide(true);
    ccCreate(intArg3, 5, 0);
    ccSetHide(true);

    if (int15 == 0) {
        int11 = cs2_4819(varbit_clan_custom_stronghold_current_slot_varp);
        int12 = cs2_4822(varbit_clan_custom_stronghold_current_slot_varp);
        int13 = cs2_4825(varbit_clan_custom_stronghold_current_slot_varp);
        if (int11 == -1 || int12 == -1 || int13 == -1) {
            return;
        }
        int6 = min(min(enumGetoutputcount(int11), enumGetoutputcount(int13)), enumGetoutputcount(int12));
        while (int8 <= int6) {
            int7 = enumOp(type_int, type_int, int11, int8);
            ccCreate(intArg4, 3, int8);
            ccSetSize(0, int10, 1, 0);
            ccSetfill(true);
            if (int8 % 2 == 0) {
                ccSetColour(colour(0x201F1A));
                ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x201F1A)]));
            } else {
                ccSetColour(colour(0x1A1712));
                ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x1A1712)]));
            }
            ccSetPosition(0, int9, 0, 0);
            if (clan_custom_slot_disabled(varbit_clan_custom_stronghold_current_slot_varp) == 0) {
                ccSetOnOp(hook(cs2_4803, "i", [int8]));
                ccSetOp(1, "Select");
                ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x453D30)]));
            }
            if (int14 == int7) {
                ifSetHide(false, Component.interface_1258.component_1258_201);
                ifSetPosition(0, int9, 0, 0, Component.interface_1258.component_1258_201);
            }
            ccCreate(intArg2, 4, int8);
            ccSetSize(30, int10, 1, 0);
            ccSetPosition(30, int9, 0, 0);
            ccSetText(enumOp(type_int, type_string, int12, int7));
            ccSetColour(colour(0xE5E1BB));
            ccSetTextFont(Graphic.p11_full);
            ccSetTextAlign(0, 1, 0);
            ccCreate(intArg3, 5, int8);
            ccSetSize(22, 22, 0, 0);
            ccSetPosition(5, 4 + int9, 0, 0);
            ccSetGraphic(enumOp(type_int, type_graphic, int13, int7));
            int9 = int10 * int8;
            int8 = int8 + 1;
        }
    } else {
        ccCreate(intArg4, 3, int8);
        ccSetSize(0, int10, 1, 0);
        ccSetfill(true);
        if (int8 % 2 == 0) {
            ccSetColour(colour(0x201F1A));
            ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x201F1A)]));
        } else {
            ccSetColour(colour(0x1A1712));
            ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x1A1712)]));
        }
        ccSetPosition(0, int9, 0, 0);
        ccSetOnOp(hook(cs2_4803, "i", [int8]));
        ccSetOp(1, "Select");
        ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x453D30)]));
        ifSetHide(false, Component.interface_1258.component_1258_201);
        ifSetPosition(0, int9, 0, 0, Component.interface_1258.component_1258_201);
        ccCreate(intArg2, 4, int8);
        ccSetSize(30, int10, 1, 0);
        ccSetPosition(30, int9, 0, 0);
        ccSetText("Reset hotspot");
        ccSetColour(colour(0xE5E1BB));
        ccSetTextFont(Graphic.p11_full);
        ccSetTextAlign(0, 1, 0);
        ccCreate(intArg3, 5, int8);
        ccSetSize(22, 22, 0, 0);
        ccSetPosition(5, 4 + int9, 0, 0);
        ccSetGraphic(Graphic.aif_loyalty_icon_2_0);
        ccSet2dangle(49149);
        int9 = int10 * int8;
    }
    ifSetScrollPos(0, 0, intArg0);
    ifSetScrollSize(0, int9, intArg0);
    proc_scrollbar_vertical(intArg1, intArg0, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
}
