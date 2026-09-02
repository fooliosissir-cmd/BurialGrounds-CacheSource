/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2628

function cs2_2628(): void {
    if (varc_906 == 0) {
        ifSetGraphic(Graphic.graphic_1868, Component.interface_859.component_859_25);
        ifSetText("Idle", Component.interface_859.component_859_11);
    } else if (varc_906 == 2) {
        ifSetGraphic(Graphic.graphic_1867, Component.interface_859.component_859_25);
        switch (varc_907) {
            case 0:
                varc_906 = 0;
                ifSetGraphic(Graphic.graphic_1868, Component.interface_859.component_859_25);
                ifSetText("Idle", Component.interface_859.component_859_11);
                break;
            case 1:
            case 2:
                ifSetText("Exploring", Component.interface_859.component_859_11);
                break;
            case 3:
            case 4:
                ifSetText("Attacking wall", Component.interface_859.component_859_11);
                break;
            case 5:
            case 6:
            case 7:
                ifSetText("Rescuing TzHaar", Component.interface_859.component_859_11);
                break;
            case 8:
            case 9:
                ifSetText("Collecting gold", Component.interface_859.component_859_11);
                break;
            case 10:
            case 11:
            case 12:
                ifSetText("Stealing TzHaar", Component.interface_859.component_859_11);
                break;
            case 13:
            case 14:
            case 15:
                ifSetText("Collecting parts", Component.interface_859.component_859_11);
                break;
            case 16:
            case 17:
            case 18:
                ifSetText("Collecting Rocks", Component.interface_859.component_859_11);
                break;
            case 19:
            case 20:
                ifSetText("Attacking catapult", Component.interface_859.component_859_11);
                break;
            case 21:
                ifSetText("Retaliating", Component.interface_859.component_859_11);
                break;
            case 22:
                ifSetText("Moving to destination", Component.interface_859.component_859_11);
                break;
            case 23:
                ifSetText("Attacking", Component.interface_859.component_859_11);
                break;
            default:
                ifSetText("Busy", Component.interface_859.component_859_11);
                break;
        }
    }
}
