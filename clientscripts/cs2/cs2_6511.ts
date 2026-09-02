/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6511

function cs2_6511(intArg0: number): void {
    let int1: component = -1;

    if (intArg0 == 0) {
        int1 = Component.interface_1302.component_1302_22;
    } else if (intArg0 == 1) {
        int1 = Component.interface_1302.component_1302_28;
    } else if (intArg0 == 2) {
        int1 = Component.interface_1302.component_1302_14;
    }
    let int2: graphic = -1;

    switch (ifGetGraphic(int1)) {
        case Graphic.graphic_11642:
            int2 = Graphic.graphic_11644;
            break;
        case Graphic.graphic_11630:
            int2 = Graphic.graphic_11632;
            break;
        case Graphic.graphic_11633:
            int2 = Graphic.graphic_11635;
            break;
        case Graphic.graphic_11627:
            int2 = Graphic.graphic_11629;
            break;
        case Graphic.graphic_11636:
            int2 = Graphic.graphic_11638;
            break;
        case Graphic.graphic_11639:
            int2 = Graphic.graphic_11641;
            break;
        case Graphic.graphic_11643:
            int2 = Graphic.graphic_11644;
            break;
        case Graphic.graphic_11631:
            int2 = Graphic.graphic_11632;
            break;
        case Graphic.graphic_11634:
            int2 = Graphic.graphic_11635;
            break;
        case Graphic.graphic_11628:
            int2 = Graphic.graphic_11629;
            break;
        case Graphic.graphic_11637:
            int2 = Graphic.graphic_11638;
            break;
        case Graphic.graphic_11640:
            int2 = Graphic.graphic_11641;
            break;
        case Graphic.graphic_11644:
            int2 = Graphic.graphic_11644;
            break;
        case Graphic.graphic_11632:
            int2 = Graphic.graphic_11632;
            break;
        case Graphic.graphic_11635:
            int2 = Graphic.graphic_11635;
            break;
        case Graphic.graphic_11629:
            int2 = Graphic.graphic_11629;
            break;
        case Graphic.graphic_11638:
            int2 = Graphic.graphic_11638;
            break;
        case Graphic.graphic_11641:
            int2 = Graphic.graphic_11641;
            break;
    }
    ifSetGraphic(int2, int1);
}
