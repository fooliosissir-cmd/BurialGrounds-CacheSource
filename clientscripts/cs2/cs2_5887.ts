/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5887

function cs2_5887(intArg0: number, intArg1: number): number {
    let int2: number = 8;
    let int3: number = 20;
    let int4: number = intArg1 / 20;
    let int5: number = intArg1 % 20;
    let int6: number = 0;

    if (int4 > 0) {
        int6 = int6 + 140;
    }

    if (int4 > 1) {
        int6 = int6 + 120;
    }

    if (int4 > 2) {
        int6 = int6 + 100;
    }

    if (int4 > 3) {
        int6 = int6 + 80;
    }

    if (int4 > 4) {
        int6 = int6 + 60;
    }

    if (int4 > 5) {
        int6 = int6 + 40;
    }

    if (int4 > 6) {
        int6 = int6 + 20;
    }
    let int7: number = 8;

    switch (int4) {
        case 0:
            int7 = 8;
            break;
        case 1:
            int7 = 7;
            break;
        case 2:
            int7 = 6;
            break;
        case 3:
            int7 = 5;
            break;
        case 4:
            int7 = 4;
            break;
        case 5:
            int7 = 3;
            break;
        case 6:
            int7 = 2;
            break;
        case 7:
            int7 = 1;
            break;
    }
    int6 = int6 + int7 * int5;
    return cs2_5888(intArg0, int6);
}
