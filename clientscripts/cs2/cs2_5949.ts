/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5949

function cs2_5949(intArg0: number): graphic {
    let int1: graphic = -1;
    let int2: number = -1;
    let int3: graphic = -1;
    let int4: graphic = -1;

    switch (mapLang()) {
        case 0:
            int1 = Graphic.graphic_9943;
            int2 = 9939;
            int3 = Graphic.graphic_9935;
            int4 = Graphic.graphic_9931;
            break;
        case 1:
            int1 = Graphic.graphic_9940;
            int2 = 9936;
            int3 = Graphic.graphic_9932;
            int4 = Graphic.graphic_9928;
            break;
        case 2:
            int1 = Graphic.graphic_9942;
            int2 = 9938;
            int3 = Graphic.graphic_9934;
            int4 = Graphic.graphic_9930;
            break;
        case 3:
            int1 = Graphic.graphic_9941;
            int2 = 9937;
            int3 = Graphic.graphic_9933;
            int4 = Graphic.graphic_9929;
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
