/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1637

function cs2_1637(intArg0: component, intArg1: number, strArg0: string, intArg2: number): [number, number] {
    if (compare(strArg0, "") == 0) {
        return [intArg1, intArg2];
    }
    ccCreate(intArg0, 4, intArg1);
    ccSetText(strArg0);
    ccSetTextFont(Graphic.p12_full);
    let int3: number = paraheight(strArg0, 430, Graphic.p12_full);

    if (int3 < 1) {
        int3 = 1;
    }
    ccSetSize(430, 14 * int3, 0, 0);
    ccSetPosition(3, intArg2 * 15 + 4, 0, 0);
    ccSetTextAlign(1, 0, 14);
    ccSetColour(colour(0xAAAAAA));
    ccSetTextShadow(true);
    return [intArg1 + 1, intArg2 + int3];
}
