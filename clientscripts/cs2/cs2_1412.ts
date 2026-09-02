/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1412

function cs2_1412(intArg0: component): void {
    ccDeleteAll(intArg0);
    let int1: number = ifGetWidth(intArg0);
    let int2: number = ifGetHeight(intArg0);
    let int3: number = int1 - 9;
    let int4: number = int2 - 9;
    let int5: number = int1 - 18;
    let int6: number = int2 - 18;
    cs2_98(intArg0, 0, Graphic.tradebacking, 0, 0, int1, int2);
    cs2_98(intArg0, 1, Graphic.graphic_1259, 0, 0, 9, 9);
    cs2_98(intArg0, 2, Graphic.graphic_1260, int3, 0, 9, 9);
    cs2_98(intArg0, 3, Graphic.graphic_1261, 0, int4, 9, 9);
    cs2_98(intArg0, 4, Graphic.graphic_1262, int3, int4, 9, 9);
    cs2_98(intArg0, 5, Graphic.graphic_1263, 0, 9, 9, int6);
    cs2_98(intArg0, 6, Graphic.graphic_1264, 9, 0, int5, 9);
    cs2_98(intArg0, 7, Graphic.graphic_1265, int3, 9, 9, int6);
    cs2_98(intArg0, 8, Graphic.graphic_1266, 9, int4, int5, 9);
}
