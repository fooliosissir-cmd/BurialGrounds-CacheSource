/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1992

function cs2_1992(): number {
    let int0: number = varbit_atseer_burn_magic_log + varbit_atseer_teleport_ranging_guild + varbit_atseer_use_fairy_ring + varbit_atseer_use_piety_prayer + varbit_atseer_fletch_magic_shortbow + varbit_atseer_high_alch_magic_shortbow + varbit_atseer_grapple_shortcut;

    if (varbit_atseer_cut_yew_trees == 5) {
        int0 = int0 + 1;
    }

    if (varbit_atseer_catch_shark == 5) {
        int0 = int0 + 1;
    }

    if (varbit_atseer_cook_shark == 5) {
        int0 = int0 + 1;
    }

    if (varbit_atseer_charge_orbs == 5) {
        int0 = int0 + 1;
    }
    return int0;
}
