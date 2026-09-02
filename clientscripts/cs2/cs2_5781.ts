/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5781

function cs2_5781(intArg0: number, intArg1: number, intArg2: component, intArg3: number): void {
    if (ccFind(intArg2, intArg3) == 1) {
        if (intArg1 == 1) {
            if (intArg0 == 1) {
                ccSetGraphic(Graphic.aif_help_button_1);
            } else {
                ccSetGraphic(Graphic.aif_help_button_0);
            }
        } else if (intArg0 == 1) {
            ccSetGraphic(Graphic.aif_help_button_2);
        } else {
            ccSetGraphic(Graphic.aif_help_button_3);
        }
    }
}
