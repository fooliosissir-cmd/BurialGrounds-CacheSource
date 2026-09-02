/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5684

function cs2_5684(intArg0: component): void {
    if (ifFind(intArg0) == 1) {
        if (ifGetGraphic(intArg0) == Graphic.aif_select_button_blue_1_0) {
            ifSetGraphic(Graphic.aif_select_button_blue_1_1, intArg0);
        } else {
            ifSetGraphic(Graphic.aif_select_button_blue_1_2, intArg0);
        }
    }
}
