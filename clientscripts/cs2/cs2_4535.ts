/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4535

function cs2_4535(intArg0: component): void {
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 5, 1, 0);
    ccSetPosition(0, 0, 1, 0);
    ccSetGraphic(Graphic.aif_drop_down_frame_1_0);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 5, 1, 0);
    ccSetPosition(0, 0, 1, 2);
    ccSetGraphic(Graphic.aif_drop_down_frame_1_4);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(5, 10, 0, 1);
    ccSetPosition(0, 0, 0, 1);
    ccSetGraphic(Graphic.aif_drop_down_frame_1_2);
    ccSettiling(true);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(5, 10, 0, 1);
    ccSetPosition(0, 0, 2, 1);
    ccSetGraphic(Graphic.aif_drop_down_frame_1_2);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(5, 5, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetGraphic(Graphic.aif_drop_down_frame_1_1);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(5, 5, 0, 0);
    ccSetPosition(0, 0, 2, 0);
    ccSetGraphic(Graphic.aif_drop_down_frame_1_1);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(5, 5, 0, 0);
    ccSetPosition(0, 0, 0, 2);
    ccSetGraphic(Graphic.aif_drop_down_frame_1_1);
    ccSethflip(true);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(5, 5, 0, 0);
    ccSetPosition(0, 0, 2, 2);
    ccSetGraphic(Graphic.aif_drop_down_frame_1_1);
    ccSetvflip(true);
}
