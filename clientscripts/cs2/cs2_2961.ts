/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2961

function cs2_2961(intArg0: component, intArg1: component, intArg2: boolean): void {
    if (intArg2 == true) {
        if (varc_986 == 1) {
            ifSetGraphic(Graphic.graphic_2702, intArg0);
        } else {
            ifSetGraphic(Graphic.graphic_2701, intArg0);
        }
        ifSetColour(colour(0xEBE0BC), intArg1);
    } else {
        if (varc_986 == 1) {
            ifSetGraphic(Graphic.graphic_2700, intArg0);
        } else {
            ifSetGraphic(Graphic.graphic_2703, intArg0);
        }
        ifSetColour(colour(0xB2AA9F), intArg1);
    }
}
