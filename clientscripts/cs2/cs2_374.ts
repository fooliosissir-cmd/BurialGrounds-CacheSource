/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_374

function cs2_374(intArg0: component, strArg0: string, intArg1: number): void {
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(1, 1, 1, 1);
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetColour(colour(0xCDBE9A));
    ccSetTextShadow(false);
    ccSetTextAlign(1, 1, intArg1);
    ccSetText(strArg0);
}
