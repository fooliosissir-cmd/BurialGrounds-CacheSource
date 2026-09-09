/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,skillguide_legacy_tabs]

function skillguide_legacy_tabs(intArg0: number): [number, number] {
    let int1: Enum = enumOp(type_int, type_enum, Enum.skillguide_skills, intArg0);
    let int2: number = enumGetoutputcount(int1);
    let int3: number = 0;
    let int4: struct = -1;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;

    while (int3 < int2) {
        int4 = enumOp(type_int, type_struct, int1, int3);
        int7 = structParam(int4, Param.skillguide_filter);
        int5 = setBit(int5, 0);
        int5 = setBit(int5, int7);
        if (structParam(int4, Param.skillguide_is_milestone) == 1) {
            int5 = setBit(int5, 1);
        }
        if (structParam(int4, Param.skillguide_members) != 1) {
            int6 = setBit(int6, 0);
            int6 = setBit(int6, int7);
            if (structParam(int4, Param.skillguide_is_milestone) == 1) {
                int6 = setBit(int6, 1);
            }
        }
        int3 = int3 + 1;
    }
    return [int5, int6];
}
