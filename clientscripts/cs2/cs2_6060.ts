/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6060

function cs2_6060(intArg0: component): void {
    if (intArg0 == -1) {
        return;
    }
    let int1: number = 4;
    let int2: number = 4;
    let int3: number = 4;
    let int4: number = 4;
    let int5: number = 6;
    let int6: number = 64;
    let int7: number = 53;
    let int8: number = 56;
    let int9: number = 7;
    let int10: number = 120;
    let int11: number = 64;
    let int12: number = 53;
    let int13: number = 8;
    let int14: number = 68;
    let int15: number = 43;

    if (ifFind(intArg0) == 1) {
        ccSetPosition(0, 0, 1, 1);
        ccSetSize(int1 * 2, int2 * 2, 1, 1);
    }
    ccDeleteAll(intArg0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int13 * 2, int4, 1, 0);
    ccSetPosition(0, int5, 1, 0);
    ccSetGraphic(Graphic.aif_innerwin_dropshadow_1);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int13 * 2, int4, 1, 0);
    ccSetPosition(0, int9, 1, 2);
    ccSetGraphic(Graphic.aif_innerwin_dropshadow_1);
    ccSettiling(true);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int3, int5 + int9, 0, 1);
    ccSetPosition(int13, int5, 0, 0);
    ccSetGraphic(Graphic.aif_innerwin_dropshadow_2);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int3, int5 + int9, 0, 1);
    ccSetPosition(int13, int5, 2, 0);
    ccSetGraphic(Graphic.aif_innerwin_dropshadow_2);
    ccSettiling(true);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int6 * 2, int5, 1, 0);
    ccSetPosition(0, 0, 1, 0);
    ccSetGraphic(Graphic.aif_window_stone_bot_brdr_middlenotitle);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int8, int5, 0, 0);
    ccSetPosition(int13, 0, 0, 0);
    ccSetGraphic(Graphic.aif_window_stone_bot_brdr_left);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int8, int5, 0, 0);
    ccSetPosition(int13, 0, 2, 0);
    ccSetGraphic(Graphic.aif_window_stone_bot_brdr_right);
    ccSethflip(true);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize((int11 + int10) * 2, int9, 1, 0);
    ccSetPosition(0, 0, 1, 2);
    ccSetGraphic(Graphic.aif_window_stone_bot_brdr_middle);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int10, int9, 0, 0);
    ccSetPosition(int11, 0, 0, 2);
    ccSetGraphic(Graphic.aif_window_stone_bot_brdr_left);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int10, int9, 0, 0);
    ccSetPosition(int11, 0, 2, 2);
    ccSetGraphic(Graphic.aif_window_stone_bot_brdr_right);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int13, int5 + int12 + int14 + int15, 0, 1);
    ccSetPosition(0, int5 + int14, 0, 0);
    ccSetGraphic(Graphic.aif_window_stone_side_brdr_large);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int13, int14, 0, 0);
    ccSetPosition(0, int5, 0, 0);
    ccSetGraphic(Graphic.aif_window_stone_close_corner_3);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int13, int15, 0, 0);
    ccSetPosition(0, int12, 0, 2);
    ccSetGraphic(Graphic.aif_window_stone_side_brdr_small);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int13, int5 + int12 + int14 + int15, 0, 1);
    ccSetPosition(0, int5 + int14, 2, 0);
    ccSetGraphic(Graphic.aif_window_stone_side_brdr_large);
    ccSettiling(true);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int13, int14, 0, 0);
    ccSetPosition(0, int5, 2, 0);
    ccSetGraphic(Graphic.aif_window_stone_close_corner_3);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int13, int15, 0, 0);
    ccSetPosition(0, int12, 2, 2);
    ccSetGraphic(Graphic.aif_window_stone_side_brdr_small);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int6, int7, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetGraphic(Graphic.aif_window_stone_topl_corn);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int6, int7, 0, 0);
    ccSetPosition(0, 0, 2, 0);
    ccSetGraphic(Graphic.aif_window_stone_topl_corn);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int11, int12, 0, 0);
    ccSetPosition(0, 0, 0, 2);
    ccSetGraphic(Graphic.aif_window_stone_bot_corn);
}
