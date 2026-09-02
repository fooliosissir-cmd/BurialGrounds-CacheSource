/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1401

function cs2_1401(intArg0: number, strArg0: string, intArg1: graphic, intArg2: number): number {
    strArg0 = cs2_1602(strArg0);
    let int3: number = stringLength(strArg0);
    intArg0 = intArg0 - intArg2;

    if (intArg0 <= 0) {
        return 0;
    }

    if (intArg0 >= stringWidth(strArg0, intArg1)) {
        return int3;
    }
    let int4: number = 0;
    let int5: number = stringLength(strArg0);
    let int6: number = -1;
    let int7: number = 0;
    let int8: number = 0;

    while (int4 != int5) {
        int6 = (int5 - int4) / 2 + int4;
        if (int6 == int4) {
            int7 = stringWidth(subString(strArg0, 0, int5), intArg1);
            if (int5 > 1) {
                int8 = stringWidth(subString(strArg0, 0, int5 - 1), intArg1);
            }
            if (int7 - intArg0 < intArg0 - int8) {
                return int5;
            }
            return int5 - 1;
        }
        if (intArg0 <= stringWidth(subString(strArg0, 0, int6), intArg1)) {
            [int4, int5] = [int4, int6];
        } else {
            [int4, int5] = [int6, int5];
        }
    }
    int7 = stringWidth(subString(strArg0, 0, int5), intArg1);

    if (int5 > 1) {
        int8 = stringWidth(subString(strArg0, 0, int5 - 1), intArg1);
    }

    if (int7 - intArg0 < intArg0 - int8) {
        return int5;
    }
    return int5 - 1;
}
