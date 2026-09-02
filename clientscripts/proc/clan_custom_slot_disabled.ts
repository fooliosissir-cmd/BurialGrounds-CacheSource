/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_custom_slot_disabled]

function clan_custom_slot_disabled(intArg0: number): number {
    switch (varbit_clan_custom_stronghold_current_slot_varp) {
        case 1:
            if (varbit_clan_custom_stronghold_slot1_disabled == 1) {
                return 1;
            }
            break;
        case 2:
            if (varbit_clan_custom_stronghold_slot2_disabled == 1) {
                return 1;
            }
            break;
        case 3:
            if (varbit_clan_custom_stronghold_slot3_disabled == 1) {
                return 1;
            }
            break;
    }
    return 0;
}
