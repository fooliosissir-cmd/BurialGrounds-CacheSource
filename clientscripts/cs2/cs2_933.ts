/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_933

function cs2_933(intArg0: obj): number {
    switch (ocParam(intArg0, Param.wear_requires_special)) {
        case 1:
            if (varbit_hundred_subquest_tally < ocParam(intArg0, Param.wear_requires_special_value)) {
                return 0;
            }
            break;
        case 2:
            if (varbit_brut_smith_hasta < 2) {
                return 0;
            }
            break;
        case 3:
            if (varbit_dsd_quest < 10) {
                return 0;
            }
            break;
        case 4:
            if (varbit_myreque_2_quest < 280) {
                return 0;
            }
            break;
        case 5:
            if (varbit_hundred_main_quest_var < 4) {
                return 0;
            }
            break;
        case 6:
            if (varbit_slice_quest < 8) {
                return 0;
            }
            break;
        case 7:
            if (varbit_elem_4_main < 7) {
                return 0;
            }
            break;
        default:
            return 1;
    }
    return -1;
}
