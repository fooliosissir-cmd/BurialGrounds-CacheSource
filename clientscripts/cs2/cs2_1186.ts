/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1186

function cs2_1186(): void {
    if (getWindowMode() >= 2) {
        if (ifHasSub(Component.interface_752.component_752_13) == 1) {
            ifSetHide(false, Component.interface_752.component_752_1);
            ifSetAlpha(true, Component.interface_752.component_752_1);
            if (varbit_cutscene_status == 0) {
                ifSetGraphic(Graphic.chat_window, Component.interface_752.component_752_1);
            } else {
                ifSetGraphic(Graphic.graphic_1205, Component.interface_752.component_752_1);
            }
        } else if (ifHasSub(Component.interface_752.component_752_12) == 1) {
            ifSetHide(false, Component.interface_752.component_752_1);
            ifSetAlpha(true, Component.interface_752.component_752_1);
            if (varbit_cutscene_status == 0) {
                ifSetGraphic(Graphic.chat_window, Component.interface_752.component_752_1);
            } else {
                ifSetGraphic(Graphic.graphic_1205, Component.interface_752.component_752_1);
            }
        } else if (ifHasSub(Component.interface_752.component_752_11) == 1) {
            ifSetHide(false, Component.interface_752.component_752_1);
            ifSetAlpha(true, Component.interface_752.component_752_1);
            if (varbit_cutscene_status == 0) {
                ifSetGraphic(Graphic.chat_window, Component.interface_752.component_752_1);
            } else {
                ifSetGraphic(Graphic.graphic_1205, Component.interface_752.component_752_1);
            }
        } else if (ifHasSub(Component.interface_752.component_752_10) == 1) {
            ifSetHide(false, Component.interface_752.component_752_1);
            ifSetAlpha(true, Component.interface_752.component_752_1);
            if (varbit_cutscene_status == 0) {
                ifSetGraphic(Graphic.chat_window, Component.interface_752.component_752_1);
            } else {
                ifSetGraphic(Graphic.graphic_1205, Component.interface_752.component_752_1);
            }
        }
    }
    let int0: boolean = int_to_bool(varbit_6448);
    ifSetHide(int0, Component.interface_548.component_548_40);
    ifSetHide(int0, Component.interface_548.component_548_30);
    ifSetHide(int0, Component.interface_746.component_746_16);
    ifSetHide(int0, Component.interface_746.component_746_18);
    ifSetHide(int0, Component.interface_746.component_746_31);

    if (cs2_1569() == 0) {
        ifSetHide(int0, Component.interface_746.component_746_21);
        ifSetHide(int0, Component.interface_746.component_746_32);
    } else {
        ifSetHide(true, Component.interface_746.component_746_21);
        ifSetHide(false, Component.interface_746.component_746_32);
    }
    ifSetHide(int0, Component.interface_746.component_746_20);
}
