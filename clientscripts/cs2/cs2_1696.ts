/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1696

function cs2_1696(intArg0: stat): number {
    switch (intArg0) {
        case 0:
            if (varbit_curse_leech_attack > 0) {
                return 4;
            } else if (varbit_curse_sap_warrior > 0) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 2:
            if (varbit_curse_leech_strength > 0) {
                return 4;
            } else if (varbit_curse_sap_warrior > 0) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 1:
            if (varbit_curse_leech_defence > 0) {
                return 4;
            } else if (varbit_curse_sap_warrior > 0 || varbit_curse_sap_ranger > 0 || varbit_curse_sap_mage > 0) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 4:
            if (varbit_curse_leech_ranged > 0) {
                return 4;
            } else if (varbit_curse_sap_ranger > 0) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 6:
            if (varbit_curse_leech_magic > 0) {
                return 4;
            } else if (varbit_curse_sap_mage > 0) {
                return 1;
            } else {
                return 0;
            }
            break;
    }
    return 0;
}
