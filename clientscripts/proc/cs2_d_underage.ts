/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,cs2_d_underage]

function cs2_d_underage(): void {
    let int0: component = -1;
    let int1: component = -1;
    let int2: component = -1;

    switch (varbit_clan_custom_stronghold_current_slot_varp) {
        case 1:
            int0 = cs2_4817(varbit_clan_custom_slot_1_tier_varp, 1);
            int1 = cs2_4817(varbit_clan_custom_slot_1_tier_varp, 2);
            int2 = cs2_4817(varbit_clan_custom_slot_1_tier_varp, 3);
            break;
        case 2:
            int0 = cs2_4817(varbit_clan_custom_slot_2_tier_varp, 1);
            int1 = cs2_4817(varbit_clan_custom_slot_2_tier_varp, 2);
            int2 = cs2_4817(varbit_clan_custom_slot_2_tier_varp, 3);
            break;
        case 3:
            int0 = cs2_4817(varbit_clan_custom_slot_3_tier_varp, 1);
            int1 = cs2_4817(varbit_clan_custom_slot_3_tier_varp, 2);
            int2 = cs2_4817(varbit_clan_custom_slot_3_tier_varp, 3);
            break;
    }
    let int3: number = ifGetNextSubId(int0) - 1;

    while (int3 >= 0) {
        if (ccFind(int0, int3) == 1) {
            ccSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_5));
        }
        int3 = int3 - 1;
    }
}
