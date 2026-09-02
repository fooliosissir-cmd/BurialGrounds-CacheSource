/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6099

function cs2_6099(intArg0: number, intArg1: number, intArg2: component, intArg3: component, intArg4: component): void {
    if (intArg1 == 1) {
        if (intArg0 == 1) {
            ifSetGraphic(Graphic.aif_shop_tab_button_2, intArg2);
            ifSetGraphic(Graphic.aif_shop_tab_button_3, intArg3);
            ifSetGraphic(Graphic.aif_shop_tab_button_2, intArg4);
        } else {
            ifSetGraphic(Graphic.aif_shop_tab_button_4, intArg2);
            ifSetGraphic(Graphic.aif_shop_tab_button_5, intArg3);
            ifSetGraphic(Graphic.aif_shop_tab_button_4, intArg4);
        }
    } else {
        if (intArg0 == 1) {
            ifSetGraphic(Graphic.aif_shop_tab_button_2, intArg2);
            ifSetGraphic(Graphic.aif_shop_tab_button_3, intArg3);
            ifSetGraphic(Graphic.aif_shop_tab_button_2, intArg4);
        } else {
            ifSetGraphic(Graphic.aif_shop_tab_button_0, intArg2);
            ifSetGraphic(Graphic.aif_shop_tab_button_1, intArg3);
            ifSetGraphic(Graphic.aif_shop_tab_button_0, intArg4);
        }
        deltooltip_action(Component.interface_1265.component_1265_89);
    }
}
