/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2358

function cs2_2358(intArg0: component): void {
    let int1: number = enumOp(type_component, type_int, Enum.vkq3_block_target_index, intArg0);
    let int2: number = enumOp(type_component, type_int, Enum.vkq3_block_target_grid, intArg0);
    let int3: number = 1;

    if (varp_vkq3_active_piece == -1) {
        if (int2 == 1) {
            int3 = testBit(varp_vkq3_grid_1, int1);
        } else if (int2 == 2) {
            int3 = testBit(varp_vkq3_grid_2, int1);
        } else {
            int3 = testBit(varp_vkq3_grid_3, int1);
        }
        if (int3 == 0) {
            ifSendtoback(intArg0);
        }
        return;
    }
    let int4: struct = enumOp(type_component, type_struct, Enum.enum_704, varp_vkq3_active_piece);
    let int5: number = structParam(int4, Param.vkq3_block_defaultx);
    let int6: number = structParam(int4, Param.vkq3_block_defaulty);
    let int7: component = enumOp(type_component, type_component, Enum.enum_1592, varp_vkq3_active_piece);
    ifSetPosition(int5, int6, 0, 0, int7);
}
