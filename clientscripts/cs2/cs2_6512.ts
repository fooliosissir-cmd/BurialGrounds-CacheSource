/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6512

function cs2_6512(intArg0: number): void {
    let int1: component = -1;

    if (intArg0 == 0) {
        int1 = Component.interface_1302.component_1302_24;
    }

    if (intArg0 == 1) {
        int1 = Component.interface_1302.component_1302_30;
    }

    if (intArg0 == 2) {
        int1 = Component.interface_1302.component_1302_21;
    }
    let int2: graphic = -1;

    switch (ifGetGraphic(int1)) {
        case Graphic.graphic_11645:
        case Graphic.graphic_11646:
        case Graphic.graphic_11647:
            int2 = Graphic.graphic_11646;
            break;
        case Graphic.graphic_11648:
        case Graphic.graphic_11649:
        case Graphic.graphic_11650:
            int2 = Graphic.graphic_11649;
            break;
        case Graphic.graphic_11651:
        case Graphic.graphic_11652:
        case Graphic.graphic_11653:
            int2 = Graphic.graphic_11652;
            break;
    }
    ifSetGraphic(int2, int1);
}
