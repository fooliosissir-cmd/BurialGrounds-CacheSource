/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5860

function cs2_5860(intArg0: number): graphic {
    let int1: graphic = -1;
    let int2: number = -1;
    let int3: graphic = -1;
    let int4: graphic = -1;

    switch (mapLang()) {
        case 0:
            int1 = Graphic.graphic_9927;
            int2 = 9923;
            int3 = Graphic.graphic_9919;
            int4 = Graphic.graphic_9915;
            break;
        case 1:
            int1 = Graphic.graphic_9924;
            int2 = 9920;
            int3 = Graphic.graphic_9916;
            int4 = Graphic.graphic_9912;
            break;
        case 2:
            int1 = Graphic.graphic_9926;
            int2 = 9922;
            int3 = Graphic.graphic_9918;
            int4 = Graphic.graphic_9914;
            break;
        case 3:
            int1 = Graphic.graphic_9925;
            int2 = 9921;
            int3 = Graphic.graphic_9917;
            int4 = Graphic.graphic_9913;
            break;
    }

    switch (intArg0) {
        case 0:
            return int1;
        case 1:
            return int3;
        case 2:
            return int4;
    }
    return -1;
}
