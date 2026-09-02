/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4016

function cs2_4016(): void {
    if (varbit_quest_intro_set_objective == 0) {
        aif_checkbox_build_layer(Component.interface_1243.component_1243_56, Graphic.aif_check_box_3, Graphic.aif_check_box_2, Graphic.aif_check_box_4);
    } else {
        aif_checkbox_build_layer(Component.interface_1243.component_1243_56, Graphic.aif_check_box_0, Graphic.aif_check_box_1, Graphic.aif_check_box_0);
    }
}
