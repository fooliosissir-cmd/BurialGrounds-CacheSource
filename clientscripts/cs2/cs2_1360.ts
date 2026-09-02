/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1360

function cs2_1360(intArg0: component): void {
    ccDeleteAll(intArg0);
    let int1: number = ifGetWidth(intArg0);
    let int2: number = ifGetHeight(intArg0);
    let int3: number = int1 - 9;
    let int4: number = int2 - 9;
    let int5: number = int1 - 18;
    let int6: number = int2 - 18;
    ccCreate(intArg0, 3, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(int1, int2, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x30201C));
    ccSetTrans(200);
    cs2_98(intArg0, 1, Graphic.graphic_921, 0, 0, 9, 9);
    cs2_98(intArg0, 2, Graphic.graphic_922, int3, 0, 9, 9);
    cs2_98(intArg0, 3, Graphic.graphic_923, 0, int4, 9, 9);
    cs2_98(intArg0, 4, Graphic.graphic_924, int3, int4, 9, 9);
    cs2_98(intArg0, 5, Graphic.graphic_925, 0, 9, 9, int6);
    cs2_98(intArg0, 6, Graphic.graphic_926, 9, 0, int5, 9);
    cs2_98(intArg0, 7, Graphic.graphic_927, int3, 9, 9, int6);
    cs2_98(intArg0, 8, Graphic.graphic_928, 9, int4, int5, 9);
}
