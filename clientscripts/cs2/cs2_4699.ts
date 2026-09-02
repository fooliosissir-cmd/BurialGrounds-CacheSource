/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4699

function cs2_4699(intArg0: component, intArg1: component, intArg2: component, strArg0: string, strArg1: string): number {
    let int3: number = max(stringWidth(strArg0, Graphic.verdana_11pt_regular) + 30, 75);
    let int4: number = max(stringWidth(strArg1, Graphic.verdana_11pt_regular) + 30, 120);

    ifSetSize(int3 + int4, ifGetHeight(intArg0), 0, 0, intArg0);
    ccDeleteAll(intArg1);
    ifSetSize(int3, 27, 0, 0, intArg1);
    ccCreate(intArg1, 5, ifGetNextSubId(intArg1));
    ccSetSize(6, 23, 1, 0);
    ccSetPosition(0, 0, 1, 1);
    ccSettiling(true);
    ccSetGraphic(Graphic.aif_info_display_brown_1_1);
    ccCreate(intArg1, 5, ifGetNextSubId(intArg1));
    ccSetSize(8, 23, 0, 0);
    ccSetPosition(0, 0, 0, 1);
    ccSetGraphic(Graphic.aif_info_display_brown_1_0);
    ccCreate(intArg1, 4, ifGetNextSubId(intArg1));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetColour(colour(0xEBE0BC));
    ccSetTextAlign(1, 1, 0);
    ccSetTextShadow(false);
    ccSetText(strArg0);
    ccDeleteAll(intArg2);
    ifSetSize(int4, 27, 0, 0, intArg2);
    ifSetPosition(int3 - 4, 0, 0, 1, intArg2);
    ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
    ccSetSize(10, 27, 1, 0);
    ccSetPosition(0, 0, 1, 1);
    ccSettiling(true);
    ccSetGraphic(Graphic.aif_info_display_blue_1_1);
    ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
    ccSetSize(11, 27, 0, 0);
    ccSetPosition(0, 0, 0, 1);
    ccSetGraphic(Graphic.aif_info_display_blue_1_0);
    ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
    ccSetSize(11, 27, 0, 0);
    ccSetPosition(0, 0, 2, 1);
    ccSetGraphic(Graphic.aif_info_display_blue_1_3);
    ccCreate(intArg2, 4, ifGetNextSubId(intArg2));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetColour(colour(0xEBE0BC));
    ccSetTextAlign(1, 1, 0);
    ccSetTextShadow(false);
    ccSetText(strArg1);
    return int3 + int4;
}
