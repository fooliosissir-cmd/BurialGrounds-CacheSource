/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6340

function cs2_6340(intArg0: number): number {
    switch (intArg0) {
        case 0:
        case 1:
            if (varbit_carni < 20 || varbit_carni >= 25) {
                return 0;
            }
            break;
        case 2:
            if (varbit_carni < 20 || varbit_carni >= 42) {
                return 0;
            }
            break;
        case 11:
            if (varbit_carni < 20 || varbit_carni >= 53 || varbit_carni == 51) {
                return 0;
            }
            break;
        case 3:
            if (varbit_carni < 100) {
                return 0;
            }
            break;
        case 10:
            if (varbit_carni < 100 || invTotal(Inv.inv, Obj.carni_treasurechest_keyring) > 0) {
                return 0;
            }
            break;
        case 4:
            if (varbit_carni < 100 || varbit_carni_rewards_sweets == 1) {
                return 0;
            }
            break;
        case 5:
            if (varbit_carni < 100 || varbit_carni_riches != 1 || varbit_carni_reward_usedriches == 1) {
                return 0;
            }
            break;
        case 6:
            if (varbit_carni < 100 || varbit_carni_riches < 2 || varbit_carni_reward_usedriches == 1) {
                return 0;
            }
            break;
        case 7:
            if (varbit_carni < 100 || varbit_carni_rewards_oakplanks == 1) {
                return 0;
            }
            break;
        case 8:
            if (varbit_carni < 100 || varbit_carni_rewards_teakplanks == 1) {
                return 0;
            }
            break;
        case 9:
            if (varbit_carni < 100 || varbit_carni_rewards_mahoganyplanks == 1) {
                return 0;
            }
            break;
        case 12:
            if (varbit_carni < 100 || varbit_carni_rewards_lamp1 == 1) {
                return 0;
            }
            break;
        case 13:
            if (varbit_carni < 100 || varbit_carni_rewards_lamp2 == 1) {
                return 0;
            }
            break;
        default:
            return 0;
    }
    return 1;
}
