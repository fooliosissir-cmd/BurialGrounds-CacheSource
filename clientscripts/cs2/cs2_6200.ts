/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6200

function cs2_6200(intArg0: number, intArg1: number, strArg0: string): number {
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;

    switch (intArg0) {
        case 96:
            return max(intArg1 - 1, 0);
        case 97:
            return min(intArg1 + 1, stringLength(strArg0));
        case 98:
            int2 = intArg1 - 1;
            if (intArg1 > 0 && stringIndexofString(strArg0, " ", int2) == int2) {
                return int2;
            }
            int2 = -1;
            int3 = -1;
            while (int4 != 1) {
                int2 = stringIndexofString(strArg0, " ", int2 + 1);
                if (int2 == -1 || int2 >= intArg1 - 1) {
                    int4 = 1;
                } else {
                    int3 = int2;
                }
            }
            return min(int3 + 1, stringLength(strArg0));
        case 99:
            if (stringIndexofString(strArg0, " ", intArg1) == intArg1) {
                return min(intArg1 + 1, stringLength(strArg0));
            }
            int2 = stringLength(strArg0);
            if (intArg1 < int2) {
                int3 = stringIndexofString(strArg0, " ", intArg1 + 1);
                if (int3 != -1) {
                    return int3;
                }
                return int2;
            }
            break;
        case 102:
            return 0;
    }
    return stringLength(strArg0);
}
