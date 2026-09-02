/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5459

function cs2_5459(intArg0: number): number {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;

    if (intArg0 == 1) {
        int1 = enumOp(type_int, type_int, Enum.dom_dom_fact_boss_climber_mod, varbit_dom_boss_assigned);
        int2 = enumOp(type_int, type_int, Enum.dom_dom_fact_round_climber_mod, varbit_dom_climber_prog);
        int3 = cs2_5460();
        int3 = int3 + 150;
        int4 = int1 + int2 + int3;
        int4 = varbit_dom_reward_points + int4;
    } else {
        int1 = enumOp(type_int, type_int, Enum.dom_dom_fact_boss_endurance_mod, varbit_dom_boss_assigned);
        if (varbit_dom_endurance_prog < 30) {
            int2 = enumOp(type_int, type_int, Enum.dom_dom_fact_round_endurance_mod, varbit_dom_endurance_prog);
        } else {
            int2 = enumOp(type_int, type_int, Enum.dom_dom_fact_round_endurance_mod, 15);
        }
        int4 = int1 + int2 + int3;
        int4 = varbit_dom_reward_points + int4;
    }
    return int4;
}
