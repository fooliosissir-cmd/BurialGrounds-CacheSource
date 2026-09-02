/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_reviewoptions]

function graphics_options_reviewoptions(intArg0: number): [number, number] {
    let int1: struct = -1;
    let int2: Enum = -1;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = enumGetoutputcount(Enum.enum_201) - 1;

    while (int6 >= 0) {
        int1 = enumOp(type_int, type_struct, Enum.enum_201, int6);
        int3 = int3 + 1;
        int2 = structParam(int1, Param.param_683);
        int5 = enumGetoutputcount(int2) - 1;
        while (int5 >= 0) {
            int4 = max(stringWidth(enumOp(type_int, type_string, int2, int5), Graphic.p11_full), int4);
            int5 = int5 - 1;
        }
        int6 = int6 - 1;
    }
    return [int3, int4];
}
