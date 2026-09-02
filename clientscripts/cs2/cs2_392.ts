/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_392

function cs2_392(intArg0: struct, intArg1: boolean): void {
    if (intArg0 == -1) {
        intArg0 = Struct.struct_1112;
    }
    ifSetModel(structParam(intArg0, Param.param_1166), Component.interface_1028.component_1028_134);

    if (intArg1 == true) {
        ifSetModelAnim(structParam(intArg0, Param.param_1165), Component.interface_1028.component_1028_133);
        ifSetModelAnim(structParam(intArg0, Param.param_1168), Component.interface_1028.component_1028_134);
    } else {
        ifSetModelAnim(structParam(intArg0, Param.param_1164), Component.interface_1028.component_1028_133);
        ifSetModelAnim(structParam(intArg0, Param.param_1167), Component.interface_1028.component_1028_134);
    }
}
