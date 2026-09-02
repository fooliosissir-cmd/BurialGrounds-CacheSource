/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ql4_quest_requirements]

function ql4_quest_requirements(intArg0: number): number {
    let int1: struct = enumOp(type_int, type_struct, Enum.enum_2252, intArg0);

    return ql4_quest_requirements_cache(int1);
}
