/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_975

function cs2_975(intArg0: number, intArg1: number): number {
    ccSetPosition(50, intArg0, 0, 0);
    ccSetTextAlign(0, 0, 16);
    ccSetColour(colour(0x46320A));
    ccSetTextFont(Graphic.p12_full);
    ccSetTextShadow(false);

    if (intArg1 * 16 < 32) {
        intArg0 = intArg0 + 32;
    } else {
        intArg0 = intArg0 + intArg1 * 16 + 5;
    }
    return intArg0;
}
