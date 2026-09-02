/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6211

function cs2_6211(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    let int4: graphic = Graphic.graphic_10872;
    let int5: graphic = Graphic.graphic_10876;
    let int6: graphic = Graphic.graphic_10871;
    let int7: graphic = Graphic.graphic_10875;
    let int8: colour = colour(0xF9C465);
    let int9: colour = colour(0xE5B051);

    if (intArg3 == 1) {
        if (intArg1 != -1) {
            ifSetColour(int8, intArg1);
        }
        if (intArg0 != -1) {
            if (intArg2 == 1) {
                ifSetGraphic(int4, intArg0);
            } else {
                ifSetGraphic(int5, intArg0);
            }
        }
    } else {
        if (intArg1 != -1) {
            ifSetColour(int9, intArg1);
        }
        if (intArg0 != -1) {
            if (intArg2 == 1) {
                ifSetGraphic(int6, intArg0);
            } else {
                ifSetGraphic(int7, intArg0);
            }
        }
    }
}
