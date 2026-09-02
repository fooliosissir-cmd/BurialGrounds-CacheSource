/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4149

function cs2_4149(intArg0: component, strArg0: string, intArg1: boolean): void {
    if (intArg1 == true) {
        cs2_1361(intArg0);
    } else {
        cs2_915(intArg0);
    }
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetTextFont(Graphic.p12_full);
    ccSetTextShadow(true);
    ccSetTextAlign(1, 1, 0);

    if (intArg1 == true) {
        ccSetColour(colour(0xFFFFFF));
    } else {
        ccSetColour(colour(0xFF981F));
    }
    ccSetText(strArg0);
}
