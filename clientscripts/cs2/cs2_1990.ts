/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1990

function cs2_1990(): number {
    let int0: number = varbit_atseer_walk_around_statue + varbit_atseer_cuppa + varbit_atseer_poison_arthur + varbit_atseer_use_churn + varbit_atseer_buy_candle + varbit_atseer_fish_mackerel + varbit_atseer_altar + varbit_atseer_plant_jute;

    if (varbit_atseer_pick_flax == 5) {
        int0 = int0 + 1;
    }

    if (varbit_atseer_spin_bow_string == 5) {
        int0 = int0 + 1;
    }

    if (varbit_atseer_fill_pots == 5) {
        int0 = int0 + 1;
    }

    if (varbit_atseer_ply_with_cider == 5) {
        int0 = int0 + 1;
    }
    return int0;
}
