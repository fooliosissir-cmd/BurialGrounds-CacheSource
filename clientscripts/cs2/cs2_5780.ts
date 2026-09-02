/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5780

function cs2_5780(intArg0: number, intArg1: number, intArg2: component): void {
    if (intArg1 == 1) {
        if (intArg0 == 1) {
            ifSetGraphic(Graphic.aif_help_button_1, intArg2);
        } else {
            ifSetGraphic(Graphic.aif_help_button_0, intArg2);
        }
    } else if (intArg0 == 1) {
        ifSetGraphic(Graphic.aif_help_button_2, intArg2);
    } else {
        ifSetGraphic(Graphic.aif_help_button_3, intArg2);
    }
}
