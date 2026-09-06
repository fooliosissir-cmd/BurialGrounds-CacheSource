/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4024

function cs2_4024(intArg0: number): void {
    if (intArg0 == 0) {
        ifSetGraphic(Graphic.graphic_4324, Component.interface_917.component_917_66);
        ifSetGraphic(Graphic.graphic_4324, Component.interface_917.component_917_78);
        ifSetGraphic(Graphic.graphic_4325, Component.interface_917.component_917_79);
    } else {
        deltooltip_action(Component.interface_917.component_917_111);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_4322), Component.interface_917.component_917_66);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_4322), Component.interface_917.component_917_78);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_4323), Component.interface_917.component_917_79);
    }
}
