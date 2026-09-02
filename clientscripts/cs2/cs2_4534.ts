/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4534

function cs2_4534(intArg0: component): void {
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 10, 1, 0);
    ccSetPosition(0, 0, 1, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_0);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 10, 1, 0);
    ccSetPosition(0, 0, 1, 2);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_0);
    ccSettiling(true);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 10, 0, 1);
    ccSetPosition(0, 0, 0, 1);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_2);
    ccSettiling(true);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 10, 0, 1);
    ccSetPosition(0, 0, 2, 1);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_2);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 10, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_1);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 10, 0, 0);
    ccSetPosition(0, 0, 2, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_1);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 10, 0, 0);
    ccSetPosition(0, 0, 0, 2);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_1);
    ccSethflip(true);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 10, 0, 0);
    ccSetPosition(0, 0, 2, 2);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_1);
    ccSetvflip(true);
}
