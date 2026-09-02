/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6316

function cs2_6316(strArg0: string, intArg0: obj, intArg1: component, intArg2: component, intArg3: component, intArg4: component): void {
    ifSetPauseText(strArg0, intArg1);
    ccDeleteAll(intArg2);
    ccDeleteAll(intArg3);
    ccDeleteAll(intArg4);
    cs2_4513(intArg2, Struct.struct_1746);
    cs2_4513(intArg3, Struct.struct_1747);
    cs2_4513(intArg4, Struct.struct_1748);
    let int5: number = ifGetHeight(intArg1);
    ccDeleteAll(intArg1);
    ccCreate(intArg1, 6, 0);
    ccSetSize(int5 - 1, int5 - 1, 0, 0);
    ccSetPosition(1, 0, 0, 1);
    ccSetObject(intArg0, 1);
    ccCreate(intArg1, 4, 1);
    ccSetSize(int5, 0, 1, 1);
    ccSetPosition(0, 0, 2, 1);
    ccSetTextAlign(1, 1, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetColour(colour(0xCCCCCC));
    ccSetTextShadow(true);
    ccSetText(strArg0);
}
