/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4795

function cs2_4795(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] {
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;
    let int17: number = 0;
    let int18: number = 0;
    let int19: number = 0;
    let int20: number = cs2_4790(intArg0);

    if (int20 < 1 || int20 > 900) {
        mes("Clan Build Tick : Check resources for invalid job " + tostring(int20) + " at position " + tostring(intArg0) + ".");
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    let [int21, str0, int22, int23, int24, int25, int26, int27] = clan_build_job_info(int20);

    if (int20 > 300 && int20 < 600) {
        int22 = int22 - int23;
    }

    if (int20 == 616) {
        [int8, int9, int10, int11, int12, int13] = cs2_4724(1);
    } else if (int20 == 617) {
        [int8, int9, int10, int11, int12, int13] = cs2_4724(2);
    } else if (int20 == 618) {
        [int8, int9, int10, int11, int12, int13] = cs2_4724(3);
    } else {
        [int8, int9, int10, int11, int12, int13] = clan_build_job_cost(int20, int22);
    }

    if (int24 == 2 && int20 > 300 && int20 < 600) {
        int8 = int8 * 2;
        int9 = int9 * 2;
        int10 = int10 * 2;
        int11 = int11 * 2;
        int12 = int12 * 2;
        int13 = int13 * 2;
    }

    if (int20 < 300) {
        return [intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, int8, int9, int10, int11, int12, int13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    let int28: number = int8;
    let int29: number = int9;
    let int30: number = int10;
    let int31: number = int11;
    let int32: number = int12;
    let int33: number = int13;

    if (int20 > 600) {
        [int14, int15, int16, int17, int18, int19] = cs2_4793(int25, int26);
    }
    int28 = max(0, int28 - int14);
    int29 = max(0, int29 - int15);
    int30 = max(0, int30 - int16);
    int31 = max(0, int31 - int17);
    int32 = max(0, int32 - int18);
    int33 = max(0, int33 - int19);

    if (int28 == 0 && int29 == 0 && int30 == 0 && int31 == 0 && int32 == 0 && int33 == 0) {
        return [intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, int8, int9, int10, int11, int12, int13, int14, int15, int16, int17, int18, int19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100];
    }
    let int34: number = min(int28, intArg1);
    let int35: number = min(int29, intArg2);
    let int36: number = min(int30, intArg3);
    let int37: number = min(int31, intArg4);
    let int38: number = min(int32, intArg5);
    let int39: number = min(int33, intArg6);
    int28 = max(0, int28 - int34);
    int29 = max(0, int29 - int35);
    int30 = max(0, int30 - int36);
    int31 = max(0, int31 - int37);
    int32 = max(0, int32 - int38);
    int33 = max(0, int33 - int39);
    intArg1 = max(0, intArg1 - int34);
    intArg2 = max(0, intArg2 - int35);
    intArg3 = max(0, intArg3 - int36);
    intArg4 = max(0, intArg4 - int37);
    intArg5 = max(0, intArg5 - int38);
    intArg6 = max(0, intArg6 - int39);

    if (int28 == 0 && int29 == 0 && int30 == 0 && int31 == 0 && int32 == 0 && int33 == 0) {
        return [intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, int8, int9, int10, int11, int12, int13, int14, int15, int16, int17, int18, int19, int34, int35, int36, int37, int38, int39, 0, 0, 0, 0, 0, 0, 100];
    }
    let int40: number = min(int28, intArg7 / 1);
    int28 = max(0, int28 - int40);
    intArg7 = intArg7 - int40 * 1;
    let int41: number = min(int29, intArg7 / 1);
    int29 = max(0, int29 - int41);
    intArg7 = intArg7 - int41 * 1;
    let int42: number = min(int30, intArg7 / 3);
    int30 = max(0, int30 - int42);
    intArg7 = intArg7 - int42 * 3;
    let int43: number = min(int31, intArg7 / 1);
    int31 = max(0, int31 - int43);
    intArg7 = intArg7 - int43 * 1;
    let int44: number = min(int32, intArg7 / 1);
    int32 = max(0, int32 - int44);
    intArg7 = intArg7 - int44 * 1;
    let int45: number = min(int33, intArg7 / 3);
    int33 = max(0, int33 - int45);
    intArg7 = intArg7 - int45 * 3;
    let int46: number = cs2_4796(int28, int8, int29, int9, int30, int10, int31, int11, int32, int12, int33, int13);
    return [intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, int8, int9, int10, int11, int12, int13, int14, int15, int16, int17, int18, int19, int34, int35, int36, int37, int38, int39, int40, int41, int42, int43, int44, int45, int46];
}
