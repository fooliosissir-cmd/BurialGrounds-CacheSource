/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_584

function cs2_584(intArg0: component, strArg0: string): void {
    let int1: number = ifGetWidth(intArg0);
    let int2: number = ifGetHeight(intArg0);
    let int3: number = int1 - 32;
    let int4: number = int2 - 32;
    let int5: number = int1 - 64;
    let int6: number = int2 - 64;

    if (int5 < 0) {
        int5 = 0;
    }

    if (int6 < 0) {
        int6 = 0;
    }
    let int7: number = ifGetNextSubId(intArg0);
    cs2_98(intArg0, int7, Graphic.graphic_856, 0, 0, 32, 32);
    cs2_98(intArg0, int7 + 1, Graphic.graphic_857, int3, 0, 32, 32);
    cs2_98(intArg0, int7 + 2, Graphic.graphic_858, 0, int4, 32, 32);
    cs2_98(intArg0, int7 + 3, Graphic.graphic_859, int3, int4, 32, 32);
    cs2_98(intArg0, int7 + 4, Graphic.graphic_1121, 32, 0, int5, 3);
    cs2_98(intArg0, int7 + 5, Graphic.graphic_1121, 32, int2 - 3, int5, 3);
    cs2_98(intArg0, int7 + 6, Graphic.graphic_1122, 0, 32, 3, int6);
    cs2_98(intArg0, int7 + 7, Graphic.graphic_1122, int1 - 3, 32, 3, int6);
    cs2_98(intArg0, int7 + 8, Graphic.graphic_1121, 2, 22, int1 - 5, 3);
    ccCreate(intArg0, 4, int7 + 9);
    ccSetPosition(3, 3, 0, 0);
    ccSetSize(int1 - 6, 15, 0, 0);
    ccSetText(strArg0);
    ccSetTextFont(Graphic.b12_full);
    ccSetTextShadow(true);
    ccSetColour(colour(0xCC9900));
    ccSetTextAlign(1, 1, 0);
}
