/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2180

function cs2_2180(intArg0: number): void {
    let int1: struct = enumOp(type_int, type_struct, Enum.enum_2252, intArg0);

    if (ccFind(Component.interface_190.component_190_15, intArg0) == 1) {
        ccSetText(structParam(int1, Param.param_845));
        ccSetOnTimer(noHook(""));
    }
}
