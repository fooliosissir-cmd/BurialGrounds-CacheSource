/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1292

function cs2_1292(intArg0: component, intArg1: boolean): void {
    if (intArg1 == true) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8549), intArg0);
    } else {
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8547), intArg0);
        cs2_5516(Component.interface_746.component_746_42, intArg0);
    }
}
