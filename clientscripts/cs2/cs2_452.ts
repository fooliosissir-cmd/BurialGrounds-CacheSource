/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_452

function cs2_452(): void {
    if (varbit_conq_ignore_truce == 0) {
        ifSetGraphic(Graphic.km_tickbox_0, Component.interface_1008.component_1008_31);
    } else {
        ifSetGraphic(Graphic.km_tickbox_1, Component.interface_1008.component_1008_31);
    }
}
