/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4004

function cs2_4004(intArg0: number): void {
    if (intArg0 == 0) {
        ifSetGraphic(Graphic.graphic_4324, Component.interface_1056.component_1056_133);
        ifSetGraphic(Graphic.graphic_4324, Component.interface_1056.component_1056_134);
        ifSetGraphic(Graphic.graphic_4325, Component.interface_1056.component_1056_132);
        ifSetGraphic(Graphic.task_arrow_1, Component.interface_1056.component_1056_136);
    } else {
        ifSetGraphic(Graphic.graphic_4322, Component.interface_1056.component_1056_133);
        ifSetGraphic(Graphic.graphic_4322, Component.interface_1056.component_1056_134);
        ifSetGraphic(Graphic.graphic_4323, Component.interface_1056.component_1056_132);
        ifSetGraphic(Graphic.task_arrow_0, Component.interface_1056.component_1056_136);
        deltooltip_action(Component.interface_1056.component_1056_131);
    }
}
