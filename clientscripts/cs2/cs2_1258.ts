/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1258

function cs2_1258(): void {
    if (varbit_dwarfrock_schematics_solved == 1) {
        return;
    }

    if (varp_264 == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_10), Component.interface_114.component_114_27);
    } else {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_11), Component.interface_114.component_114_27);
    }
}
