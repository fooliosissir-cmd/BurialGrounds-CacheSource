/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1713

function cs2_1713(intArg0: stat): number {
    let int1: number = 0;

    if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
        int1 = scale(statBase(intArg0), 100, 5);
    }

    switch (intArg0) {
        case 0:
            if (varbit_curse_leech_attack == 1) {
                return cs2_1714(0, cs2_1718(0, int1 + 5));
            }
            break;
        case 2:
            if (varbit_curse_leech_strength == 1) {
                return cs2_1714(2, cs2_1718(2, int1 + 5));
            }
            break;
        case 1:
            if (varbit_curse_leech_defence == 1) {
                return cs2_1714(1, cs2_1718(1, int1 + 5));
            }
            break;
        case 4:
            if (varbit_curse_leech_ranged == 1) {
                return cs2_1714(4, cs2_1718(4, int1 + 5));
            }
            break;
        case 6:
            if (varbit_curse_leech_magic == 1) {
                return cs2_1714(6, cs2_1718(6, int1 + 5));
            }
            break;
    }
    return 0;
}
