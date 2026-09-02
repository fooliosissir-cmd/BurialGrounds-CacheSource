/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5117

function cs2_5117(intArg0: number, intArg1: number): struct {
    let int2: Enum = enumOp(type_int, type_enum, Enum.citadel_npc_layout_index_to_tier_enum, intArg0);

    return enumOp(type_int, type_struct, int2, intArg1);
}
