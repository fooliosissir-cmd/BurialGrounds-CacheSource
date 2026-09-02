/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4797

function cs2_4797(): [number, number, number, number, number, number] {
    let int0: number = 0;
    let int1: number = 1;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
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
    let int20: number = 0;
    let int21: graphic = -1;
    let str0: string = "";

    if (clanProfileFind() == 1) {
        while (int1 <= 31 && int8 == 0) {
            int0 = cs2_4790(int1);
            if (int0 > 600) {
                int8 = 1;
            } else if (int0 >= 300) {
                [int21, str0, int5, int6, int7, int2, int3, int4] = clan_build_job_info(int0);
                int5 = int5 - int6;
                [int9, int10, int11, int12, int13, int14] = clan_build_job_cost(int0, int5);
                if (int7 == 2) {
                    int9 = int9 * 2;
                    int10 = int10 * 2;
                    int11 = int11 * 2;
                    int12 = int12 * 2;
                    int13 = int13 * 2;
                    int14 = int14 * 2;
                }
                int15 = int15 + int9;
                int16 = int16 + int10;
                int17 = int17 + int11;
                int18 = int18 + int12;
                int19 = int19 + int13;
                int20 = int20 + int14;
            }
            int1 = int1 + 1;
        }
    }
    return [int15, int16, int17, int18, int19, int20];
}
