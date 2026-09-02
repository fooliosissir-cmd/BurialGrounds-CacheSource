/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6184

function cs2_6184(intArg0: number): void {
    let int1: struct = enumOp(type_int, type_struct, Enum.enum_2162, varbit_zaros_spellbook);
    let int2: number = structParam(int1, Param.param_654);
    let int3: number = structParam(int1, Param.param_655);
    let int4: number = structParam(int1, Param.param_660) - 1;
    let int5: Enum = -1;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: component = -1;
    let int10: component = -1;
    let int11: number = 0;
    let int12: component = Component.interface_1275.component_1275_4;
    let int13: component = Component.interface_1275.component_1275_5;

    if (intArg0 == 1) {
        int12 = Component.interface_1276.component_1276_4;
        int13 = Component.interface_1276.component_1276_5;
    }

    switch (varbit_zaros_spellbook) {
        case 0:
            if (intArg0 == 0) {
                int5 = Enum.enum_5767;
                ifSetHide(false, Component.interface_1275.component_1275_3);
                int10 = Component.interface_1275.component_1275_3;
            } else {
                int5 = Enum.enum_5768;
                ifSetHide(false, Component.interface_1276.component_1276_3);
                int10 = Component.interface_1276.component_1276_3;
            }
            break;
        case 1:
            if (intArg0 == 0) {
                int5 = Enum.enum_5773;
                ifSetHide(false, Component.interface_1275.component_1275_1);
                int10 = Component.interface_1275.component_1275_1;
            } else {
                int5 = Enum.enum_5774;
                ifSetHide(false, Component.interface_1276.component_1276_1);
                int10 = Component.interface_1276.component_1276_1;
            }
            break;
        case 2:
            if (intArg0 == 0) {
                int5 = Enum.enum_5770;
                ifSetHide(false, Component.interface_1275.component_1275_2);
                int10 = Component.interface_1275.component_1275_2;
            } else {
                int5 = Enum.enum_5771;
                ifSetHide(false, Component.interface_1276.component_1276_2);
                int10 = Component.interface_1276.component_1276_2;
            }
            break;
        default:
            return;
    }
    let int14: number = enumGetoutputcount(int5);

    if (int14 % int4 != 0) {
        int11 = 1;
    }

    if (int2 + (int14 / int4 + int11) * (structParam(int1, Param.param_656) + structParam(int1, Param.param_659)) > ifGetHeight(int10)) {
        int4 = int4 - 1;
        if (int14 / int4 != 0) {
            int11 = 1;
        }
        ifSetScrollSize(ifGetWidth(int10), int2 + (int14 / int4 + int11) * (structParam(int1, Param.param_656) + structParam(int1, Param.param_659)), int10);
        ifSetPosition(20, 5, 2, 0, int13);
        proc_scrollbar_vertical(int12, int10, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    }

    while (int6 < int14) {
        int9 = enumOp(type_int, type_component, int5, int8);
        if (int9 != -1) {
            int6 = int6 + 1;
            if (mapMembers() == 1) {
                int7 = int7 + 1;
                ifSetPosition(int3, int2, 0, 0, int9);
                ifSetHide(false, int9);
                int3 = int3 + structParam(int1, Param.param_657) + structParam(int1, Param.param_658);
                if (int7 % int4 == 0) {
                    int2 = int2 + structParam(int1, Param.param_656) + structParam(int1, Param.param_659);
                    int3 = structParam(int1, Param.param_655);
                }
            } else {
                ifSetHide(true, int9);
            }
        }
        int8 = int8 + 1;
        if (int8 > 997) {
            return;
        }
    }
}
