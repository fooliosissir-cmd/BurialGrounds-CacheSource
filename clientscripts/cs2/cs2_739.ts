/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_739

function cs2_739(intArg0: number): number {
    intArg0 = intArg0 - 1;
    let int1: number = 1;
    let int2: number = 1;
    defineArray(0, type_int, 36);
    let int3: number = 0;

    if (varc_scab_seed != varbit_scab_seed_serverside) {
        varc_scab_seed = varbit_scab_seed_serverside;
    }
    let int4: number = varc_scab_seed;

    while (int1 <= 12) {
        while (int2 <= 3) {
            int3 = int4 % 36;
            while (array0[int3] != 0) {
                int3 = int3 + 1;
                if (int3 == 36) {
                    int3 = 0;
                }
            }
            if (int3 == intArg0) {
                return int1;
            }
            array0[int3] = int1;
            int4 = int4 * int4;
            int4 = int4 - int4 / 1000000 * 1000000;
            int4 = int4 / 100;
            int2 = int2 + 1;
        }
        int1 = int1 + 1;
        int2 = 1;
    }
    return 0;
}
