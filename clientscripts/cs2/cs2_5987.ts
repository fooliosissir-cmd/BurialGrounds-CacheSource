/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5987

function cs2_5987(intArg0: component, intArg1: number): void {
    if (intArg0 == -1) {
        return;
    }
    ccDeleteAll(intArg0);
    let int2: number = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(22, 27, 1, 0);
    ccSetGraphic(Graphic.aif_info_display_blue_1_1);
    ccSettiling(true);
    ccSethflip(true);
    int2 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(0, 0, 0, 1);
    ccSetSize(11, 27, 0, 0);
    ccSetGraphic(Graphic.aif_info_display_blue_1_0);
    ccSettiling(true);
    int2 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(0, 0, 2, 1);
    ccSetSize(11, 27, 0, 0);
    ccSetGraphic(Graphic.aif_info_display_blue_1_0);
    ccSettiling(true);
    ccSethflip(true);
    int2 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(21, 0, 0, 1);
    ccSetSize(11, 27, 0, 0);
    ccSetGraphic(Graphic.aif_info_display_blue_1_2);
    ccSettiling(true);
    ccSethflip(true);
    let int3: graphic = -1;

    switch (intArg1) {
        case 1:
            int3 = Graphic.aif_clan_resource_icons_5;
            break;
        case 2:
            int3 = Graphic.aif_clan_resource_icons_4;
            break;
        case 3:
            int3 = Graphic.aif_clan_resource_icons_8;
            break;
        case 4:
            int3 = Graphic.aif_clan_resource_icons_2;
            break;
        case 5:
            int3 = Graphic.aif_clan_resource_icons_1;
            break;
        case 6:
            int3 = Graphic.aif_clan_resource_icons_3;
            break;
        case 7:
            int3 = Graphic.aif_clan_resource_icons_0;
            break;
        case 9:
            int3 = Graphic.aif_clan_resource_icons_6;
            break;
        case 8:
            int3 = Graphic.aif_clan_resource_icons_7;
            break;
        case 10:
            int3 = Graphic.aif_clan_resource_icons_9;
            break;
        default:
            return;
    }
    int2 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int2);
    ccSetPosition(5, 0, 0, 1);
    ccSetSize(20, 20, 0, 0);
    ccSetGraphic(int3);
    ccSettiling(true);
}
