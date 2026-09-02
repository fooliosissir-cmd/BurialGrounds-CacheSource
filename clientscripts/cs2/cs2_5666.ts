/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5666

function cs2_5666(): void {
    switch (varp_2478) {
        case 2:
            if (varbit_xpdisplay_counter_2_on == 0) {
                ifSetGraphic(Graphic.check_box_2_0, Component.interface_1214.component_1214_19);
            } else {
                ifSetGraphic(Graphic.check_box_2_2, Component.interface_1214.component_1214_19);
            }
            break;
        case 3:
            if (varbit_xpdisplay_counter_3_on == 0) {
                ifSetGraphic(Graphic.check_box_2_0, Component.interface_1214.component_1214_19);
            } else {
                ifSetGraphic(Graphic.check_box_2_2, Component.interface_1214.component_1214_19);
            }
            break;
        default:
            if (varbit_xpdisplay_counter_1_on == 0) {
                ifSetGraphic(Graphic.check_box_2_0, Component.interface_1214.component_1214_19);
            } else {
                ifSetGraphic(Graphic.check_box_2_2, Component.interface_1214.component_1214_19);
            }
            break;
    }
}
