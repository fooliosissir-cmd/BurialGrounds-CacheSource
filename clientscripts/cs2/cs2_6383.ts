/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6383

function cs2_6383(intArg0: boolean, intArg1: component, intArg2: component, intArg3: component): void {
    ifSetHide(intArg0, intArg1);

    if (intArg2 != -1) {
        if (intArg0 == true) {
            ifSetGraphic(Graphic.graphic_10154, intArg2);
        } else {
            ifSetGraphic(Graphic.graphic_10155, intArg2);
        }
    }

    if (intArg3 != -1) {
        if (intArg0 == true) {
            ifSetGraphic(Graphic.graphic_10154, intArg3);
            ifSethflip(false, intArg3);
        } else {
            ifSetGraphic(Graphic.graphic_10155, intArg3);
            ifSethflip(true, intArg3);
        }
    }
}
