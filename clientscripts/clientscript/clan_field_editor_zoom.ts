/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_field_editor_zoom]

function clientscript_clan_field_editor_zoom(intArg0: component, intArg1: number): void {
    let int2: number = getMouseX() - if_getx_absolute(Component.interface_1111.component_1111_12);
    let int3: number = getMouseY() - trh_esc_mouseleave(Component.interface_1111.component_1111_12);
    let int4: number = ifGetWidth(Component.interface_1111.component_1111_12);
    let int5: number = ifGetHeight(Component.interface_1111.component_1111_12);

    if (int2 > int4 || int2 < 0 || int3 > int5 || int3 < 0) {
        [int2, int3] = [int4 / 2, int5 / 2];
    }
    int2 = int2 + ifGetScrollX(Component.interface_1111.component_1111_12);
    int3 = int3 + ifGetScrollY(Component.interface_1111.component_1111_12);
    let int6: number = varc_hw10_cutscene * (112 + 2 + 2);
    varc_hw10_cutscene = max(min(varc_hw10_cutscene - intArg1, 21), 3);
    let int7: number = varc_hw10_cutscene * (112 + 2 + 2);
    let int8: number = scale(int7, int6, int2) - int2;
    let int9: number = scale(int7, int6, int3) - int3;
    proc_clan_field_editor_zoom(intArg0, int8, int9);
}
