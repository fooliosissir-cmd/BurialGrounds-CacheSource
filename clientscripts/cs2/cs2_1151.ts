/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1151

function cs2_1151(intArg0: component): void {
    ccDeleteAll(intArg0);
    ccCreate(intArg0, 3, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(4, 4, 1, 1);
    ccSetColour(colour(0x53483A));
    ccSetfill(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 0);
    ccSetSize(4, 4, 1, 0);
    ccSetGraphic(Graphic.graphic_2231);
    ccSettiling(false);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 2);
    ccSetSize(4, 4, 1, 0);
    ccSetGraphic(Graphic.graphic_2232);
    ccSettiling(false);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 1);
    ccSetSize(3, 4, 0, 1);
    ccSetGraphic(Graphic.graphic_2235);
    ccSettiling(false);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 1);
    ccSetSize(3, 4, 0, 1);
    ccSetGraphic(Graphic.graphic_2236);
    ccSettiling(false);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(9, 9, 0, 0);
    ccSetGraphic(Graphic.graphic_2239);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 0);
    ccSetSize(9, 9, 0, 0);
    ccSetGraphic(Graphic.graphic_2239);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(9, 9, 0, 0);
    ccSetGraphic(Graphic.graphic_2240);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 2);
    ccSetSize(9, 9, 0, 0);
    ccSetGraphic(Graphic.graphic_2240);
    ccSethflip(true);
}
