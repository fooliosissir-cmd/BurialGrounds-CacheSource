/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6515

function cs2_6515(intArg0: number, intArg1: number): void {
    let int2: struct = -1;
    let int3: number = 137;

    if (getWindowMode() == 1) {
        int3 = 77;
        ifSetPosition(0, 95, 1, 2, Component.interface_1302.component_1302_17);
    } else {
        ifSetPosition(0, 155, 1, 2, Component.interface_1302.component_1302_17);
    }

    if (intArg1 == 0) {
        int2 = enumOp(type_int, type_struct, Enum.enum_974, varbit_megagames_top_card);
        if (int2 != -1) {
            ifSetText(structParam(int2, Param.param_2559), Component.interface_1302.component_1302_18);
            ifSetText(structParam(int2, Param.param_2560), Component.interface_1302.component_1302_19);
            ifSetHide(false, Component.interface_1302.component_1302_26);
            ifSetPosition(150, int3, 1, 2, Component.interface_1302.component_1302_27);
        }
    } else if (intArg1 == 1) {
        int2 = enumOp(type_int, type_struct, Enum.enum_974, varbit_megagames_middle_card);
        if (int2 != -1) {
            ifSetText(structParam(int2, Param.param_2559), Component.interface_1302.component_1302_18);
            ifSetText(structParam(int2, Param.param_2560), Component.interface_1302.component_1302_19);
            ifSetHide(false, Component.interface_1302.component_1302_26);
            ifSetPosition(0, int3, 1, 2, Component.interface_1302.component_1302_27);
        }
    } else if (intArg1 == 2) {
        int2 = enumOp(type_int, type_struct, Enum.enum_974, varbit_megagames_bottom_card);
        if (int2 != -1) {
            ifSetText(structParam(int2, Param.param_2559), Component.interface_1302.component_1302_18);
            ifSetText(structParam(int2, Param.param_2560), Component.interface_1302.component_1302_19);
            ifSetHide(false, Component.interface_1302.component_1302_26);
            ifSetPosition(-150, int3, 1, 2, Component.interface_1302.component_1302_27);
        }
    }
}
