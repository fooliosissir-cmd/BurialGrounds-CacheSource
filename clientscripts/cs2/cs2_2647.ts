/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2647

function cs2_2647(intArg0: component): void {
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 0);
    ccSetSize(0, 32, 1, 0);
    ccSetGraphic(Graphic.graphic_1076);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 2);
    ccSetSize(0, 32, 1, 0);
    ccSetGraphic(Graphic.graphic_1076);
    ccSettiling(true);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 1);
    ccSetSize(32, 2, 0, 1);
    ccSetGraphic(Graphic.graphic_1077);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 1);
    ccSetSize(32, 2, 0, 1);
    ccSetGraphic(Graphic.graphic_1077);
    ccSettiling(true);
    ccSethflip(true);
}
