/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_559

function cs2_559(intArg0: component): void {
    let int1: number = ifGetWidth(intArg0);
    let int2: number = ifGetHeight(intArg0);
    let int3: number = int1 - 2;
    let int4: number = int2 - 2;
    let int5: number = ifGetNextSubId(intArg0);

    cs2_98(intArg0, int5, Graphic.graphic_1076, 0, 0, int1, 2);
    cs2_98(intArg0, int5 + 1, Graphic.graphic_1076, 1, int4, int1 - 1, 2);
    cs2_98(intArg0, int5 + 2, Graphic.graphic_1077, 0, 1, 2, int2 - 3);
    cs2_98(intArg0, int5 + 3, Graphic.graphic_1077, int3, 1, 2, int2 - 2);
}
