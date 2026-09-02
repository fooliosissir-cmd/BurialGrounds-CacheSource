/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5055

function cs2_5055(intArg0: number, strArg0: string, intArg1: Enum, intArg2: component, intArg3: component, intArg4: component): void {
    ccDeleteAll(intArg2);
    ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
    ccSetSize(40, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSettiling(true);
    ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
    ccSetSize(20, 0, 0, 1);
    ccSetPosition(0, 0, 0, 1);
    ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
    ccSetSize(20, 0, 0, 1);
    ccSetPosition(0, 0, 2, 1);
    ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
    ccSetSize(10, 10, 0, 0);
    ccSetPosition(7, 0, 0, 1);
    ccCreate(intArg2, 4, ifGetNextSubId(intArg2));
    ccSetSize(20, 0, 1, 1);
    ccSetPosition(0, 1, 2, 1);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0xFFEF5F));
    ccSetTextShadow(true);
    ccSetText(strArg0);
    ifSetOnClick(hook(cs2_5064, "i", [intArg0]), intArg2);
    ccDeleteAll(intArg3);
    ccDeleteAll(intArg4);
    let int5: number = 0;
    let int6: number = enumGetoutputcount(Enum.clan_field_elements);

    while (int5 < int6) {
        ccCreate(intArg3, 3, ifGetNextSubId(intArg3));
        ccSetHide(true);
        ccCreate(intArg3, 3, ifGetNextSubId(intArg3));
        ccSetHide(true);
        ccCreate(intArg3, 5, ifGetNextSubId(intArg3));
        ccSetHide(true);
        ccCreate(intArg3, 5, ifGetNextSubId(intArg3));
        ccSetHide(true);
        ccCreate(intArg3, 5, ifGetNextSubId(intArg3));
        ccSetHide(true);
        ccCreate(intArg3, 5, ifGetNextSubId(intArg3));
        ccSetHide(true);
        ccCreate(intArg3, 5, ifGetNextSubId(intArg3));
        ccSetHide(true);
        ccCreate(intArg3, 5, ifGetNextSubId(intArg3));
        ccSetHide(true);
        ccCreate(intArg3, 5, ifGetNextSubId(intArg3));
        ccSetHide(true);
        ccCreate(intArg3, 3, ifGetNextSubId(intArg3));
        ccSetHide(true);
        ccCreate(intArg3, 5, ifGetNextSubId(intArg3));
        ccSetHide(true);
        ccCreate(intArg3, 4, ifGetNextSubId(intArg3));
        ccSetHide(true);
        int5 = int5 + 1;
    }
    let int7: number = -1;
    let int8: struct = -1;
    let int9: number = 0;
    [int5, int6] = [0, enumGetoutputcount(intArg1)];

    while (int5 < int6) {
        int7 = enumOp(type_int, type_int, intArg1, int5);
        int8 = enumOp(type_int, type_struct, Enum.clan_field_elements, int7);
        if (int8 != -1) {
            if (ccFind(intArg3, int7 * 12) == 1) {
                ccSetSize(24, 26, 1, 0);
                ccSetPosition(0, int9, 0, 0);
                ccSetTrans(255);
                ccSetOp(1, "Select");
                ccSetOnOpt(hook(clan_field_editor_menu_select, "ii1", [event_opindex, int7, false]));
                ccSetHide(false);
            }
            if (ccFind(intArg3, int7 * 12 + 1) == 1) {
                ccSetSize(24, 26, 0, 0);
                ccSetPosition(0, int9, 2, 0);
                ccSetTrans(255);
                ccSetOp(1, "Select & open settings");
                ccSetOnOpt(hook(clan_field_editor_menu_select, "ii1", [event_opindex, int7, true]));
                ccSetHide(false);
            }
            if (ccFind(intArg3, int7 * 12 + 2) == 1) {
                ccSetSize(40, 26, 1, 0);
                ccSetPosition(8, int9, 0, 0);
                ccSetHide(false);
            }
            if (ccFind(intArg3, int7 * 12 + 3) == 1) {
                ccSetSize(8, 26, 0, 0);
                ccSetPosition(0, int9, 0, 0);
                ccSetHide(false);
            }
            if (ccFind(intArg3, int7 * 12 + 4) == 1) {
                ccSetSize(8, 26, 0, 0);
                ccSetPosition(24, int9, 2, 0);
                ccSetHide(false);
            }
            if (ccFind(intArg3, int7 * 12 + 5) == 1) {
                ccSetSize(8, 26, 0, 0);
                ccSetPosition(8, int9, 2, 0);
                ccSetHide(false);
            }
            if (ccFind(intArg3, int7 * 12 + 6) == 1) {
                ccSetSize(8, 26, 0, 0);
                ccSetPosition(16, int9, 2, 0);
                ccSetHide(false);
            }
            if (ccFind(intArg3, int7 * 12 + 7) == 1) {
                ccSetSize(8, 26, 0, 0);
                ccSetPosition(0, int9, 2, 0);
                ccSetHide(false);
            }
            if (ccFind(intArg3, int7 * 12 + 8) == 1) {
                ccSetSize(20, 20, 0, 0);
                ccSetPosition(3, int9 + 3, 0, 0);
                ccSetGraphic(structParam(int8, Param.clan_field_element_graphic));
                ccSetHide(false);
            }
            if (ccFind(intArg3, int7 * 12 + 9) == 1) {
                ccSetSize(21, 21, 0, 0);
                ccSetPosition(2, int9 + 2, 0, 0);
                ccSetColour(colour(0xEFDFCF));
                ccSetfill(false);
                ccSetHide(false);
            }
            if (ccFind(intArg3, int7 * 12 + 10) == 1) {
                ccSetSize(17, 17, 0, 0);
                ccSetPosition(4, int9 + 4, 2, 0);
                ccSetHide(false);
            }
            if (ccFind(intArg3, int7 * 12 + 11) == 1) {
                ccSetSize(53, 26, 1, 0);
                ccSetPosition(24, int9, 2, 0);
                ccSetTextFont(Graphic.p11_full);
                ccSetTextAlign(0, 1, 0);
                ccSetColour(colour(0xFFEFDF));
                ccSetTextShadow(true);
                ccSetText(structParam(int8, Param.clan_field_element_name));
                ccSetHide(false);
            }
            int9 = int9 + 26;
        }
        int5 = int5 + 1;
    }
    ifSetScrollSize(0, int9, intArg3);
    ifSetScrollPos(0, 0, intArg3);
    proc_scrollbar_vertical(intArg4, intArg3, Graphic.aif_scrollbar_dragger_1_3, Graphic.aif_scrollbar_dragger_1_0, Graphic.aif_scrollbar_dragger_1_1, Graphic.aif_scrollbar_dragger_1_2, Graphic.aif_scrollbar_arrow_1_1, Graphic.aif_scrollbar_arrow_1_0);
}
