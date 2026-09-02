/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_field_editor_tooltip]

function clan_field_editor_tooltip(intArg0: component, intArg1: number, intArg2: number, intArg3: number, strArg0: string): void {
    if (ifGetHide(Component.interface_1111.component_1111_18) == 0 || ifGetHide(Component.interface_1111.component_1111_6) == 1) {
        deltooltip_action(Component.interface_1111.component_1111_119);
        return;
    }

    if (tooltip_time(25) == 0) {
        return;
    }
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = if_getx_absolute(Component.interface_1111.component_1111_6);
    let int11: number = trh_esc_mouseleave(Component.interface_1111.component_1111_6);
    let int12: number = ifGetWidth(Component.interface_1111.component_1111_6);
    let int13: number = ifGetHeight(Component.interface_1111.component_1111_6);

    if (ccFind(intArg0, intArg1) == 1) {
        [int4, int5] = [cc_getx_absolute(), cc_gety_absolute()];
        [int9, int6] = [int4 - int10, int5 - int11];
        [int8, int7] = [int9 + ccGetWidth(), int6 + ccGetHeight()];
        if (int13 - int7 > 150) {
            aif_tooltip_draw(Component.interface_1111.component_1111_119, intArg0, intArg1, strArg0, int12, Graphic.p11_full, Graphic.p11_full, -1, 10, 2, 2, intArg2, intArg3);
            return;
        }
        if (int6 > 125) {
            aif_tooltip_draw(Component.interface_1111.component_1111_119, intArg0, intArg1, strArg0, int12, Graphic.p11_full, Graphic.p11_full, -1, 10, 2, 0, intArg2, intArg3);
            return;
        }
        if (int12 - int8 > 150) {
            aif_tooltip_draw(Component.interface_1111.component_1111_119, intArg0, intArg1, strArg0, int12, Graphic.p11_full, Graphic.p11_full, -1, 10, 2, 1, intArg2, intArg3);
            return;
        }
        if (int9 > 225) {
            aif_tooltip_draw(Component.interface_1111.component_1111_119, intArg0, intArg1, strArg0, int12, Graphic.p11_full, Graphic.p11_full, -1, 10, 2, 3, intArg2, intArg3);
            return;
        }
        aif_tooltip_draw(Component.interface_1111.component_1111_119, intArg0, intArg1, strArg0, int12, Graphic.p11_full, Graphic.p11_full, -1, 10, 2, -1, int4 + intArg2, int5 + intArg3);
    }
}
