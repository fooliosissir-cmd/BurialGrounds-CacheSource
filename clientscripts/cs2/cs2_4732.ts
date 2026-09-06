/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4732

function cs2_4732(intArg0: component, intArg1: number): void {
    if (testBit(varp_2396, intArg1) == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_0), intArg0);
    } else {
        ifSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_7), intArg0);
    }
}
