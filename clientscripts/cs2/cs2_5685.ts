/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5685

function cs2_5685(intArg0: component): void {
    if (ifFind(intArg0) == 1) {
        if (ifGetGraphic(intArg0) == Graphic.aif_select_button_blue_1_1) {
            ifSetGraphic(Graphic.aif_select_button_blue_1_0, intArg0);
        } else {
            ifSetGraphic(Graphic.aif_select_button_blue_1_3, intArg0);
        }
    }
}
