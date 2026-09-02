/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1711

function cs2_1711(intArg0: stat): number {
    let int1: number = -25;
    let int2: number = 15;
    let int3: number = cs2_1695(intArg0);
    let int4: number = cs2_1696(intArg0);

    if (int3 == 4) {
        int1 = 0 - 25;
    } else if (int3 == 1) {
        int1 = 0 - 20;
    }
    let int5: number = cs2_1714(intArg0, curse_get_stat(intArg0));
    let int6: number = cs2_1713(intArg0);
    let int7: number = cs2_1712(intArg0);
    let int8: number = 0;

    if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
        int8 = 5;
    }

    if (int6 < int8 + 5 && int4 == 4) {
        int6 = int8 + 5;
    }

    if (int7 < 10 && int3 == 4) {
        if (int7 + int5 > 0 - 10) {
            int7 = 0 - 10;
        }
    } else if (int7 < 10 && int3 == 1 && int7 + int5 > 0 - 10) {
        int7 = 0 - 10;
    }
    return min(max(int5 + int6 + int7, int1), int2);
}
