/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4007

function cs2_4007(intArg0: number): void {
    if (intArg0 == 0) {
        ifSetGraphic(Graphic.graphic_4324, Component.interface_1056.component_1056_109);
        ifSetGraphic(Graphic.graphic_4324, Component.interface_1056.component_1056_110);
        ifSetGraphic(Graphic.graphic_4325, Component.interface_1056.component_1056_111);
    } else {
        ifSetGraphic(Graphic.graphic_4322, Component.interface_1056.component_1056_109);
        ifSetGraphic(Graphic.graphic_4322, Component.interface_1056.component_1056_110);
        ifSetGraphic(Graphic.graphic_4323, Component.interface_1056.component_1056_111);
        deltooltip_action(Component.interface_1056.component_1056_131);
    }
}
