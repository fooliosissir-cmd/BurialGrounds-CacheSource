/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_190

function cs2_190(intArg0: component): void {
    if (getWindowMode() >= 2) {
        ifSetGraphic(Graphic.graphic_8556, intArg0);
    } else {
        ifSetGraphic(Graphic.graphic_1024, intArg0);
    }
}
