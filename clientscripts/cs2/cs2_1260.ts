/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1260

function cs2_1260(): void {
    if (varbit_dwarfrock_schematics_solved == 1) {
        return;
    }

    if (varp_266 == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_10), Component.interface_114.component_114_29);
    } else {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_11), Component.interface_114.component_114_29);
    }
}
