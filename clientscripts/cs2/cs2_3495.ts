/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3495

function cs2_3495(intArg0: component, intArg1: number): void {
    let str0: string = "";
    let str1: string = "";
    let int2: component = Component.interface_993.component_993_302;

    switch (varc_rand_player_tab) {
        case 1:
            if (intArg0 == Component.interface_993.component_993_134) {
                str0 = enumOp(type_int, type_string, Enum.rand_ring_tank_enum, varbit_rand_tank_ring);
                str1 = enumOp(type_int, type_string, Enum.rand_ring_tank_enum, varbit_rand_tank_ring + 1);
            } else if (intArg0 == Component.interface_993.component_993_41) {
                str0 = enumOp(type_int, type_string, Enum.enum_3090, varbit_rand_tactician_ring);
                str1 = enumOp(type_int, type_string, Enum.enum_3090, varbit_rand_tactician_ring + 1);
                int2 = Component.interface_993.component_993_301;
            } else if (intArg0 == Component.interface_993.component_993_83) {
                str0 = enumOp(type_int, type_string, Enum.enum_3091, varbit_rand_berserker_ring);
                str1 = enumOp(type_int, type_string, Enum.enum_3091, varbit_rand_berserker_ring + 1);
                int2 = Component.interface_993.component_993_300;
            }
            break;
        case 2:
            if (intArg0 == Component.interface_993.component_993_134) {
                str0 = enumOp(type_int, type_string, Enum.enum_3092, varbit_rand_sniper_ring);
                str1 = enumOp(type_int, type_string, Enum.enum_3092, varbit_rand_sniper_ring + 1);
            } else if (intArg0 == Component.interface_993.component_993_41) {
                str0 = enumOp(type_int, type_string, Enum.enum_3093, varbit_rand_keeneye_ring);
                str1 = enumOp(type_int, type_string, Enum.enum_3093, varbit_rand_keeneye_ring + 1);
                int2 = Component.interface_993.component_993_301;
            } else if (intArg0 == Component.interface_993.component_993_83) {
                str0 = enumOp(type_int, type_string, Enum.enum_3094, varbit_rand_savage_ring);
                str1 = enumOp(type_int, type_string, Enum.enum_3094, varbit_rand_savage_ring + 1);
                int2 = Component.interface_993.component_993_300;
            }
            break;
        case 3:
            if (intArg0 == Component.interface_993.component_993_134) {
                str0 = enumOp(type_int, type_string, Enum.enum_3095, varbit_rand_burner_ring);
                str1 = enumOp(type_int, type_string, Enum.enum_3095, varbit_rand_burner_ring + 1);
            } else if (intArg0 == Component.interface_993.component_993_41) {
                str0 = enumOp(type_int, type_string, Enum.enum_3096, varbit_rand_blaster_ring);
                str1 = enumOp(type_int, type_string, Enum.enum_3096, varbit_rand_blaster_ring + 1);
                int2 = Component.interface_993.component_993_301;
            } else if (intArg0 == Component.interface_993.component_993_83) {
                str0 = enumOp(type_int, type_string, Enum.enum_3097, varbit_rand_burster_ring);
                str1 = enumOp(type_int, type_string, Enum.enum_3097, varbit_rand_burster_ring + 1);
                int2 = Component.interface_993.component_993_300;
            }
            break;
        case 4:
            if (intArg0 == Component.interface_993.component_993_134) {
                str0 = enumOp(type_int, type_string, Enum.rand_ring_medic_enum, varbit_rand_medic_ring);
                str1 = enumOp(type_int, type_string, Enum.rand_ring_medic_enum, varbit_rand_medic_ring + 1);
            } else if (intArg0 == Component.interface_993.component_993_41) {
                str0 = enumOp(type_int, type_string, Enum.rand_ring_gatherer_enum, varbit_rand_gatherer_ring);
                str1 = enumOp(type_int, type_string, Enum.rand_ring_gatherer_enum, varbit_rand_gatherer_ring + 1);
                int2 = Component.interface_993.component_993_301;
            } else if (intArg0 == Component.interface_993.component_993_83) {
                str0 = enumOp(type_int, type_string, Enum.rand_ring_producer_enum, varbit_rand_producer_ring);
                str1 = enumOp(type_int, type_string, Enum.rand_ring_producer_enum, varbit_rand_producer_ring + 1);
                int2 = Component.interface_993.component_993_300;
            }
            break;
    }
    let str2: string = "Current - " + str0 + "<br>" + "Next - " + str1;
    cs2_569(intArg0, intArg1, int2, str2, 25, ifGetWidth(ifGetLayer(int2)));
}
