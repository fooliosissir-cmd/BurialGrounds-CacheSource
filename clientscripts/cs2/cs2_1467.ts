/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1467

function cs2_1467(intArg0: number): [number, number] {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;

    if (intArg0 == 0) {
        [int1, int2] = cs2_1467(9);
        int1 = int2;
        [int3, int2] = cs2_1467(1);
        return [int1, int2];
    }

    if (intArg0 == 1) {
        return [0, invSize(Inv.bank)];
    }
    int1 = 0;
    int2 = varbit_4885;

    if (intArg0 >= 3) {
        int1 = int2;
        int2 = int1 + varbit_4886;
    }

    if (intArg0 >= 4) {
        int1 = int2;
        int2 = int1 + varbit_4887;
    }

    if (intArg0 >= 5) {
        int1 = int2;
        int2 = int1 + varbit_4888;
    }

    if (intArg0 >= 6) {
        int1 = int2;
        int2 = int1 + varbit_4889;
    }

    if (intArg0 >= 7) {
        int1 = int2;
        int2 = int1 + varbit_4890;
    }

    if (intArg0 >= 8) {
        int1 = int2;
        int2 = int1 + varbit_4891;
    }

    if (intArg0 >= 9) {
        int1 = int2;
        int2 = int1 + varbit_4892;
    }
    return [int1, int2];
}