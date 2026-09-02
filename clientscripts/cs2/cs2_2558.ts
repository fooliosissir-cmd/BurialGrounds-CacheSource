/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2558

function cs2_2558(intArg0: component): void {
    if (ifGetGraphic(intArg0) == Graphic.graphic_1946) {
        ifSetGraphic(Graphic.graphic_1951, intArg0);
    } else if (ifGetGraphic(intArg0) == Graphic.graphic_1947) {
        ifSetGraphic(Graphic.graphic_1952, intArg0);
    } else if (ifGetGraphic(intArg0) == Graphic.graphic_1949) {
        ifSetGraphic(Graphic.graphic_1954, intArg0);
    }
}
