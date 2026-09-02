/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4023

function cs2_4023(intArg0: number): void {
    if (intArg0 == 0) {
        ifSetGraphic(Graphic.graphic_4324, Component.interface_917.component_917_43);
        ifSetGraphic(Graphic.graphic_4324, Component.interface_917.component_917_45);
        ifSetGraphic(Graphic.graphic_4325, Component.interface_917.component_917_44);
        ifSetGraphic(Graphic.task_arrow_1, Component.interface_917.component_917_47);
    } else {
        deltooltip_action(Component.interface_917.component_917_111);
        ifSetGraphic(Graphic.graphic_4322, Component.interface_917.component_917_43);
        ifSetGraphic(Graphic.graphic_4322, Component.interface_917.component_917_45);
        ifSetGraphic(Graphic.graphic_4323, Component.interface_917.component_917_44);
        ifSetGraphic(Graphic.task_arrow_0, Component.interface_917.component_917_47);
    }
}
