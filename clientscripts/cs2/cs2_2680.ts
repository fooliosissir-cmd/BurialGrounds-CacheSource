/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2680

function cs2_2680(): void {
    if (varbit_poh_building_mode == 1) {
        ifSetGraphic(Graphic.miscgraphics_9, Component.interface_398.component_398_15);
        ifSetGraphic(Graphic.miscgraphics_0, Component.interface_398.component_398_1);
    } else {
        ifSetGraphic(Graphic.miscgraphics_0, Component.interface_398.component_398_15);
        ifSetGraphic(Graphic.miscgraphics_9, Component.interface_398.component_398_1);
    }
}
