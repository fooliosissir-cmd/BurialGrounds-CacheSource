/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_createtitle]

function worldmap_createtitle(intArg0: component, intArg1: number, intArg2: number): number {
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetText(enumOp(type_int, type_string, Enum.enum_1806, intArg1));
    ccSetPosition(0, intArg2, 0, 0);
    ccSetSize(0, 30, 1, 0);
    ccSetColour(colour(0xFF981F));
    ccSetTextFont(Graphic.b12_full);
    ccSetTextShadow(true);
    ccSetTextAlign(1, 1, 0);
    return intArg2 + ccGetHeight();
}
