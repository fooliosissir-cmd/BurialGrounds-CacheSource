/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2847

function cs2_2847(intArg0: component): void {
    let int1: number = 308;
    let int2: number = 55;
    let int3: number = 0;
    let int4: number = enumGetoutputcount(Enum.rm_wires_graphics);

    defineArray(0, type_int, int4);
    array0[0] = 5;
    array0[1] = 8;
    array0[2] = 2;
    array0[3] = 0;
    array0[4] = 4;
    array0[5] = 1;
    array0[6] = 3;
    array0[7] = 7;
    array0[8] = 6;

    while (int3 < int4) {
        if (ccFind(intArg0, array0[int3]) == 1) {
            ccSetPosition(int1, int2, 0, 0);
        }
        int3 = int3 + 1;
        if (int3 == 3) {
            int1 = 308 + 48;
            int2 = 55;
        } else if (int3 == 6) {
            int1 = 308 + 96;
            int2 = 55;
        } else {
            int2 = 48 + int2;
        }
    }
}
