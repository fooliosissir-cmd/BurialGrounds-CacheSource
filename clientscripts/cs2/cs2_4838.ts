/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4838

function cs2_4838(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 1;

    switch (varbit_clan_custom_stronghold_current_slot_varp) {
        case 1:
            int0 = varbit_clan_custom_slot_1_options1_varp;
            int1 = varbit_clan_custom_slot_1_options2_varp;
            int2 = varbit_clan_custom_slot_1_options3_varp;
            int3 = varbit_clan_custom_slot_1_tier_varp;
            break;
        case 2:
            int0 = varbit_clan_custom_slot_2_options1_varp;
            int1 = varbit_clan_custom_slot_2_options2_varp;
            int2 = varbit_clan_custom_slot_2_options3_varp;
            int3 = varbit_clan_custom_slot_2_tier_varp;
            break;
        case 3:
            int0 = varbit_clan_custom_slot_3_options1_varp;
            int1 = varbit_clan_custom_slot_3_options2_varp;
            int2 = varbit_clan_custom_slot_3_options3_varp;
            int3 = varbit_clan_custom_slot_3_tier_varp;
            break;
    }
    let int4: component = cs2_4815(int3, 1);

    if (int4 != -1) {
        cs2_4839(int4, (int0 - 1) * 27);
    }
    int4 = cs2_4815(int3, 2);

    if (int4 != -1) {
        cs2_4839(int4, (int1 - 1) * 27);
    }
    int4 = cs2_4815(int3, 3);

    if (int4 != -1) {
        cs2_4839(int4, (int2 - 1) * 27);
    }
}
