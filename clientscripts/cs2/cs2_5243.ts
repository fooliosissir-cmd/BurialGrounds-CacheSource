/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5243

function cs2_5243(intArg0: number): void {
    if (intArg0 == 1) {
        ifSetGraphic(Graphic.aif_trim_1_red_button_9, Component.interface_1128.component_1128_331);
        ifSetGraphic(Graphic.aif_trim_1_red_button_10, Component.interface_1128.component_1128_332);
        ifSetGraphic(Graphic.aif_trim_1_red_button_11, Component.interface_1128.component_1128_333);
    } else {
        ifSetGraphic(Graphic.aif_trim_1_red_button_9, Component.interface_1128.component_1128_0);
        ifSetGraphic(Graphic.aif_trim_1_red_button_10, Component.interface_1128.component_1128_1);
        ifSetGraphic(Graphic.aif_trim_1_red_button_11, Component.interface_1128.component_1128_2);
    }
}
