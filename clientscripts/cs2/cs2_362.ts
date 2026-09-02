/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_362

function cs2_362(intArg0: component, intArg1: number, strArg0: string): void {
    ccDeleteAll(intArg0);
    ifSetSize(intArg1, ifGetHeight(intArg0), 0, 0, intArg0);
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetTextFont(Graphic.welcome_font_small);
    ccSetColour(colour(0x241B12));
    ccSetTextAlign(1, 1, 0);
    ccSetTextShadow(false);
    ccSetText(strArg0);
}
