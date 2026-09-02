/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5115

function cs2_5115(intArg0: component, intArg1: number): void {
    if (intArg1 == 1) {
        ifSetGraphic(Graphic.aif_minimap_citadel_icon_1, intArg0);
    } else {
        ifSetGraphic(Graphic.aif_minimap_citadel_icon_0, intArg0);
    }
}
