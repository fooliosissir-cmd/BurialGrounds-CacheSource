/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_13

function cs2_13(intArg0: number, intArg1: number, intArg2: number, intArg3: number): [string, number] {
    let int4: Enum = enumOp(type_int, type_enum, Enum.skillguide_skill_filters, intArg0);
    if (intArg1 < 0 || intArg1 >= enumGetoutputcount(int4)) {
        return ["", -1];
    }
    let int5: number = 0;

    if (testBit(intArg2, intArg1) == 1 && testBit(intArg3, intArg1) == 0) {
        int5 = 1;
    }
    return [enumOp(type_int, type_string, int4, intArg1), int5];
}
