/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4885

function cs2_4885(intArg0: component): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;

    if (clanProfileFind() == 1) {
        int2 = cs2_4964(intArg0);
        int3 = cs2_4971(int2);
        if (cs2_4886(int3) == 0) {
            return;
        }
        if (varbit_clan_custom_slot_1_destination_id_varp == int3 || varbit_clan_custom_slot_2_destination_id_varp == int3 || varbit_clan_custom_slot_3_destination_id_varp == int3) {
            return;
        }
        switch (int2) {
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 48:
                int1 = 0;
                break;
            default:
                int1 = 1;
                break;
        }
        if (varbit_clan_custom_stronghold_current_slot_varp > 0 && clan_custom_slot_disabled(varbit_clan_custom_stronghold_current_slot_varp) == 0) {
            switch (varbit_clan_custom_stronghold_current_slot_varp) {
                case 1:
                    varbit_clan_custom_slot_1_destination_id_varp = int3;
                    varbit_clan_custom_slot_1_hotspot_varp = int1;
                    break;
                case 2:
                    varbit_clan_custom_slot_2_destination_id_varp = int3;
                    varbit_clan_custom_slot_2_hotspot_varp = int1;
                    break;
                case 3:
                    varbit_clan_custom_slot_3_destination_id_varp = int3;
                    varbit_clan_custom_slot_3_hotspot_varp = int1;
                    break;
            }
            return;
        }
        if (pushVarClanBit<2148>() != int3 && pushVarClanBit<2165>() != int3 && pushVarClanBit<2182>() != int3) {
            if (varbit_clan_custom_stronghold_slot1_disabled == 0) {
                varbit_clan_custom_slot_1_destination_id_varp = int3;
                varbit_clan_custom_slot_1_hotspot_varp = int1;
                varbit_clan_custom_stronghold_current_slot_varp = 1;
                clan_custom_slot_tab_switch();
            } else if (varbit_clan_custom_stronghold_slot2_disabled == 0) {
                varbit_clan_custom_slot_2_destination_id_varp = int3;
                varbit_clan_custom_slot_2_hotspot_varp = int1;
                varbit_clan_custom_stronghold_current_slot_varp = 2;
                clan_custom_slot_tab_switch();
            } else if (varbit_clan_custom_stronghold_slot3_disabled == 0) {
                varbit_clan_custom_slot_3_destination_id_varp = int3;
                varbit_clan_custom_slot_3_hotspot_varp = int1;
                varbit_clan_custom_stronghold_current_slot_varp = 3;
                clan_custom_slot_tab_switch();
            }
        }
    }
}
