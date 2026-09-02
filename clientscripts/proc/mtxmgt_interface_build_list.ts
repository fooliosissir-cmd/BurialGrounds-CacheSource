/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,mtxmgt_interface_build_list]

function mtxmgt_interface_build_list(intArg0: number, intArg1: number, intArg2: number): void {
    cs2_6473();

    if (intArg2 == 1) {
        if (intArg0 == 1) {
            varc_1968 = 1;
        } else if (intArg0 != 2 || varc_1966 != Component.interface_1311.component_1311_76) {
            varc_1968 = 0;
        }
        if (intArg0 == 2) {
            ifSetHide(false, enumOp(type_int, type_component, Enum.enum_5961, 15));
        }
        if (intArg0 != 4) {
            ifSetHide(false, Component.interface_1311.component_1311_65);
        } else {
            ifSetHide(true, Component.interface_1311.component_1311_65);
        }
        ifSetHide(true, Component.interface_1311.component_1311_59);
        ifSetHide(true, Component.interface_1311.component_1311_58);
        ifSetHide(true, Component.interface_1311.component_1311_62);
        ifSetHide(true, Component.interface_1311.component_1311_167);
        varc_1966 = -1;
        varc_1964 = -1;
        varc_1965 = -1;
        cs2_6472(true);
    }
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: Enum = enumOp(type_int, type_enum, Enum.enum_5958, intArg0);

    if (int6 == -1) {
        return;
    }
    let int7: number = cs2_6456(intArg0);

    if (int7 == 0) {
        return;
    }
    defineArray(0, type_int, int7);
    let int8: struct = -1;
    let int9: number = 0;
    let int10: number = 0;

    while (int3 < int7) {
        int8 = enumOp(type_int, type_struct, int6, int3);
        if ((intArg1 == 1 && structParam(int8, Param.param_2547) == 0) || mtxmgt_check_available(int8) == 1) {
            array0[int9] = int3;
            int9 = int9 + 1;
        } else {
            int10 = int10 + 1;
        }
        int3 = int3 + 1;
    }
    int7 = int7 - int10;

    if (int7 > 1) {
        cs2_6471(0, int7, int6);
    }
    int3 = 0;
    let int11: number = -1;
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    ifSetHide(true, Component.interface_1311.component_1311_2);

    while (int3 < int7) {
        int12 = array0[int3];
        int8 = enumOp(type_int, type_struct, int6, int12);
        if (int8 == -1) {
            return;
        } else if (structParam(int8, Param.mtxmgt_category) == intArg0) {
            int13 = structParam(int8, Param.param_2532);
            if (int13 != int11) {
                mtxmgt_interface_draw_header(intArg0, int13);
                int11 = int13;
                int5 = 0;
                if (intArg0 == 2 && int13 == 3) {
                    int4 = ifGetHeight(Component.interface_1311.component_1311_2);
                    ifSetHide(false, Component.interface_1311.component_1311_2);
                } else {
                    int4 = 0;
                }
            }
            [int4, int5] = mtxmgt_interface_draw_item(int8, int4, int5);
        }
        int3 = int3 + 1;
    }
    cs2_6467();
    varc_1963 = intArg0;
}
