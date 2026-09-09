/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_12

function cs2_12(intArg0: number): [string, number] {
    return [enumOp(type_int, type_string, Enum.statstring, intArg0), enumGetoutputcount(enumOp(type_int, type_enum, Enum.skillguide_skill_filters, intArg0))];
}
