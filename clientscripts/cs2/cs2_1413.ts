/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1413

function cs2_1413(intArg0: component): void {
    ccDeleteAll(intArg0);
    let int1: number = ifGetWidth(intArg0);
    let int2: number = ifGetHeight(intArg0);
    let int3: number = int1 - 9;
    let int4: number = int2 - 9;
    let int5: number = int1 - 18;
    let int6: number = int2 - 18;
    cs2_98(intArg0, 0, Graphic.graphic_897, 0, 0, int1, int2);
    cs2_98(intArg0, 1, Graphic.graphic_1267, 0, 0, 9, 9);
    cs2_98(intArg0, 2, Graphic.graphic_1268, int3, 0, 9, 9);
    cs2_98(intArg0, 3, Graphic.graphic_1269, 0, int4, 9, 9);
    cs2_98(intArg0, 4, Graphic.graphic_1270, int3, int4, 9, 9);
    cs2_98(intArg0, 5, Graphic.graphic_1271, 0, 9, 9, int6);
    cs2_98(intArg0, 6, Graphic.graphic_1272, 9, 0, int5, 9);
    cs2_98(intArg0, 7, Graphic.graphic_1273, int3, 9, 9, int6);
    cs2_98(intArg0, 8, Graphic.graphic_1274, 9, int4, int5, 9);
}
