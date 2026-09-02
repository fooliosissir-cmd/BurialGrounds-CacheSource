/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_365

function cs2_365(intArg0: component, intArg1: number, intArg2: number): void {
    if (intArg2 == 1) {
        if (ccFind(intArg0, intArg1) == 1) {
            if (ccGetHeight() > 90) {
                ccSetGraphic(Graphic.graphic_10552);
            } else {
                ccSetGraphic(Graphic.graphic_10550);
            }
        }
    } else if (intArg2 == 2) {
        if (ccFind(intArg0, intArg1) == 1) {
            if (ccGetHeight() > 90) {
                ccSetGraphic(Graphic.graphic_10552);
            } else {
                ccSetGraphic(Graphic.graphic_10550);
            }
        }
    } else if (ccFind(intArg0, intArg1) == 1) {
        if (ccGetHeight() > 90) {
            ccSetGraphic(Graphic.graphic_10551);
        } else {
            ccSetGraphic(Graphic.graphic_10549);
        }
    }
}
