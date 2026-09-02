/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2174

function cs2_2174(): void {
    let int0: number = 0;
    let int1: number = enumGetoutputcount(Enum.fishcomp_reward_slot_index_to_blackout_component);
    let int2: boolean = true;

    while (int0 < int1) {
        if (cs2_2189(varbit_fishcomp_reward_tackle_box_level, int0) == 1) {
            int2 = true;
        } else {
            int2 = false;
        }
        ifSetHide(int2, enumOp(type_int, type_component, Enum.fishcomp_reward_slot_index_to_blackout_component, int0));
        int0 = int0 + 1;
    }
}
