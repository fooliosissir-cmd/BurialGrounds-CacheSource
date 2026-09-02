/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4530

function cs2_4530(intArg0: component): void {
    let int1: number = 4;
    let int2: number = 4;

    ccDeleteAll(intArg0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int1 * 2, int2 * 2, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetGraphic(Graphic.window_texture_1);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int1 * 2, int2, 1, 0);
    ccSetPosition(0, 0, 1, 0);
    ccSetGraphic(Graphic.aif_innerwin_dropshadow_1);
    ccSettiling(true);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int1 * 2, int2, 1, 0);
    ccSetPosition(0, 0, 1, 2);
    ccSetGraphic(Graphic.aif_innerwin_dropshadow_1);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int1, int2 * 2, 0, 1);
    ccSetPosition(0, 0, 0, 1);
    ccSetGraphic(Graphic.aif_innerwin_dropshadow_2);
    ccSettiling(true);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int1, int2 * 2, 0, 1);
    ccSetPosition(0, 0, 2, 1);
    ccSetGraphic(Graphic.aif_innerwin_dropshadow_2);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int1, int2, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetGraphic(Graphic.aif_corner_dropshadow_1);
    ccSethflip(true);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int1, int2, 0, 0);
    ccSetPosition(0, 0, 2, 0);
    ccSetGraphic(Graphic.aif_corner_dropshadow_1);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int1, int2, 0, 0);
    ccSetPosition(0, 0, 0, 2);
    ccSetGraphic(Graphic.aif_corner_dropshadow_1);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(int1, int2, 0, 0);
    ccSetPosition(0, 0, 2, 2);
    ccSetGraphic(Graphic.aif_corner_dropshadow_1);
}
