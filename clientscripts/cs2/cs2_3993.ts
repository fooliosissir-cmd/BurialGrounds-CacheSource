/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3993

function cs2_3993(intArg0: component): void {
    if (intArg0 == -1) {
        return;
    }
    ccDeleteAll(intArg0);
    let int1: number = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 3, int1);
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(0, 0, 1, 1);
    ccSetfill(true);
    ccSetColour(colour(0x0E0E0E));
    int1 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int1);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(10, 10, 0, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_1_1);
    ccSethflip(true);
    ccSettiling(true);
    int1 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int1);
    ccSetPosition(0, 0, 2, 0);
    ccSetSize(10, 10, 0, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_1_1);
    ccSettiling(true);
    int1 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int1);
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(10, 10, 0, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_1_1);
    ccSethflip(true);
    ccSetvflip(true);
    ccSettiling(true);
    int1 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int1);
    ccSetPosition(0, 0, 2, 2);
    ccSetSize(10, 10, 0, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_1_1);
    ccSetvflip(true);
    ccSettiling(true);
    int1 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int1);
    ccSetPosition(0, 0, 1, 2);
    ccSetSize(20, 10, 1, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_1_0);
    ccSetvflip(true);
    ccSethflip(true);
    int1 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int1);
    ccSetPosition(0, 0, 1, 0);
    ccSetSize(20, 10, 1, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_1_0);
    ccSettiling(true);
    int1 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int1);
    ccSetPosition(0, 0, 2, 1);
    ccSetSize(10, 20, 0, 1);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_1_2);
    ccSettiling(true);
    int1 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int1);
    ccSetPosition(0, 0, 0, 1);
    ccSetSize(10, 20, 0, 1);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_1_2);
    ccSettiling(true);
    ccSethflip(true);
}
