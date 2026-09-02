/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,shop_filter_button]

function shop_filter_button(intArg0: component, intArg1: number): void {
    let int2: number = varbit_shop_verbose_mode;

    if (intArg0 == Component.interface_1265.component_1265_50) {
        int2 = (varbit_shop_verbose_mode + 1) % 2;
    }

    if (intArg1 == 1) {
        if (intArg0 == Component.interface_1265.component_1265_49) {
            if (int2 == 1) {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_3, intArg0);
            } else {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_3, intArg0);
            }
        } else if (intArg0 == Component.interface_1265.component_1265_50) {
            if (int2 == 1) {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_1, intArg0);
            } else {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_1, intArg0);
            }
        }
    } else {
        deltooltip_action(Component.interface_1265.component_1265_89);
        if (intArg0 == Component.interface_1265.component_1265_49) {
            if (int2 == 1) {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_3, intArg0);
            } else {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_2, intArg0);
            }
        } else if (intArg0 == Component.interface_1265.component_1265_50) {
            if (int2 == 1) {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_1, intArg0);
            } else {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_0, intArg0);
            }
        }
    }
}
