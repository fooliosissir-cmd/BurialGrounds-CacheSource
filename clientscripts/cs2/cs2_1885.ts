/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1885

function cs2_1885(intArg0: number, intArg1: number, intArg2: obj, strArg0: string, intArg3: component): void {
    ccDeleteAll(intArg3);
    ifSetSize(intArg1, 64, 0, 0, intArg3);
    ifSetPosition(intArg0, 0, 0, 1, intArg3);
    cs2_333(intArg3, colour(0x5D554A), colour(0x2E261B), 2, 4);
    ccCreate(intArg3, 5, ifGetNextSubId(intArg3));
    ccSetSize(14, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetGraphic(Graphic.graphic_3872);
    ccSettiling(true);
    ccCreate(intArg3, 5, ifGetNextSubId(intArg3));
    ccSetSize(8, 0, 0, 1);
    ccSetPosition(0, 0, 0, 1);
    ccSetGraphic(Graphic.graphic_3871);
    ccCreate(intArg3, 5, ifGetNextSubId(intArg3));
    ccSetSize(8, 0, 0, 1);
    ccSetPosition(0, 0, 2, 1);
    ccSetGraphic(Graphic.graphic_3873);
    ccCreate(intArg3, 5, ifGetNextSubId(intArg3));
    ccSetSize(36, 32, 0, 0);
    ccSetPosition(0, 4, 1, 0);
    ccSetGraphicShadow(3153952);
    ccSetOutline(1);
    ccSetObjectNonum(intArg2, 1);
    ccCreate(intArg3, 4, ifGetNextSubId(intArg3));
    ccSetSize(4 * 2, 4 + 32 - 3, 1, 1);
    ccSetPosition(0, 0, 1, 2);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(1, 1, 0);
    ccSetColour(colour(0xFF981F));
    ccSetTextShadow(true);
    ccSetText(strArg0);
}
