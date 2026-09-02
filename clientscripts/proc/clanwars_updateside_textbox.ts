/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_updateside_textbox]

function clanwars_updateside_textbox(strArg0: string, intArg0: number, intArg1: number, intArg2: number, intArg3: number): [number, number] {
    ccCreate(Component.clanwars_setup_side.contents, 4, intArg1);
    ccSetPosition(0, intArg0, 0, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetTextShadow(true);
    ccSetSize(intArg2, paraheight(strArg0, intArg2, Graphic.p12_full) * 12 + 5, 0, 0);
    ccSetText(strArg0);

    if (intArg3 == 1) {
        ccSetTextAlign(1, 0, 0);
        ccSetColour(colour(0xFF981F));
        return [intArg0 + ccGetHeight() + 12, intArg1 + 1];
    }
    ccSetTextAlign(0, 0, 0);
    ccSetColour(colour(0xC8AA64));
    return [intArg0 + ccGetHeight() + 5, intArg1 + 1];
}
