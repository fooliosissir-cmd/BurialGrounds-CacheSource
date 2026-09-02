/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2021

function cs2_2021(intArg0: component, intArg1: boolean): void {
    if (intArg1 == true) {
        if (ccFind(intArg0, 0) == 1) {
            ccSetGraphic(Graphic.graphic_3862);
        }
        if (ccFind(intArg0, 1) == 1) {
            ccSetGraphic(Graphic.graphic_3860);
        }
        if (ccFind(intArg0, 2) == 1) {
            ccSetGraphic(Graphic.graphic_3861);
        }
    } else {
        if (ccFind(intArg0, 0) == 1) {
            ccSetGraphic(Graphic.graphic_3859);
        }
        if (ccFind(intArg0, 1) == 1) {
            ccSetGraphic(Graphic.graphic_3857);
        }
        if (ccFind(intArg0, 2) == 1) {
            ccSetGraphic(Graphic.graphic_3858);
        }
    }
}
