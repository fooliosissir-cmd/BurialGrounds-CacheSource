/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2685

function cs2_2685(intArg0: number): void {
    if (intArg0 == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_8), Component.interface_398.component_398_31);
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_7), Component.interface_398.component_398_32);
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_14), Component.interface_398.component_398_33);
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_6), Component.interface_398.component_398_7);
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_4), Component.interface_398.component_398_8);
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_13), Component.interface_398.component_398_23);
    } else {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_6), Component.interface_398.component_398_31);
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_4), Component.interface_398.component_398_32);
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_13), Component.interface_398.component_398_33);
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_8), Component.interface_398.component_398_7);
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_7), Component.interface_398.component_398_8);
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_14), Component.interface_398.component_398_23);
    }
}
