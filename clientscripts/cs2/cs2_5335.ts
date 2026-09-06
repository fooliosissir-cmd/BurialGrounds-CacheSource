/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5335

function cs2_5335(intArg0: component, intArg1: number, intArg2: component, strArg0: string, intArg3: number, intArg4: number, intArg5: number): void {
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;
    let int14: component = -1;

    if (intArg1 == -1 && ifFind(intArg0) == 1) {
        int6 = ifGetX(intArg0) + 5;
        int7 = ifGetY(intArg0) + ifGetHeight(intArg0) + 5;
    } else if (ccFind(intArg0, intArg1) == 1) {
        int6 = ccGetX() + 5;
        int7 = ccGetY() + ccGetHeight() + 5;
    }

    if ((intArg1 == -1 && ifFind(intArg0) == 1) || ccFind(intArg0, intArg1) == 1) {
        if (tooltip_time(intArg3) == 0) {
            return;
        }
        if (varc_tooltip_built != 1) {
            int14 = ifGetLayer(intArg2);
            if (int14 != -1 && intArg4 >= ifGetWidth(int14)) {
                intArg4 = ifGetWidth(int14);
            }
            if (intArg5 == 0) {
                int12 = 4 + parawidth(strArg0, intArg4 - 4, Graphic.p12_full);
                int13 = 4 + 16 * paraheight(strArg0, intArg4 - 4, Graphic.p12_full);
            } else {
                int12 = 12 + parawidth(strArg0, intArg4 - 12, Graphic.verdana_11pt_regular);
                int13 = 12 + 16 * paraheight(strArg0, intArg4 - 12, Graphic.verdana_11pt_regular);
            }
            if (int14 != -1) {
                int8 = int6 - ifGetScrollX(int14);
                int9 = int7 - ifGetScrollY(int14);
                if (int8 < 0) {
                    int6 = ifGetScrollX(int14);
                    int8 = 0;
                }
                if (int9 < 0) {
                    int7 = ifGetScrollY(int14);
                    int9 = 0;
                }
                if (int8 > 0) {
                    int10 = int8 - ifGetWidth(int14) + int12;
                    if (int10 > 0) {
                        int6 = int6 - int10;
                    }
                }
                if (int9 > 0) {
                    int11 = int9 - ifGetHeight(int14) + int13;
                    if (int11 > 0) {
                        int7 = int7 - int11 - ccGetHeight() - 10;
                    }
                }
            }
            if (int6 < 0) {
                int6 = 0;
            }
            if (int7 < 0) {
                int7 = 0;
            }
            ifSetSize(int12, int13, 0, 0, intArg2);
            ifSetPosition(int6, int7, 0, 0, intArg2);
            ccDeleteAll(intArg2);
            ccCreate(intArg2, 3, 0);
            ccSetSize(ifGetWidth(intArg2), ifGetHeight(intArg2), 0, 0);
            ccSetfill(true);
            if (intArg5 == 0) {
                ccSetColour(colour(0x0E0E0E));
            } else {
                ccSetColour(colour(0x000000));
            }
            if (intArg5 == 0) {
                ccCreate(intArg2, 3, 1);
                ccSetSize(ifGetWidth(intArg2), ifGetHeight(intArg2), 0, 0);
                ccSetfill(false);
                ccSetColour(colour(0xEBECE6));
            } else {
                ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
                ccSetSize(4, 10, 1, 0);
                ccSetPosition(0, 0, 1, 0);
                ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_0));
                ccSettiling(true);
                ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
                ccSetSize(4, 10, 1, 0);
                ccSetPosition(0, 0, 1, 2);
                ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_0));
                ccSettiling(true);
                ccSetvflip(true);
                ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
                ccSetSize(10, 4, 0, 1);
                ccSetPosition(0, 0, 0, 1);
                ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_2));
                ccSettiling(true);
                ccSethflip(true);
                ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
                ccSetSize(10, 4, 0, 1);
                ccSetPosition(0, 0, 2, 1);
                ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_2));
                ccSettiling(true);
                ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
                ccSetSize(10, 10, 0, 0);
                ccSetPosition(0, 0, 0, 0);
                ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_1));
                ccSethflip(true);
                ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
                ccSetSize(10, 10, 0, 0);
                ccSetPosition(0, 0, 2, 0);
                ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_1));
                ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
                ccSetSize(10, 10, 0, 0);
                ccSetPosition(0, 0, 0, 2);
                ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_1));
                ccSethflip(true);
                ccSetvflip(true);
                ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
                ccSetSize(10, 10, 0, 0);
                ccSetPosition(0, 0, 2, 2);
                ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_1));
                ccSetvflip(true);
            }
            ccCreate(intArg2, 4, ifGetNextSubId(intArg2));
            ccSetText(strArg0);
            if (intArg5 == 0) {
                ccSetSize(intArg4 - 4, ifGetHeight(intArg2), 0, 0);
                ccSetPosition(2, 0, 0, 0);
                ccSetTextAlign(0, 1, 16);
                ccSetTextFont(Graphic.p12_full);
                ccSetColour(colour(0xF5B241));
            } else {
                ccSetSize(ifGetWidth(intArg2) - 12, ifGetHeight(intArg2) - 12, 0, 0);
                ccSetPosition(6, 6, 0, 0);
                ccSetTextAlign(1, 1, 13);
                ccSetColour(colour(0xFFFFFF));
                ccSetTextFont(Graphic.verdana_11pt_regular);
            }
            varc_tooltip_built = 1;
        }
    }
}
