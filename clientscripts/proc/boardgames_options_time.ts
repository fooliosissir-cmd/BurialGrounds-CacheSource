/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,boardgames_options_time]

function proc_boardgames_options_time(): void {
    ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_10), Component.interface_756.component_756_12);
    ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_10), Component.interface_756.component_756_13);
    ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_10), Component.interface_756.component_756_15);
    ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_10), Component.interface_756.component_756_16);

    if (varbit_boardgames_timepermove == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_11), Component.interface_756.component_756_12);
    } else if (varbit_boardgames_timepermove == 1) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_11), Component.interface_756.component_756_13);
    } else if (varbit_boardgames_timepermove == 2) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_11), Component.interface_756.component_756_15);
    } else if (varbit_boardgames_timepermove == 3) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_11), Component.interface_756.component_756_16);
    }
}
