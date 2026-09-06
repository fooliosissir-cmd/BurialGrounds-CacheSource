/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2937

function cs2_2937(): void {
    varc_1089 = -1;
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_3), Component.interface_596.component_596_34);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_3), Component.interface_596.component_596_33);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_596.component_596_31);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_596.component_596_32);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_596.component_596_19);
    ifSetvflip(true, Component.interface_596.component_596_19);
    ifSethflip(true, Component.interface_596.component_596_19);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_596.component_596_23);
    ifSetvflip(true, Component.interface_596.component_596_23);
    ifSethflip(false, Component.interface_596.component_596_23);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_596.component_596_20);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_596.component_596_24);
    ifSetOnTimer(hook(cs2_4700, "", []), Component.interface_744.component_744_17);
}
