/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2250

function cs2_2250(intArg0: number): void {
    let int1: number = intArg0 / 5;
    let int2: Enum = Enum.enum_3016;

    if (mapMembers() == 1) {
        int2 = Enum.enum_3015;
    }

    if ((mapMembers() == 1 && int1 == 41) || (mapMembers() == 0 && int1 == 17)) {
        ifSetHide(true, Component.interface_940.component_940_42);
        ifSetText(structParam(enumOp(type_int, type_struct, int2, int1), Param.param_1078), Component.interface_940.component_940_40);
        ifSetHide(false, Component.interface_940.component_940_43);
        ifSetText(ocName(structParam(enumOp(type_int, type_struct, int2, int1), Param.param_1070)), Component.interface_940.component_940_43);
        ifSetHide(false, Component.interface_940.component_940_44);
        ifSetObject(structParam(enumOp(type_int, type_struct, int2, int1), Param.param_1070), -1, Component.interface_940.component_940_44);
        ifSetHide(false, Component.interface_940.component_940_41);
        ifSetHide(false, Component.interface_940.component_940_66);
        ifSetHide(false, Component.interface_940.component_940_64);
        ifSetHide(false, Component.interface_940.component_940_62);
        ifSetHide(false, Component.interface_940.component_940_63);
        ifSetHide(true, Component.interface_940.component_940_67);
        ifSetHide(true, Component.interface_940.component_940_68);
        ifSetText("1 : 1xp", Component.interface_940.component_940_62);
    } else if (statBase(24) < structParam(enumOp(type_int, type_struct, int2, int1), Param.param_1071)) {
        ifSetHide(true, Component.interface_940.component_940_42);
        ifSetText(structParam(enumOp(type_int, type_struct, int2, int1), Param.param_1078), Component.interface_940.component_940_40);
        ifSetHide(false, Component.interface_940.component_940_43);
        ifSetText(ocName(structParam(enumOp(type_int, type_struct, int2, int1), Param.param_1070)), Component.interface_940.component_940_43);
        ifSetHide(false, Component.interface_940.component_940_44);
        ifSetObject(structParam(enumOp(type_int, type_struct, int2, int1), Param.param_1070), -1, Component.interface_940.component_940_44);
        ifSetHide(false, Component.interface_940.component_940_41);
        ifSetHide(true, Component.interface_940.component_940_66);
        ifSetHide(true, Component.interface_940.component_940_64);
        ifSetHide(true, Component.interface_940.component_940_62);
        ifSetHide(true, Component.interface_940.component_940_63);
        ifSetHide(false, Component.interface_940.component_940_67);
        ifSetHide(false, Component.interface_940.component_940_68);
        ifSetText("Dungeoneering " + tostring(structParam(enumOp(type_int, type_struct, int2, int1), Param.param_1071)) + " required", Component.interface_940.component_940_68);
    } else {
        ifSetHide(true, Component.interface_940.component_940_42);
        ifSetText(structParam(enumOp(type_int, type_struct, int2, int1), Param.param_1078), Component.interface_940.component_940_40);
        ifSetHide(false, Component.interface_940.component_940_43);
        ifSetText(ocName(structParam(enumOp(type_int, type_struct, int2, int1), Param.param_1070)), Component.interface_940.component_940_43);
        ifSetHide(false, Component.interface_940.component_940_44);
        ifSetObject(structParam(enumOp(type_int, type_struct, int2, int1), Param.param_1070), -1, Component.interface_940.component_940_44);
        ifSetHide(false, Component.interface_940.component_940_41);
        ifSetHide(false, Component.interface_940.component_940_66);
        ifSetHide(false, Component.interface_940.component_940_64);
        ifSetHide(false, Component.interface_940.component_940_62);
        ifSetHide(false, Component.interface_940.component_940_63);
        ifSetHide(true, Component.interface_940.component_940_67);
        ifSetHide(true, Component.interface_940.component_940_68);
        ifSetText(tostring(structParam(enumOp(type_int, type_struct, int2, int1), Param.param_1072)), Component.interface_940.component_940_62);
    }
}
