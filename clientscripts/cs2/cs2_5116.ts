/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5116

function cs2_5116(intArg0: number, intArg1: number): struct {
    let int2: Enum = Enum.citadel_layout_index_to_tier_enum;
    let int3: Enum = enumOp(type_int, type_enum, int2, intArg0);

    return enumOp(type_int, type_struct, int3, intArg1);
}
