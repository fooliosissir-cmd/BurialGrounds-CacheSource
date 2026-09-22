/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,instance_system_portrait_frame]

function instance_system_portrait_frame(): void {
    let int0: component = Component.instance_system.portrait_frame;
    ccDeleteAll(int0);
    let int1: number = ifGetWidth(int0);
    let int2: number = ifGetHeight(int0);
    ccCreate(int0, 3, ifGetNextSubId(int0));
    ccSetSize(int1 - 10, int2 - 10, 0, 0);
    ccSetPosition(5, 5, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x221F1A));
    ccCreate(int0, 5, ifGetNextSubId(int0));
    ccSetSize(int1 - 38, 1, 0, 0);
    ccSetPosition(19, 4, 0, 0);
    ccSetGraphic(Graphic.gold_border_line);
    ccSettiling(true);
    ccCreate(int0, 5, ifGetNextSubId(int0));
    ccSetSize(int1 - 38, 1, 0, 0);
    ccSetPosition(19, int2 - 5, 0, 0);
    ccSetGraphic(Graphic.gold_border_line);
    ccSettiling(true);
    ccCreate(int0, 5, ifGetNextSubId(int0));
    ccSetSize(1, int2 - 38, 0, 0);
    ccSetPosition(4, 19, 0, 0);
    ccSetGraphic(Graphic.gold_border_line);
    ccSettiling(true);
    ccCreate(int0, 5, ifGetNextSubId(int0));
    ccSetSize(1, int2 - 38, 0, 0);
    ccSetPosition(int1 - 5, 19, 0, 0);
    ccSetGraphic(Graphic.gold_border_line);
    ccSettiling(true);
    ccCreate(int0, 5, ifGetNextSubId(int0));
    ccSetSize(19, 19, 0, 0);
    ccSetPosition(int1 - 19, 0, 0, 0);
    ccSetGraphic(Graphic.gold_border_corner);
    ccCreate(int0, 5, ifGetNextSubId(int0));
    ccSetSize(19, 19, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetGraphic(Graphic.gold_border_corner);
    ccSethflip(true);
    ccCreate(int0, 5, ifGetNextSubId(int0));
    ccSetSize(19, 19, 0, 0);
    ccSetPosition(int1 - 19, int2 - 19, 0, 0);
    ccSetGraphic(Graphic.gold_border_corner);
    ccSetvflip(true);
    ccCreate(int0, 5, ifGetNextSubId(int0));
    ccSetSize(19, 19, 0, 0);
    ccSetPosition(0, int2 - 19, 0, 0);
    ccSetGraphic(Graphic.gold_border_corner);
    ccSethflip(true);
    ccSetvflip(true);
}
