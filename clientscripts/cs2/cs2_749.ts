/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_749

function cs2_749(intArg0: boolean): void {
    if (intArg0 == true) {
        if (ccFind(Component.interface_18.component_18_29, 0) == 1) {
            ccSetGraphic(Graphic.aif_drop_down_button_1_4);
        }
        if (ccFind(Component.interface_18.component_18_29, 1) == 1) {
            ccSetGraphic(Graphic.aif_drop_down_button_1_3);
        }
        if (ccFind(Component.interface_18.component_18_29, 2) == 1) {
            ccSetGraphic(Graphic.aif_drop_down_button_1_5);
        }
    } else {
        if (ccFind(Component.interface_18.component_18_29, 0) == 1) {
            ccSetGraphic(Graphic.aif_drop_down_button_1_1);
        }
        if (ccFind(Component.interface_18.component_18_29, 1) == 1) {
            ccSetGraphic(Graphic.aif_drop_down_button_1_0);
        }
        if (ccFind(Component.interface_18.component_18_29, 2) == 1) {
            ccSetGraphic(Graphic.aif_drop_down_button_1_2);
        }
    }
}
