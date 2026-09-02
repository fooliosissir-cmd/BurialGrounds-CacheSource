/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2559

function cs2_2559(intArg0: component, intArg1: component): void {
    if (ifGetGraphic(intArg0) == Graphic.graphic_1951) {
        ifSetGraphic(Graphic.graphic_1946, intArg0);
    } else if (ifGetGraphic(intArg0) == Graphic.graphic_1952) {
        ifSetGraphic(Graphic.graphic_1947, intArg0);
    } else if (ifGetGraphic(intArg0) == Graphic.graphic_1954) {
        ifSetGraphic(Graphic.graphic_1949, intArg0);
    }
    deltooltip_action(intArg1);
}
