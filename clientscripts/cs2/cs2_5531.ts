/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5531

function cs2_5531(intArg0: number, intArg1: number, intArg2: obj, intArg3: component): void {
    let int4: number = 0;

    ccDeleteAll(intArg3);
    ifSetSize(intArg1, 76, 0, 0, intArg3);
    ifSetPosition(intArg0, 0, 0, 1, intArg3);
    let int5: number = (76 - 64) / 2;
    int4 = int4 + cs2_333(intArg3, colour(0x5D554A), colour(0x2E261B), 4, 4);
    ccCreate(intArg3, 5, int4);
    ccSetSize(58, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetGraphic(Graphic.graphic_3875);
    ccSettiling(true);
    int4 = int4 + 1;
    ccCreate(intArg3, 5, int4);
    ccSetSize(30, 0, 0, 1);
    ccSetPosition(0, 0, 0, 1);
    ccSetGraphic(Graphic.graphic_3874);
    int4 = int4 + 1;
    ccCreate(intArg3, 5, int4);
    ccSetSize(30, 0, 0, 1);
    ccSetPosition(0, 0, 2, 1);
    ccSetGraphic(Graphic.graphic_3876);
    int4 = int4 + 1;
    ccCreate(intArg3, 5, int4);
    ccSetSize(36, 36, 0, 0);
    ccSetPosition(0, 4 + int5, 1, 0);
    ccSetGraphicShadow(3153952);
    ccSetOutline(1);
    ccSetObjectNonum(intArg2, 1);
    int4 = int4 + 1;
    ccCreate(intArg3, 4, int4);
    ccSetSize(4 * 2 + 70 - 56, 4 + int5 + 32 + int5 - 3, 1, 1);
    ccSetPosition(0, int5, 1, 2);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(1, 1, 0);
    ccSetColour(colour(0xFF981F));
    ccSetTextShadow(true);
    ccSetText(ocName(intArg2));
    int4 = int4 + 1;
}
