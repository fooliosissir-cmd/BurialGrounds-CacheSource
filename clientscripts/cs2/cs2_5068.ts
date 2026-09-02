/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5068

function cs2_5068(strArg0: string, intArg0: number): number {
    ccCreate(Component.interface_1111.component_1111_27, 4, ifGetNextSubId(Component.interface_1111.component_1111_27));
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0xDFCFBF));
    let int1: number = paraheight(strArg0, ifGetWidth(Component.interface_1111.component_1111_27), Graphic.p11_full) * 10 + 2;
    ccSetSize(0, int1, 1, 0);
    ccSetText(strArg0);
    ccSetPosition(0, intArg0, 1, 0);
    return int1;
}
