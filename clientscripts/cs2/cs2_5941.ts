/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5941

function cs2_5941(intArg0: number): graphic {
    let int1: graphic = -1;
    let int2: number = cs2_5939(intArg0);

    switch (int2) {
        case 0:
            int1 = Graphic.graphic_9868;
            break;
        case 1:
            int1 = Graphic.graphic_9869;
            break;
        case 2:
            int1 = Graphic.graphic_9870;
            break;
        case 3:
            int1 = Graphic.graphic_9871;
            break;
    }
    return int1;
}
