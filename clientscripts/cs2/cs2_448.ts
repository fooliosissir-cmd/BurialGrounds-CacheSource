/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_448

function cs2_448(): void {
    if (varbit_conq_ignore_truce == 0) {
        ifSetGraphic(Graphic.km_tickbox_0, Component.interface_1019.component_1019_10);
    } else {
        ifSetGraphic(Graphic.km_tickbox_1, Component.interface_1019.component_1019_10);
    }
}
