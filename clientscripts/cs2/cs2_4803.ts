/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4803

function cs2_4803(intArg0: number): void {
    let int1: Enum = cs2_4819(varbit_clan_custom_stronghold_current_slot_varp);
    let int2: number = enumOp(type_int, type_int, int1, intArg0);

    switch (varbit_clan_custom_stronghold_current_slot_varp) {
        case 1:
            if (int2 != varbit_clan_custom_slot_1_type_varp) {
                varbit_clan_custom_slot_1_type_varp = int2;
                varbit_clan_custom_slot_1_tier_varp = 1;
                varbit_clan_custom_slot_1_options1_varp = 0;
                varbit_clan_custom_slot_1_options2_varp = 0;
                varbit_clan_custom_slot_1_options3_varp = 0;
            }
            break;
        case 2:
            if (int2 != varbit_clan_custom_slot_2_type_varp) {
                varbit_clan_custom_slot_2_type_varp = int2;
                varbit_clan_custom_slot_2_tier_varp = 1;
                varbit_clan_custom_slot_2_options1_varp = 0;
                varbit_clan_custom_slot_2_options2_varp = 0;
                varbit_clan_custom_slot_2_options3_varp = 0;
            }
            break;
        case 3:
            if (int2 != varbit_clan_custom_slot_3_type_varp) {
                varbit_clan_custom_slot_3_type_varp = int2;
                varbit_clan_custom_slot_3_tier_varp = 1;
                varbit_clan_custom_slot_3_options1_varp = 0;
                varbit_clan_custom_slot_3_options2_varp = 0;
                varbit_clan_custom_slot_3_options3_varp = 0;
            }
            break;
    }
    let int3: number = 0;

    if (clan_custom_slot_disabled(varbit_clan_custom_stronghold_current_slot_varp) == 0) {
        int3 = 28 * (intArg0 - 1);
        ifSetHide(false, Component.interface_1258.component_1258_201);
        ifSetPosition(0, int3, 0, 0, Component.interface_1258.component_1258_201);
    }
    cs2_4846(1);
    cs2_4804();
}
