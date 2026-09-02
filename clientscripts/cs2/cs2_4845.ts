/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4845

function cs2_4845(intArg0: number): void {
    if (clan_custom_slot_disabled(varbit_clan_custom_stronghold_current_slot_varp) == 1) {
        return;
    }

    switch (varbit_clan_custom_stronghold_current_slot_varp) {
        case 1:
            varbit_clan_custom_slot_1_tier_varp = intArg0;
            break;
        case 2:
            varbit_clan_custom_slot_2_tier_varp = intArg0;
            break;
        case 3:
            varbit_clan_custom_slot_3_tier_varp = intArg0;
            break;
    }
    cs2_4846(intArg0);
}
