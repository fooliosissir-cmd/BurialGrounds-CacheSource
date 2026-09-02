/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6034

function cs2_6034(): number {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 1;
    let int3: number = 1;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;

    while (int2 < 7) {
        switch (int2) {
            case 1:
                int1 = varbit_tt2_npc1_xp;
                break;
            case 2:
                int1 = varbit_tt2_npc2_xp;
                break;
            case 3:
                int1 = varbit_tt2_npc3_xp;
                break;
            case 4:
                int1 = varbit_tt2_npc4_xp;
                break;
            case 5:
                int1 = varbit_tt2_npc5_xp;
                break;
            case 6:
                int1 = varbit_tt2_npc6_xp;
                break;
        }
        while (int3 != 100 && int6 == 0) {
            int5 = enumOp(type_int, type_int, Enum.tt2_npcxp_tolevel, int3);
            if (int1 >= int5) {
                int4 = int3;
            } else {
                int6 = 1;
            }
            int3 = int3 + 1;
        }
        int2 = int2 + 1;
        int0 = int0 + int4;
        [int4, int3] = [0, 1];
        int6 = 0;
    }
    return int0;
}
