/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_custom_validate_selected]

function clan_custom_validate_selected(intArg0: number): number {
    let int1: Enum = -1;
    let int2: Enum = -1;
    let int3: Enum = -1;
    let int4: Enum = -1;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;

    switch (intArg0) {
        case 1:
            int5 = varbit_clan_custom_slot_1_type_varp;
            int6 = varbit_clan_custom_slot_1_tier_varp;
            int8 = varbit_clan_custom_slot_1_options1_varp;
            int9 = varbit_clan_custom_slot_1_options2_varp;
            int10 = varbit_clan_custom_slot_1_options3_varp;
            int11 = varbit_clan_custom_slot_1_resource_id_varp;
            break;
        case 2:
            int5 = varbit_clan_custom_slot_2_type_varp;
            int6 = varbit_clan_custom_slot_2_tier_varp;
            int8 = varbit_clan_custom_slot_2_options1_varp;
            int9 = varbit_clan_custom_slot_2_options2_varp;
            int10 = varbit_clan_custom_slot_2_options3_varp;
            int11 = varbit_clan_custom_slot_2_resource_id_varp;
            break;
        case 3:
            int5 = varbit_clan_custom_slot_3_type_varp;
            int6 = varbit_clan_custom_slot_3_tier_varp;
            int8 = varbit_clan_custom_slot_3_options1_varp;
            int9 = varbit_clan_custom_slot_3_options2_varp;
            int10 = varbit_clan_custom_slot_3_options3_varp;
            int11 = varbit_clan_custom_slot_3_resource_id_varp;
            break;
    }

    if (int11 == 1) {
        return 5;
    }

    if (int5 == 0) {
        return -1;
    }
    let int12: Enum = enumOp(type_int, type_enum, Enum.clan_custom_category_enums, int5);

    if (int12 == -1) {
        return -1;
    }

    if (int6 > 0 && int6 <= 3) {
        int1 = enumOp(type_int, type_enum, int12, int6);
        if (int1 != -1) {
            int2 = enumOp(type_int, type_enum, int1, 1);
            int3 = enumOp(type_int, type_enum, int1, 2);
            int4 = enumOp(type_int, type_enum, int1, 3);
            if (int2 != -1) {
                if (int8 > 0 && int8 <= enumGetoutputcount(int2)) {
                    if (pushVarClanBit<2580>() >= structParam(enumOp(type_int, type_struct, int2, int8), Param.clan_custom_if_tier)) {
                        if (int3 != -1) {
                            if (int9 > 0 && int9 <= enumGetoutputcount(int3)) {
                                if (pushVarClanBit<2580>() < structParam(enumOp(type_int, type_struct, int3, int9), Param.clan_custom_if_tier)) {
                                    return 2;
                                }
                            } else {
                                return 3;
                            }
                        }
                        if (int4 != -1) {
                            if (int10 > 0 && int10 <= enumGetoutputcount(int4)) {
                                if (pushVarClanBit<2580>() < structParam(enumOp(type_int, type_struct, int4, int10), Param.clan_custom_if_tier)) {
                                    return 2;
                                }
                            } else {
                                return 3;
                            }
                        }
                        return 1;
                    } else {
                        return 2;
                    }
                } else {
                    return 3;
                }
            }
        }
    }
    return -1;
}
