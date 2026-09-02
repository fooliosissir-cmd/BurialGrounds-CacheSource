/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6491

function cs2_6491(intArg0: number, intArg1: component): number {
    ccCreate(intArg1, 3, intArg0);
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(0, 0, 1, 1);
    ccSetColour(colour(0x0B1114));
    ccSetfill(true);
    intArg0 = intArg0 + 1;
    ccCreate(intArg1, 5, intArg0);
    ccSetGraphic(Graphic.aif_corner_flourish_1);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(38, 38, 0, 0);
    ccSethflip(true);
    intArg0 = intArg0 + 1;
    ccCreate(intArg1, 5, intArg0);
    ccSetGraphic(Graphic.aif_corner_flourish_1);
    ccSetPosition(0, 0, 2, 0);
    ccSetSize(38, 38, 0, 0);
    intArg0 = intArg0 + 1;
    ccCreate(intArg1, 5, intArg0);
    ccSetGraphic(Graphic.aif_corner_flourish_1);
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(38, 38, 0, 0);
    ccSethflip(true);
    ccSetvflip(true);
    intArg0 = intArg0 + 1;
    ccCreate(intArg1, 5, intArg0);
    ccSetGraphic(Graphic.aif_corner_flourish_1);
    ccSetPosition(0, 0, 2, 2);
    ccSetSize(38, 38, 0, 0);
    ccSetvflip(true);
    intArg0 = intArg0 + 1;
    ccCreate(intArg1, 5, intArg0);
    ccSetGraphic(Graphic.aif_fill_flourish_1);
    ccSetPosition(38, 0, 0, 0);
    ccSetSize(74, 6, 1, 0);
    intArg0 = intArg0 + 1;
    ccCreate(intArg1, 5, intArg0);
    ccSetGraphic(Graphic.aif_fill_flourish_1);
    ccSetPosition(38, 0, 0, 2);
    ccSetSize(74, 6, 1, 0);
    ccSetvflip(true);
    intArg0 = intArg0 + 1;
    ccCreate(intArg1, 5, intArg0);
    ccSetGraphic(Graphic.aif_fill_flourish_2);
    ccSetPosition(0, 35, 2, 0);
    ccSetSize(7, 73, 0, 1);
    intArg0 = intArg0 + 1;
    ccCreate(intArg1, 5, intArg0);
    ccSetGraphic(Graphic.aif_fill_flourish_2);
    ccSetPosition(0, 35, 0, 0);
    ccSetSize(7, 73, 0, 1);
    ccSethflip(true);
    intArg0 = intArg0 + 1;
    return intArg0;
}
