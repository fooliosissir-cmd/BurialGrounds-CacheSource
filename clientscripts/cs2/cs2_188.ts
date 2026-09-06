/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_188

function cs2_188(intArg0: component): void {
    if (gameframe_skin_new() == true) {
        ifSetGraphic(Graphic.graphic_8557, intArg0);
    } else {
        ifSetGraphic(Graphic.graphic_1025, intArg0);
    }
}
