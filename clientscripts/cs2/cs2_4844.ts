/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4844

function cs2_4844(intArg0: number): void {
    switch (varbit_clan_custom_stronghold_current_slot_varp) {
        case 1:
            if (intArg0 == varbit_clan_custom_slot_1_tier_varp) {
                cs2_4846(intArg0);
            }
            break;
        case 2:
            if (intArg0 == varbit_clan_custom_slot_2_tier_varp) {
                cs2_4846(intArg0);
            }
            break;
        case 3:
            if (intArg0 == varbit_clan_custom_slot_3_tier_varp) {
                cs2_4846(intArg0);
            }
            break;
    }
}
