/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5784

function cs2_5784(intArg0: component): void {
    if (intArg0 == -1) {
        return;
    }
    let int1: number = 4;
    let int2: number = 4;
    let int3: number = 4;
    let int4: number = 4;
    let int5: number = 29;
    let int6: number = 8;
    let int7: number = 56;
    let int8: number = 7;
    let int9: number = 120;
    let int10: number = 64;
    let int11: number = 53;
    let int12: number = 8;
    let int13: number = 68;
    let int14: number = 43;

    if (ifFind(intArg0) == 1) {
        ccSetPosition(0, 0, 1, 1);
        ccSetSize(int1 * 2, int2 * 2, 1, 1);
    }
    ccDeleteAll(intArg0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int12 * 2, int4, 1, 0);
    ccSetPosition(0, int5, 1, 0);
    ccSetGraphic(Graphic.aif_innerwin_dropshadow_1);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int12 * 2, int4, 1, 0);
    ccSetPosition(0, int8, 1, 2);
    ccSetGraphic(Graphic.aif_innerwin_dropshadow_1);
    ccSettiling(true);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int3, int5 + int8, 0, 1);
    ccSetPosition(int12, int5, 0, 0);
    ccSetGraphic(Graphic.aif_innerwin_dropshadow_2);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int3, int5 + int8, 0, 1);
    ccSetPosition(int12, int5, 2, 0);
    ccSetGraphic(Graphic.aif_innerwin_dropshadow_2);
    ccSettiling(true);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize((int6 + int7) * 2, int5, 1, 0);
    ccSetPosition(0, 0, 1, 0);
    ccSetGraphic(Graphic.graphic_9638);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int7, int5, 0, 0);
    ccSetPosition(int12, 0, 0, 0);
    ccSetGraphic(Graphic.graphic_9639);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int7, int5, 0, 0);
    ccSetPosition(int12, 0, 2, 0);
    ccSetGraphic(Graphic.graphic_9639);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize((int10 + int9) * 2, int8, 1, 0);
    ccSetPosition(0, 0, 1, 2);
    ccSetGraphic(Graphic.graphic_9630);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int9, int8, 0, 0);
    ccSetPosition(int10, 0, 0, 2);
    ccSetGraphic(Graphic.graphic_9629);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int9, int8, 0, 0);
    ccSetPosition(int10, 0, 2, 2);
    ccSetGraphic(Graphic.graphic_9631);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int12, int5 + int11 + int13 + int14, 0, 1);
    ccSetPosition(0, int5 + int13, 0, 0);
    ccSetGraphic(Graphic.graphic_9642);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int12, int13, 0, 0);
    ccSetPosition(0, int5, 0, 0);
    ccSetGraphic(Graphic.graphic_9637);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int12, int14, 0, 0);
    ccSetPosition(0, int11, 0, 2);
    ccSetGraphic(Graphic.graphic_9643);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int12, int5 + int11 + int13 + int14, 0, 1);
    ccSetPosition(0, int5 + int13, 2, 0);
    ccSetGraphic(Graphic.graphic_9642);
    ccSettiling(true);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int12, int13, 0, 0);
    ccSetPosition(0, int5, 2, 0);
    ccSetGraphic(Graphic.graphic_9637);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int12, int14, 0, 0);
    ccSetPosition(0, int11, 2, 2);
    ccSetGraphic(Graphic.graphic_9643);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int6, int5, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetGraphic(Graphic.graphic_9640);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int6, int5, 0, 0);
    ccSetPosition(0, 0, 2, 0);
    ccSetGraphic(Graphic.graphic_9640);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int10, int11, 0, 0);
    ccSetPosition(0, 0, 0, 2);
    ccSetGraphic(Graphic.graphic_9632);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int10, int11, 0, 0);
    ccSetPosition(0, 0, 2, 2);
    ccSetGraphic(Graphic.graphic_9632);
    ccSethflip(true);
}
