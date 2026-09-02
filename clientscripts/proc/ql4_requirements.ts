/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ql4_requirements]

function ql4_requirements(intArg0: number, intArg1: number): number {
    let int2: struct = enumOp(type_int, type_struct, Enum.ql4_intstruct_lists, intArg0);
    let int3: struct = enumOp(type_int, type_struct, structParam(int2, Param.param_61), intArg1);

    varc_ql4_comlevel = comlevel();
    return ql4_requirements_cache(int3);
}
