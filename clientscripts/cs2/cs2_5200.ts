/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5200

function cs2_5200(intArg0: number): number {
    switch (intArg0) {
        case 1:
            if (varbit_lumbcat_quest >= 60) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 2:
            if (varbit_motwl_main >= 60) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 3:
            if (varbit_vampire_quest >= 3) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 4:
            if (varc_hcape_task_count >= 56) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 5:
            if (varbit_romcom_quest >= 100) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 6:
            if (varp_phoenixgang >= 7 || varp_146 >= 4) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 7:
            if (varbit_demonslayer_main >= 3) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 8:
            if (varc_hcape_task_count >= 17) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 9:
            if (varbit_gobdip_main >= 6) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 10:
            if (varp_122 >= 7) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 11:
            if (varp_130 >= 4) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 12:
            if (varc_hcape_task_count >= 11) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 14:
            if (varp_176 >= 10) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 15:
            if (varbit_tg11_progress >= 25) {
                return 1;
            } else {
                return 0;
            }
            break;
    }
    return 0;
}
