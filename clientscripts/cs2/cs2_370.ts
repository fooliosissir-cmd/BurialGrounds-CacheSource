/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_370

function cs2_370(intArg0: component, intArg1: boolean): void {
    if (intArg1 == true) {
        if (ccFind(intArg0, 0) == 1) {
            ccSetGraphic(Graphic.set_but_fill_5_1);
        }
        if (ccFind(intArg0, 1) == 1) {
            ccSetGraphic(Graphic.set_but_end_5_1);
        }
        if (ccFind(intArg0, 2) == 1) {
            ccSetGraphic(Graphic.set_but_end_5_4);
        }
    } else {
        if (ccFind(intArg0, 0) == 1) {
            ccSetGraphic(Graphic.set_but_fill_5_0);
        }
        if (ccFind(intArg0, 1) == 1) {
            ccSetGraphic(Graphic.set_but_end_5_0);
        }
        if (ccFind(intArg0, 2) == 1) {
            ccSetGraphic(Graphic.set_but_end_5_3);
        }
        playerdesign4_tooltip_clear();
    }
}
