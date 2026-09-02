/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5533

function cs2_5533(): void {
    let int0: number = ifGetScrollX(Component.interface_1179.component_1179_10);

    if (int0 <= 0) {
        ifSetTrans(150, Component.interface_1179.component_1179_8);
        ifSetGraphic(Graphic.sm_select_body_button_0, Component.interface_1179.component_1179_8);
    } else {
        ifSetTrans(0, Component.interface_1179.component_1179_8);
    }

    if (int0 >= ifGetScrollWidth(Component.interface_1179.component_1179_10) - ifGetWidth(Component.interface_1179.component_1179_10)) {
        ifSetTrans(150, Component.interface_1179.component_1179_9);
        ifSetGraphic(Graphic.sm_select_body_button_2, Component.interface_1179.component_1179_9);
    } else {
        ifSetTrans(0, Component.interface_1179.component_1179_9);
    }
    varc_93 = int0;
}
