/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1710

function cs2_1710(intArg0: stat): number {
    let int1: number = cs2_1711(intArg0);

    if (varbit_6839 > 0) {
        switch (intArg0) {
            case 0:
                int1 = int1 + 15;
                int1 = int1 + cs2_1714(intArg0, varbit_curse_turmoil_enemy_adjust_attack);
                break;
            case 2:
                int1 = int1 + 23;
                int1 = int1 + cs2_1714(intArg0, varbit_curse_turmoil_enemy_adjust_strength);
                break;
            case 1:
                int1 = int1 + 15;
                int1 = int1 + cs2_1714(intArg0, varbit_curse_turmoil_enemy_adjust_defence);
                break;
        }
    }
    return int1;
}
