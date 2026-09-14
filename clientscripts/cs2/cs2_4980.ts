/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4980

function cs2_4980(intArg0: number): number {
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
                int3 = pushVarClanBit<2600>();
                break;
            case 2:
                int3 = pushVarClanBit<2596>();
                break;
            case 3:
                int3 = pushVarClanBit<2597>();
                break;
            case 4:
                int3 = pushVarClanBit<2584>();
                break;
            case 5:
                int3 = pushVarClanBit<2585>();
                break;
            case 6:
                int3 = pushVarClanBit<2586>();
                break;
            case 7:
                int3 = pushVarClanBit<2587>();
                break;
            case 8:
                int3 = pushVarClanBit<2588>();
                break;
            case 9:
                int3 = pushVarClanBit<2589>();
                break;
            case 10:
                int3 = pushVarClanBit<2590>();
                break;
            case 11:
                int3 = pushVarClanBit<2591>();
                break;
            case 12:
                int3 = pushVarClanBit<2592>();
                break;
            case 13:
                int3 = pushVarClanBit<2593>();
                break;
            case 14:
                int3 = pushVarClanBit<2594>();
                break;
            case 15:
                int3 = pushVarClanBit<2595>();
                break;
        }
        if (int3 > 0) {
            return 4;
        } else {
            return 3;
        }
    }
    return 0;
}
