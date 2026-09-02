/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2370

function cs2_2370(): void {
    let int0: number = ifGetScrollX(Component.interface_905.component_905_13);

    if (int0 <= 0) {
        ifSetTrans(150, Component.interface_905.component_905_11);
        ifSetGraphic(Graphic.sm_select_body_button_0, Component.interface_905.component_905_11);
    } else {
        ifSetTrans(0, Component.interface_905.component_905_11);
    }

    if (int0 >= ifGetScrollWidth(Component.interface_905.component_905_13) - ifGetWidth(Component.interface_905.component_905_13)) {
        ifSetTrans(150, Component.interface_905.component_905_12);
        ifSetGraphic(Graphic.sm_select_body_button_2, Component.interface_905.component_905_12);
    } else {
        ifSetTrans(0, Component.interface_905.component_905_12);
    }
    varc_93 = int0;
}
