/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,rcsiphonxp_item_shop_background]

function rcsiphonxp_item_shop_background(intArg0: number, intArg1: component): number {
    ccCreate(intArg1, 5, intArg0);
    ccSetGraphic(Graphic.aif_runecrafting_bkgrd_graphic2_0);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(277, 125, 0, 0);
    intArg0 = intArg0 + 1;
    ccCreate(intArg1, 5, intArg0);
    ccSetGraphic(Graphic.aif_runecrafting_bkgrd_graphic2_1);
    ccSetPosition(0, 0, 2, 0);
    ccSetSize(278, 125, 0, 0);
    intArg0 = intArg0 + 1;
    ccCreate(intArg1, 5, intArg0);
    ccSetGraphic(Graphic.aif_runecrafting_bkgrd_graphic2_2);
    ccSetPosition(0, 125, 0, 0);
    ccSetSize(277, 125, 0, 0);
    intArg0 = intArg0 + 1;
    ccCreate(intArg1, 5, intArg0);
    ccSetGraphic(Graphic.aif_runecrafting_bkgrd_graphic2_3);
    ccSetPosition(0, 125, 2, 0);
    ccSetSize(278, 125, 0, 0);
    intArg0 = intArg0 + 1;
    ccCreate(intArg1, 5, intArg0);
    ccSetGraphic(Graphic.aif_runecrafting_bkgrd_graphic2_4);
    ccSetPosition(0, 250, 0, 0);
    ccSetSize(277, 125, 0, 0);
    intArg0 = intArg0 + 1;
    ccCreate(intArg1, 5, intArg0);
    ccSetGraphic(Graphic.aif_runecrafting_bkgrd_graphic2_5);
    ccSetPosition(0, 250, 2, 0);
    ccSetSize(278, 125, 0, 0);
    intArg0 = intArg0 + 1;
    return intArg0;
}
