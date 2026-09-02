/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4796

function cs2_4796(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: number, intArg11: number): number {
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;
    let int17: number = 0;
    let int18: number = 0;

    if (intArg1 > 0) {
        int13 = intArg0 * 1000 / intArg1;
        int12 = int12 + 1;
    }

    if (intArg3 > 0) {
        int14 = intArg2 * 1000 / intArg3;
        int12 = int12 + 1;
    }

    if (intArg5 > 0) {
        int15 = intArg4 * 1000 / intArg5;
        int12 = int12 + 1;
    }

    if (intArg7 > 0) {
        int16 = intArg6 * 1000 / intArg7;
        int12 = int12 + 1;
    }

    if (intArg9 > 0) {
        int17 = intArg8 * 1000 / intArg9;
        int12 = int12 + 1;
    }

    if (intArg11 > 0) {
        int18 = intArg10 * 1000 / intArg11;
        int12 = int12 + 1;
    }
    int12 = max(int12, 1);
    let int19: number = (int13 + int14 + int15 + int16 + int17 + int18) / (int12 * 10);
    let int20: number = 100 - int19;

    if (int20 == 100 && ((intArg0 != intArg1 && intArg0 != 0) || (intArg2 != intArg3 && intArg2 != 0) || (intArg4 != intArg5 && intArg4 != 0) || (intArg6 != intArg7 && intArg6 != 0) || (intArg8 != intArg9 && intArg8 != 0) || (intArg10 != intArg11 && intArg10 != 0))) {
        int20 = 99;
    }
    return int20;
}
