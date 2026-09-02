/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4841

function cs2_4841(intArg0: number): [number, number, number, number, number, number] {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;

    if (clanProfileFind() == 1) {
        switch (intArg0) {
            case 1:
                int3 = varbit_clan_custom_slot_1_destination_id_varp;
                int1 = varbit_clan_custom_slot_1_type_varp;
                int2 = varbit_clan_custom_slot_1_tier_varp;
                int4 = varbit_clan_custom_slot_1_options1_varp;
                int5 = varbit_clan_custom_slot_1_options2_varp;
                int6 = varbit_clan_custom_slot_1_options3_varp;
                break;
            case 2:
                int3 = varbit_clan_custom_slot_2_destination_id_varp;
                int1 = varbit_clan_custom_slot_2_type_varp;
                int2 = varbit_clan_custom_slot_2_tier_varp;
                int4 = varbit_clan_custom_slot_2_options1_varp;
                int5 = varbit_clan_custom_slot_2_options2_varp;
                int6 = varbit_clan_custom_slot_2_options3_varp;
                break;
            case 3:
                int3 = varbit_clan_custom_slot_3_destination_id_varp;
                int1 = varbit_clan_custom_slot_3_type_varp;
                int2 = varbit_clan_custom_slot_3_tier_varp;
                int4 = varbit_clan_custom_slot_3_options1_varp;
                int5 = varbit_clan_custom_slot_3_options2_varp;
                int6 = varbit_clan_custom_slot_3_options3_varp;
                break;
        }
    }
    let int7: number = 1;
    let int8: number = 1;
    let int9: Enum = -1;
    let int10: struct = -1;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;
    let int17: Enum = enumOp(type_int, type_enum, Enum.clan_custom_category_enums, int1);

    if (int17 == -1) {
        return [0, 0, 0, 0, 0, 0];
    }
    let int18: Enum = enumOp(type_int, type_enum, int17, int2);

    if (int18 == -1) {
        return [0, 0, 0, 0, 0, 0];
    }

    while (int7 <= 3) {
        int9 = enumOp(type_int, type_enum, int18, int7);
        if (int9 != -1) {
            switch (int7) {
                case 1:
                    int10 = enumOp(type_int, type_struct, int9, int4);
                    break;
                case 2:
                    int10 = enumOp(type_int, type_struct, int9, int5);
                    break;
                case 3:
                    int10 = enumOp(type_int, type_struct, int9, int6);
                    break;
            }
            if (int10 != -1) {
                int11 = structParam(int10, Param.clan_custom_if_resource_type1);
                int14 = int14 + structParam(int10, Param.clan_custom_if_resource_cost1);
                int12 = structParam(int10, Param.clan_custom_if_resource_type2);
                int15 = int15 + structParam(int10, Param.clan_custom_if_resource_cost2);
                int13 = structParam(int10, Param.clan_custom_if_resource_type3);
                int16 = int16 + structParam(int10, Param.clan_custom_if_resource_cost3);
            }
        }
        int9 = -1;
        int7 = int7 + 1;
    }
    return [int11, int14, int12, int15, int13, int16];
}
