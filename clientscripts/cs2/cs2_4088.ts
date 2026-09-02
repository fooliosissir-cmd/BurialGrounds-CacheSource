/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4088

function cs2_4088(intArg0: component): void {
    if (varbit_lore_creation_interface_filter == 1) {
        ifSetGraphic(Graphic.rand_checkbox_3, intArg0);
    } else {
        ifSetGraphic(Graphic.rand_checkbox_1, intArg0);
    }
}
