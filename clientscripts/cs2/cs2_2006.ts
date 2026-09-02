/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2006

function cs2_2006(intArg0: number): void {
    if (intArg0 > 0) {
        ifSetGraphic(Graphic.graphic_4123, Component.interface_744.component_744_108);
    } else {
        ifSetGraphic(Graphic.graphic_4124, Component.interface_744.component_744_108);
    }
    ifSetOnTimer(hook(cs2_3961, "iI", [0, Component.interface_744.component_744_7]), Component.interface_744.component_744_7);
}
