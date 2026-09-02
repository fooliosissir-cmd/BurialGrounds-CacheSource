/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3994

function cs2_3994(intArg0: number): number {
    let int1: struct = enumOp(type_int, type_struct, Enum.enum_3483, intArg0);
    let int2: number = structParam(int1, Param.param_1268);

    if (int2 == varbit_8576) {
        return 1;
    } else {
        return 0;
    }
}
