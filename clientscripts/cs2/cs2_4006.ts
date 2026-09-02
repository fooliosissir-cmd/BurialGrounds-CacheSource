/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4006

function cs2_4006(intArg0: number): void {
    if (intArg0 == 0) {
        ifSetGraphic(Graphic.graphic_4324, Component.interface_1056.component_1056_113);
        ifSetGraphic(Graphic.graphic_4324, Component.interface_1056.component_1056_114);
        ifSetGraphic(Graphic.graphic_4325, Component.interface_1056.component_1056_86);
    } else {
        ifSetGraphic(Graphic.graphic_4322, Component.interface_1056.component_1056_113);
        ifSetGraphic(Graphic.graphic_4322, Component.interface_1056.component_1056_114);
        ifSetGraphic(Graphic.graphic_4323, Component.interface_1056.component_1056_86);
        deltooltip_action(Component.interface_1056.component_1056_131);
    }
}
