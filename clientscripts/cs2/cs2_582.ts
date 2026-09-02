/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_582

function cs2_582(intArg0: component): void {
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
    cs2_98(intArg0, int7, Graphic.graphic_1136, 7, 7, int1 - 14, int2 - 14);
    cs2_98(intArg0, int7 + 1, Graphic.graphic_958, 0, 0, 32, 32);
    cs2_98(intArg0, int7 + 2, Graphic.graphic_959, int3, 0, 32, 32);
    cs2_98(intArg0, int7 + 3, Graphic.graphic_960, 0, int4, 32, 32);
    cs2_98(intArg0, int7 + 4, Graphic.graphic_961, int3, int4, 32, 32);
    cs2_98(intArg0, int7 + 5, Graphic.graphic_954, 32, 0, int5, 32);
    cs2_98(intArg0, int7 + 6, Graphic.graphic_955, 0, 32, 32, int6);
    cs2_98(intArg0, int7 + 7, Graphic.graphic_956, 32, int4, int5, 32);
    cs2_98(intArg0, int7 + 8, Graphic.graphic_957, int3, 32, 32, int6);
}
