/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ss_update_button]

function ss_update_button(intArg0: number): void {
    switch (intArg0) {
        case 85721102:
        case 85721158:
        case 85721160:
        case 85721162:
        case 85721164:
            cs2_6406();
            break;
        case 85721124:
            if (varbit_smki_missile_make == 1) {
                cs2_6408();
                cs2_6414(intArg0, 1);
            }
            break;
        case 85721126:
            if (varbit_smki_ring_make == 1) {
                cs2_6408();
                cs2_6414(intArg0, 1);
            }
            break;
        case 85721128:
            if (varbit_smki_head_make == 1) {
                cs2_6408();
                cs2_6414(intArg0, 1);
            }
            break;
        case 85721325:
            if (varbit_smki_kuradal_aquanite == 1) {
                cs2_6408();
                cs2_6414(intArg0, 1);
            }
            break;
        case 85721328:
            if (varbit_smki_autosmash_gargoyle == 1) {
                cs2_6408();
                cs2_6414(intArg0, 1);
            }
            break;
        case 85721330:
            if (varbit_smki_ice_strykewyrm_nofire == 1) {
                cs2_6408();
                cs2_6414(intArg0, 1);
            }
            break;
        case 85721100:
            if (varbit_ss_bought_food == 1) {
                cs2_6413();
                cs2_6414(intArg0, 1);
            }
            break;
        case 85721560:
            if (testBit(varp_2381, 33 % 32) == 1) {
                cs2_6413();
                cs2_6414(intArg0, 1);
            }
            break;
        case 85721581:
            if (varbit_ss_bought_potion == 1) {
                cs2_6413();
                cs2_6414(intArg0, 1);
            }
            break;
        case 85721583:
            if (testBit(varp_2381, 34 % 32) == 1) {
                cs2_6413();
                cs2_6414(intArg0, 1);
            }
            break;
        case 85721107:
            if (varp_394 == 0) {
                cs2_6410();
                cs2_6414(intArg0, 1);
            }
            break;
        case 85721109:
            if (varp_394 == 0) {
                cs2_6410();
                cs2_6414(intArg0, 1);
            }
            break;
        case 85721111:
            if (varbit_smki_ignore_flag_1 == 0) {
                cs2_6410();
                cs2_6415(intArg0);
            }
            break;
        case 85721113:
            if (varbit_smki_ignore_flag_2 == 0) {
                cs2_6410();
                cs2_6415(intArg0);
            }
            break;
        case 85721115:
            if (varbit_smki_ignore_flag_3 == 0) {
                cs2_6410();
                cs2_6415(intArg0);
            }
            break;
        case 85721117:
            if (varbit_smki_ignore_flag_4 == 0) {
                cs2_6410();
                cs2_6415(intArg0);
            }
            break;
        case 85721119:
            if (varbit_smki_ignore_flag_5 == 0) {
                cs2_6410();
                cs2_6415(intArg0);
            }
            break;
        case 85721121:
            if (varbit_smki_ignore_flag_6 == 0) {
                cs2_6410();
                cs2_6415(intArg0);
            }
            break;
    }
}
