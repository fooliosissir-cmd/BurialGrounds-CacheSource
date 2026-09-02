/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5642

function cs2_5642(intArg0: component, intArg1: number, intArg2: number): void {
    if (intArg2 == 1) {
        if (intArg1 == 1) {
            ifSetGraphic(Graphic.graphic_9196, intArg0);
        } else {
            ifSetGraphic(Graphic.graphic_9195, intArg0);
        }
    } else {
        deltooltip_action(Component.interface_261.component_261_31);
        if (intArg1 == 1) {
            ifSetGraphic(Graphic.graphic_762, intArg0);
        } else {
            ifSetGraphic(Graphic.graphic_761, intArg0);
        }
    }
}
