/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1256

function cs2_1256(): void {
    if (varbit_dwarfrock_schematics_solved == 1) {
        return;
    }

    if (varp_262 == 0) {
        ifSetGraphic(Graphic.miscgraphics_10, Component.interface_114.component_114_25);
    } else {
        ifSetGraphic(Graphic.miscgraphics_11, Component.interface_114.component_114_25);
    }
}
