/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,aif_tooltip_draw]

function aif_tooltip_draw(intArg0: component, intArg1: component, intArg2: number, strArg0: string, intArg3: number, intArg4: graphic, intArg5: graphic, intArg6: colour, intArg7: number, intArg8: number, intArg9: number, intArg10: number, intArg11: number): void {
    ifSetHide(false, intArg0);
    ccDeleteAll(intArg0);

    if (intArg4 == -1 || intArg5 == -1) {
        [intArg4, intArg5] = [Graphic.graphic_5631, Graphic.graphic_5631];
    }

    if (intArg6 == -1) {
        intArg6 = colour(0xFFFFFF);
    }
    let int12: number = min(parawidth(strArg0, intArg3, intArg4), intArg3);
    let int13: number = max(paraheight(strArg0, int12, intArg4), 1) * intArg7 + intArg8;
    let int14: number = int12 + 12;
    let int15: number = int13 + 12;

    switch (intArg9) {
        case 3:
        case 1:
            int14 = int14 + 23;
            break;
        case 0:
            int15 = int15 + 22;
            break;
        case 2:
            int15 = int15 + 23;
            break;
    }
    [int14, int15] = [max(int14, 45), max(int15, 45)];
    ifSetSize(int14, int15, 0, 0, intArg0);
    ccCreate(intArg0, 3, ifGetNextSubId(intArg0));

    switch (intArg9) {
        case 3:
            ccSetSize(25, 2, 1, 1);
            ccSetPosition(1, 0, 0, 1);
            break;
        case 1:
            ccSetSize(25, 2, 1, 1);
            ccSetPosition(1, 0, 2, 1);
            break;
        case 0:
            ccSetSize(2, 24, 1, 1);
            ccSetPosition(0, 1, 1, 0);
            break;
        case 2:
            ccSetSize(2, 25, 1, 1);
            ccSetPosition(0, 1, 1, 2);
            break;
        default:
            ccSetSize(2, 2, 1, 1);
            ccSetPosition(0, 0, 1, 1);
            break;
    }
    ccSetColour(colour(0x000000));
    ccSetfill(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));

    switch (intArg9) {
        case 3:
            ccSetSize(27, 10, 1, 0);
            ccSetPosition(2, 0, 0, 0);
            break;
        case 1:
            ccSetSize(27, 10, 1, 0);
            ccSetPosition(2, 0, 2, 0);
            break;
        case 2:
            ccSetSize(4, 10, 1, 0);
            ccSetPosition(0, 23, 1, 0);
            break;
        default:
            ccSetSize(4, 10, 1, 0);
            ccSetPosition(0, 0, 1, 0);
            break;
    }
    ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_0));
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));

    switch (intArg9) {
        case 3:
            ccSetSize(27, 10, 1, 0);
            ccSetPosition(2, 0, 0, 2);
            break;
        case 1:
            ccSetSize(27, 10, 1, 0);
            ccSetPosition(2, 0, 2, 2);
            break;
        case 0:
            ccSetSize(4, 10, 1, 0);
            ccSetPosition(0, 22, 1, 2);
            break;
        default:
            ccSetSize(4, 10, 1, 0);
            ccSetPosition(0, 0, 1, 2);
            break;
    }
    ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_0));
    ccSettiling(true);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));

    switch (intArg9) {
        case 1:
            ccSetSize(10, 4, 0, 1);
            ccSetPosition(23, 0, 0, 1);
            break;
        case 0:
            ccSetSize(10, 26, 0, 1);
            ccSetPosition(0, 2, 0, 0);
            break;
        case 2:
            ccSetSize(10, 27, 0, 1);
            ccSetPosition(0, 2, 0, 2);
            break;
        default:
            ccSetSize(10, 4, 0, 1);
            ccSetPosition(0, 0, 0, 1);
            break;
    }
    ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_2));
    ccSettiling(true);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));

    switch (intArg9) {
        case 3:
            ccSetSize(10, 4, 0, 1);
            ccSetPosition(23, 0, 2, 1);
            break;
        case 0:
            ccSetSize(10, 26, 0, 1);
            ccSetPosition(0, 2, 2, 0);
            break;
        case 2:
            ccSetSize(10, 27, 0, 1);
            ccSetPosition(0, 2, 2, 2);
            break;
        default:
            ccSetSize(10, 4, 0, 1);
            ccSetPosition(0, 0, 2, 1);
            break;
    }
    ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_2));
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 10, 0, 0);

    switch (intArg9) {
        case 1:
            ccSetPosition(23, 0, 0, 0);
            break;
        case 2:
            ccSetPosition(0, 23, 0, 0);
            break;
        default:
            ccSetPosition(0, 0, 0, 0);
            break;
    }
    ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_1));
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 10, 0, 0);

    switch (intArg9) {
        case 3:
            ccSetPosition(23, 0, 2, 0);
            break;
        case 2:
            ccSetPosition(0, 23, 2, 0);
            break;
        default:
            ccSetPosition(0, 0, 2, 0);
            break;
    }
    ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_1));
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 10, 0, 0);

    switch (intArg9) {
        case 1:
            ccSetPosition(23, 0, 0, 2);
            break;
        case 0:
            ccSetPosition(0, 22, 0, 2);
            break;
        default:
            ccSetPosition(0, 0, 0, 2);
            break;
    }
    ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_1));
    ccSethflip(true);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 10, 0, 0);

    switch (intArg9) {
        case 3:
            ccSetPosition(23, 0, 2, 2);
            break;
        case 0:
            ccSetPosition(0, 22, 2, 2);
            break;
        default:
            ccSetPosition(0, 0, 2, 2);
            break;
    }
    ccSetGraphic(gameframe_skin_graphic(Graphic.aif_overlay_frame_gold_corner_1_1));
    ccSetvflip(true);
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetSize(int12, int13, 0, 0);

    switch (intArg9) {
        case 3:
            ccSetPosition(6, 0, 0, 1);
            break;
        case 1:
            ccSetPosition(6, 0, 2, 1);
            break;
        case 0:
            ccSetPosition(0, 6, 1, 0);
            break;
        case 2:
            ccSetPosition(0, 6, 1, 2);
            break;
        default:
            ccSetPosition(0, 0, 1, 1);
            break;
    }
    ccSetColour(intArg6);
    ccSetTextFont(intArg5);
    ccSetTextAlign(1, 1, intArg7);
    ccSetText(strArg0);
    ccCreate<1>(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetGraphic<1>(Graphic.graphic_5613);
    let int16: number = 0;
    let int17: number = 0;
    let int18: number = 0;
    let int19: number = 0;
    let int20: component = ifGetLayer(intArg0);

    if (int20 != -1) {
        [int16, int18] = [if_getx_absolute(int20), trh_esc_mouseleave(int20)];
        [int17, int19] = [int16 + ifGetWidth(int20), int18 + ifGetHeight(int20)];
    } else if (int20 != -1) {
        [int17, int19] = [ifGetWidth(int20), ifGetHeight(int20)];
    } else {
        [int17, int19] = [765, 503];
    }
    let int21: number = 0;
    let int22: number = 0;
    let int23: number = 0;
    let int24: number = 0;
    let int25: number = 0;
    let int26: number = 0;
    let int27: number = 0;

    if (ccFind(intArg1, intArg2) == 1 || (intArg2 == -1 && ifFind(intArg1) == 1)) {
        [int21, int22, int23, int24] = [cc_getx_absolute(), cc_gety_absolute(), ccGetWidth(), ccGetHeight()];
        switch (intArg9) {
            case 3:
                [int25, int26] = [int21 - int14, int22 + intArg11 - int15 / 2];
                if (int26 < int18) {
                    int27 = int26 - int18;
                    int26 = int26 - int27;
                    int27 = max(int27, 0 - (int15 - 35) / 2);
                } else if (int26 + int15 > int19) {
                    int27 = int26 + int15 - int19;
                    int26 = int26 - int27;
                    int27 = min(int27, (int15 - 35) / 2);
                }
                ccSetSize<1>(25, 24, 0, 0);
                ccSetPosition<1>(0, int27, 2, 1);
                break;
            case 1:
                [int25, int26] = [int21 + int23, int22 + intArg11 - int15 / 2];
                if (int26 < int18) {
                    int27 = int26 - int18;
                    int26 = int26 - int27;
                    int27 = max(int27, 0 - (int15 - 35) / 2);
                } else if (int26 + int15 > int19) {
                    int27 = int26 + int15 - int19;
                    int26 = int26 - int27;
                    int27 = min(int27, (int15 - 35) / 2);
                }
                ccSetSize<1>(25, 24, 0, 0);
                ccSet2dangle<1>(32768);
                ccSetPosition<1>(0, int27, 0, 1);
                break;
            case 0:
                [int25, int26] = [int21 + intArg10 - int14 / 2, int22 - int15];
                if (int25 < int16) {
                    int27 = int25 - int16;
                    int25 = int25 - int27;
                    int27 = max(int27, 0 - (int14 - 35) / 2);
                } else if (int25 + int14 > int17) {
                    int27 = int25 + int14 - int17;
                    int25 = int25 - int27;
                    int27 = min(int27, (int14 - 35) / 2);
                }
                ccSetSize<1>(24, 25, 0, 0);
                ccSet2dangle<1>(49152);
                ccSetPosition<1>(int27, 0, 1, 2);
                break;
            case 2:
                [int25, int26] = [int21 + intArg10 - int14 / 2, int22 + int24];
                if (int25 < int16) {
                    int27 = int25 - int16;
                    int25 = int25 - int27;
                    int27 = max(int27, 0 - (int14 - 35) / 2);
                } else if (int25 + int14 > int17) {
                    int27 = int25 + int14 - int17;
                    int25 = int25 - int27;
                    int27 = min(int27, (int14 - 35) / 2);
                }
                ccSetSize<1>(24, 25, 0, 0);
                ccSet2dangle<1>(16384);
                ccSetPosition<1>(int27, 0, 1, 0);
                break;
            default:
                ccSetHide<1>(true);
                [int25, int26] = [intArg10 - int14 / 2, intArg11 - int15 / 2];
                break;
        }
    } else {
        ifSetHide(true, intArg0);
    }
    let int28: number = int25 - int16;
    let int29: number = int26 - int18;
    int28 = min(max(0, int28), ifGetWidth(ifGetParentLayer(intArg0)) - int14);
    int29 = min(max(0, int29), ifGetHeight(ifGetParentLayer(intArg0)) - int15);
    ifSetPosition(int28, int29, 0, 0, intArg0);
}
