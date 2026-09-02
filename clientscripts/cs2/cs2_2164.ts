/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2164

function cs2_2164(intArg0: number): void {
    let int1: struct = enumOp(type_int, type_struct, Enum.ql4_intstruct_lists, intArg0);
    let int2: number = structParam(int1, Param.param_61);
    let int3: component = structParam(int1, Param.param_152);
    let int4: number = 0;

    while (int4 < varc_273 + 10) {
        if (ccFind(int3, int4) == 1) {
            ccSetPosition(0, 0, 0, 0);
            ccSetHide(true);
        }
        int4 = int4 + 1;
    }
}
