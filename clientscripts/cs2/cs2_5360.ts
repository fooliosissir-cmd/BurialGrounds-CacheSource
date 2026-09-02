/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5360

function cs2_5360(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: boolean): void {
    if (intArg4 == true) {
        if (ccFind(intArg0, intArg1) == 1) {
            ccSetGraphic(Graphic.aif_item_button_green_1_3);
        }
        if (ccFind(intArg0, intArg2) == 1) {
            ccSetGraphic(Graphic.aif_item_button_green_1_4);
        }
        if (ccFind(intArg0, intArg3) == 1) {
            ccSetGraphic(Graphic.aif_item_button_green_1_5);
        }
    } else {
        if (ccFind(intArg0, intArg1) == 1) {
            ccSetGraphic(Graphic.aif_item_button_green_1_0);
        }
        if (ccFind(intArg0, intArg2) == 1) {
            ccSetGraphic(Graphic.aif_item_button_green_1_1);
        }
        if (ccFind(intArg0, intArg3) == 1) {
            ccSetGraphic(Graphic.aif_item_button_green_1_2);
        }
    }
}
