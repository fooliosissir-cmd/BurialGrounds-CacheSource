/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6474

function cs2_6474(intArg0: component, intArg1: number): void {
    let int2: number = varbit_mtxmgt_show_all;

    if (intArg0 == Component.interface_1311.component_1311_168) {
        int2 = (varbit_mtxmgt_show_all + 1) % 2;
    }

    if (intArg1 == 1) {
        if (intArg0 == Component.interface_1311.component_1311_69) {
            if (int2 == 1) {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_3, intArg0);
            } else {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_3, intArg0);
            }
        } else if (intArg0 == Component.interface_1311.component_1311_168) {
            if (int2 == 1) {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_1, intArg0);
            } else {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_1, intArg0);
            }
        }
    } else {
        deltooltip_action(Component.interface_1311.component_1311_83);
        if (intArg0 == Component.interface_1311.component_1311_69) {
            if (int2 == 1) {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_3, intArg0);
            } else {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_2, intArg0);
            }
        } else if (intArg0 == Component.interface_1311.component_1311_168) {
            if (int2 == 1) {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_1, intArg0);
            } else {
                ifSetGraphic(Graphic.aif_shop_display_mode_icon_0, intArg0);
            }
        }
    }
}
