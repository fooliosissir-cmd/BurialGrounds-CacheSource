/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2722

function cs2_2722(intArg0: component, intArg1: boolean, intArg2: boolean): void {
    if (ccFind(intArg0, 0) == 1) {
        if (intArg1 == true) {
            ccSetGraphic(Graphic.set_but_fill_5_1);
        } else if (intArg2 == true) {
            ccSetGraphic(Graphic.set_but_fill_5_2);
        } else {
            ccSetGraphic(Graphic.set_but_fill_5_0);
        }
    }

    if (ccFind(intArg0, 1) == 1) {
        if (intArg1 == true) {
            ccSetGraphic(Graphic.set_but_end_5_1);
        } else if (intArg2 == true) {
            ccSetGraphic(Graphic.set_but_end_5_2);
        } else {
            ccSetGraphic(Graphic.set_but_end_5_0);
        }
    }

    if (ccFind(intArg0, 2) == 1) {
        if (intArg1 == true) {
            ccSetGraphic(Graphic.set_but_end_5_1);
        } else if (intArg2 == true) {
            ccSetGraphic(Graphic.set_but_end_5_2);
        } else {
            ccSetGraphic(Graphic.set_but_end_5_0);
        }
    }

    if (intArg1 == false) {
        playerdesign4_tooltip_clear();
    }
}
