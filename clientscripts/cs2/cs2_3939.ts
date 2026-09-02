/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3939

function cs2_3939(intArg0: number): void {
    if (intArg0 == 1) {
        ifSetColour(colour(0xFAFAFA), Component.interface_673.component_673_41);
        if (varc_1411 == 1) {
            ifSetGraphic(Graphic.check_box_2_3, Component.interface_673.component_673_40);
        } else {
            ifSetGraphic(Graphic.check_box_2_1, Component.interface_673.component_673_40);
        }
    } else {
        ifSetColour(colour(0xEBE0BC), Component.interface_673.component_673_41);
        if (varc_1411 == 1) {
            ifSetGraphic(Graphic.check_box_2_2, Component.interface_673.component_673_40);
        } else {
            ifSetGraphic(Graphic.check_box_2_0, Component.interface_673.component_673_40);
        }
    }
}
