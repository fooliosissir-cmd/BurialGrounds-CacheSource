/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1293

function cs2_1293(intArg0: component): void {
    ccDeleteAll(intArg0);
    let int1: number = 5;
    let int2: number = 34;
    let int3: number = 34;
    let int4: number = 0;
    let int5: number = 6;
    let int6: number = int5;
    let int7: number = 3;
    let int8: number = 34 + 3;

    if (varc_1052 == 1 && varbit_prayer_mode == 0) {
        int5 = 3;
        int6 = int5;
        int8 = 34 + 0;
    }
    let int9: number = 34 + 2;

    if (varc_181 == 1) {
        int5 = 6;
        int6 = int5;
        int7 = 28;
        int8 = 34 + 5;
        int9 = 34 + 3;
    }
    let int10: number = 30;

    if (varbit_prayer_mode == 1) {
        int10 = 20;
    }

    while (int4 < int10) {
        ccCreate(intArg0, 5, int4);
        ccSetSize(int2, int3, 0, 0);
        ccSetPosition(int6, int7, 0, 0);
        int4 = int4 + 1;
        if (int4 % int1 == 0) {
            int6 = int5;
            int7 = int7 + int9;
        } else {
            int6 = int6 + int8;
        }
    }
}
