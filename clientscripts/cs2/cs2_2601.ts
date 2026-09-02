/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2601

function cs2_2601(strArg0: string, intArg0: number, intArg1: number, intArg2: component): number {
    ccCreate(intArg2, 4, ifGetNextSubId(intArg2));
    ccSetSize(211, 16, 0, 0);

    if (intArg0 == 1) {
        ccSetPosition(6, intArg1, 2, 0);
    } else {
        ccSetPosition(0, intArg1, 0, 0);
    }
    ccSetTextFont(Graphic.p12_full);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0xEBE0BC));
    ccSetTextShadow(true);
    ccSetText(strArg0);
    return ccGetId();
}
