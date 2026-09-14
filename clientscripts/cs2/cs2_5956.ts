/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5956

function cs2_5956(intArg0: number): number {
    let int1: number = 0;

    if (clanProfileFind() == 1) {
        switch (intArg0) {
            case 1:
                int1 = pushVarClanBit<2835>();
                break;
            case 2:
                int1 = pushVarClanBit<2836>();
                break;
            case 3:
                int1 = pushVarClanBit<2839>();
                break;
            case 4:
                int1 = pushVarClanBit<2837>();
                break;
            case 5:
                int1 = pushVarClanBit<2842>();
                break;
            case 6:
                int1 = pushVarClanBit<2838>();
                break;
            case 7:
                int1 = pushVarClanBit<2843>();
                break;
            case 8:
                int1 = pushVarClanBit<2841>();
                break;
            case 9:
                int1 = pushVarClanBit<2840>();
                break;
            case 10:
                int1 = pushVarClanBit<2844>();
                break;
        }
        return int1;
    }
    return 0;
}
