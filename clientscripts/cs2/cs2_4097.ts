/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4097

function cs2_4097(intArg0: component, intArg1: number, strArg0: string): void {
    ccDeleteAll(intArg0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(8, intArg1, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetGraphic(Graphic.tooltip_body_1_0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(8, intArg1, 0, 0);
    ccSetPosition(0, 0, 2, 0);
    ccSetGraphic(Graphic.tooltip_body_1_2);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(16, intArg1, 1, 0);
    ccSetPosition(0, 0, 1, 0);
    ccSetGraphic(Graphic.tooltip_body_1_1);
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetSize(20, intArg1, 1, 0);
    ccSetPosition(0, 1, 1, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(1, 1, 0);
    ccSetColour(colour(0x000000));
    ccSetTextShadow(false);
    ccSetText(strArg0);
    ifSetHide(false, intArg0);
}
