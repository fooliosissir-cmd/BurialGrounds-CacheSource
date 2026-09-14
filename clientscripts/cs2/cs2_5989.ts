/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5989

function cs2_5989(intArg0: component, intArg1: number): void {
    if (intArg0 == -1) {
        return;
    }
    ccDeleteAll(intArg0);
    let int2: number = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(0, 0, 1, 1);
    ccSetGraphic(gameframe_skin_graphic(Graphic.window_texture_2));
    ccSettiling(true);
    int2 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(10, 10, 0, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_1);
    ccSettiling(true);
    ccSethflip(true);
    int2 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(0, 0, 2, 0);
    ccSetSize(10, 10, 0, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_1);
    ccSettiling(true);
    int2 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(10, 10, 0, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_1);
    ccSettiling(true);
    ccSethflip(true);
    ccSetvflip(true);
    int2 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(0, 0, 2, 2);
    ccSetSize(10, 10, 0, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_1);
    ccSettiling(true);
    ccSetvflip(true);
    int2 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(0, 0, 1, 2);
    ccSetSize(20, 10, 1, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_0);
    ccSettiling(true);
    ccSetvflip(true);
    ccSethflip(true);
    int2 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(0, 0, 1, 0);
    ccSetSize(20, 10, 1, 0);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_0);
    ccSettiling(true);
    int2 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(0, 0, 2, 1);
    ccSetSize(10, 20, 0, 1);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_2);
    ccSettiling(true);
    int2 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(0, 0, 0, 1);
    ccSetSize(10, 20, 0, 1);
    ccSetGraphic(Graphic.aif_overlay_frame_gold_corner_2_2);
    ccSettiling(true);
    ccSethflip(true);
    int2 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(2, 2, 0, 0);
    ccSetSize(4, 4, 1, 1);
    ccSetOnMouseOver(hook(cc_settrans, "Iii", [event_com, int2, 128]));
    ccSetOnMouseLeave(hook(cc_settrans, "Iii", [event_com, int2, 255]));
    ccSetTrans(255);
    let int3: graphic = -1;

    switch (intArg1) {
        case 0:
            int3 = Graphic.aif_clans_interface_navigation_tab_icons_0;
            break;
        case 1:
            int3 = Graphic.aif_clans_interface_navigation_tab_icons_1;
            break;
        case 2:
            int3 = Graphic.aif_clans_interface_navigation_tab_icons_2;
            break;
        case 3:
            int3 = Graphic.aif_clans_interface_navigation_tab_icons_3;
            break;
        default:
            return;
    }
    int2 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(30, 20, 0, 0);
    ccSetGraphic(int3);
    ccSettiling(true);
}
