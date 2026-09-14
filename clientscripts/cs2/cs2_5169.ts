/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5169

function cs2_5169(intArg0: number): number {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 1;

    if (clanProfileFind() == 1) {
        int1 = cs2_4948(intArg0);
        if (int1 <= 0) {
            return 0;
        }
        int2 = cs2_4959(int1);
        if (int2 == 0) {
            return 0;
        }
        switch (int1) {
            case 1:
                int3 = pushVarClanBit<2616>();
                break;
            case 2:
                int3 = pushVarClanBit<2614>();
                break;
            case 3:
                int3 = pushVarClanBit<2615>();
                break;
            case 4:
                int3 = pushVarClanBit<2602>();
                break;
            case 5:
                int3 = pushVarClanBit<2603>();
                break;
            case 6:
                int3 = pushVarClanBit<2604>();
                break;
            case 7:
                int3 = pushVarClanBit<2605>();
                break;
            case 8:
                int3 = pushVarClanBit<2606>();
                break;
            case 9:
                int3 = pushVarClanBit<2607>();
                break;
            case 10:
                int3 = pushVarClanBit<2608>();
                break;
            case 11:
                int3 = pushVarClanBit<2609>();
                break;
            case 12:
                int3 = pushVarClanBit<2610>();
                break;
            case 13:
                int3 = pushVarClanBit<2611>();
                break;
            case 14:
                int3 = pushVarClanBit<2612>();
                break;
            case 15:
                int3 = pushVarClanBit<2613>();
                break;
        }
        if (int3 > 0) {
            return 1;
        } else {
            return 0;
        }
    }
    return 0;
}
