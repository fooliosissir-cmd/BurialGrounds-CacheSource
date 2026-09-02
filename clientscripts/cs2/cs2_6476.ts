/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6476

function cs2_6476(intArg0: number, intArg1: number, intArg2: component, intArg3: component, intArg4: component): void {
    if (intArg1 == 1) {
        if (intArg0 == 1) {
            ifSetGraphic(Graphic.aif_tab_btn_2_6, intArg2);
            ifSetGraphic(Graphic.aif_tab_btn_2_7, intArg3);
            ifSetGraphic(Graphic.aif_tab_btn_2_8, intArg4);
        } else {
            ifSetGraphic(Graphic.aif_tab_btn_2_3, intArg2);
            ifSetGraphic(Graphic.aif_tab_btn_2_4, intArg3);
            ifSetGraphic(Graphic.aif_tab_btn_2_5, intArg4);
        }
    } else {
        if (intArg0 == 1) {
            ifSetGraphic(Graphic.aif_tab_btn_2_6, intArg2);
            ifSetGraphic(Graphic.aif_tab_btn_2_7, intArg3);
            ifSetGraphic(Graphic.aif_tab_btn_2_8, intArg4);
        } else {
            ifSetGraphic(Graphic.aif_tab_btn_2_0, intArg2);
            ifSetGraphic(Graphic.aif_tab_btn_2_1, intArg3);
            ifSetGraphic(Graphic.aif_tab_btn_2_2, intArg4);
        }
        deltooltip_action(Component.interface_1311.component_1311_83);
    }
}
