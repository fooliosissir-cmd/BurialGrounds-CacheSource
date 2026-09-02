/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5058

function cs2_5058(intArg0: component, intArg1: boolean): void {
    if (intArg1 == true) {
        if (ccFind(intArg0, 0) == 1) {
            ccSetGraphic(Graphic.aif_accordion_button_2_4);
        }
        if (ccFind(intArg0, 1) == 1) {
            ccSetGraphic(Graphic.aif_accordion_button_2_3);
        }
        if (ccFind(intArg0, 2) == 1) {
            ccSetGraphic(Graphic.aif_accordion_button_2_5);
        }
    } else {
        if (ccFind(intArg0, 0) == 1) {
            ccSetGraphic(Graphic.aif_accordion_button_2_1);
        }
        if (ccFind(intArg0, 1) == 1) {
            ccSetGraphic(Graphic.aif_accordion_button_2_0);
        }
        if (ccFind(intArg0, 2) == 1) {
            ccSetGraphic(Graphic.aif_accordion_button_2_2);
        }
    }
}
