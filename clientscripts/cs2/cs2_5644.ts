/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5644

function cs2_5644(intArg0: component, intArg1: number, intArg2: number): void {
    if (intArg2 == 1) {
        if (intArg1 == 1) {
            ifSetGraphic(Graphic.graphic_9209, intArg0);
        } else {
            ifSetGraphic(Graphic.graphic_9208, intArg0);
        }
    } else {
        deltooltip_action(Component.interface_261.component_261_31);
        if (intArg1 == 1) {
            ifSetGraphic(Graphic.graphic_4584, intArg0);
        } else {
            ifSetGraphic(Graphic.graphic_4583, intArg0);
        }
    }
}
