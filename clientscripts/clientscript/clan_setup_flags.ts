/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_setup_flags]

function clan_setup_flags(intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    ccDeleteAll(intArg2);
    ccDeleteAll(intArg3);
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 8;
    let int7: number = 8;
    let int8: number = 50;
    let int9: number = 36;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = (ifGetWidth(intArg0) - int6 * 2) / (int6 + int8);
    let int13: number = enumGetoutputcount(Enum.clan_flag_selection_2string);
    let int14: number = enumGetoutputcount(Enum.clan_flag_selection_2gfx);
    let int15: number = min(int13, int14);

    while (int4 < int15) {
        int10 = int6 + (int8 + int6) * (int4 - int5 * int12);
        int11 = int7 + int5 * (int9 + int7);
        ccCreate(intArg2, 5, int4);
        ccSetSize(int8, int9, 0, 0);
        ccSetPosition(int10, int11, 0, 0);
        ccSetGraphic(Graphic.aif_smalltabs_whole_0);
        ccSetOnVarTransmit(hook(clan_flag_highlight_update, "iY", [int15], [2149]));
        ccSetOnMouseOver(hook(cs2_4326, "iI", [int4, intArg2]));
        ccSetOnMouseLeave(hook(cs2_4327, "iI", [int4, intArg2]));
        ccCreate(intArg3, 5, int4);
        ccSetSize(int8 - 8, int9 - 8, 0, 0);
        ccSetPosition(int10 + 4, int11 + 4, 0, 0);
        ccSetGraphic(enumOp(type_int, type_graphic, Enum.clan_flag_selection_2gfx, int4));
        ccSetOp(1, "Select");
        ccSetOnOp(hook(clientscript_clan_flag_highlight, "iIi", [int4, intArg2, int15]));
        ccSetOnMouseRepeat(hook(cs2_568, "IiIsii", [intArg3, int4, Component.clan_flag_selection.tooltip, enumOp(type_int, type_string, Enum.clan_flag_selection_2string, int4), 20, 350]));
        ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.clan_flag_selection.tooltip]));
        int4 = int4 + 1;
        if (int4 % int12 == 0) {
            int5 = int5 + 1;
        }
    }
    ifSetScrollPos(0, 0, intArg0);
    ifSetScrollSize(0, int7 + (int5 + 1) * (int7 + int9), intArg0);
    proc_scrollbar_vertical(intArg1, intArg0, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
}
