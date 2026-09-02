/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6408

function cs2_6408(): void {
    if (varbit_smki_missile_make == 1) {
        cs2_6414(85721124, 1);
    } else if (varbit_smki_slayer_points < 300) {
        cs2_6414(85721124, 0);
    }

    if (varbit_smki_ring_make == 1) {
        cs2_6414(85721126, 1);
    } else if (varbit_smki_slayer_points < 300) {
        cs2_6414(85721126, 0);
    }

    if (varbit_smki_head_make == 1) {
        cs2_6414(85721128, 1);
    } else if (varbit_smki_slayer_points < 400) {
        cs2_6414(85721128, 0);
    }

    if (varbit_smki_kuradal_aquanite == 1) {
        cs2_6414(85721325, 1);
    } else if (varbit_smki_slayer_points < 50) {
        cs2_6414(85721325, 0);
    }

    if (varbit_smki_autosmash_gargoyle == 1) {
        cs2_6414(85721328, 1);
    } else if (varbit_smki_slayer_points < 400) {
        cs2_6414(85721328, 0);
    }

    if (varbit_smki_ice_strykewyrm_nofire == 1) {
        cs2_6414(85721330, 1);
    } else if (varbit_smki_slayer_points < 2000) {
        cs2_6414(85721330, 0);
    }
}
