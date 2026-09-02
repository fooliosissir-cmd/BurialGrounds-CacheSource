/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5390

function cs2_5390(strArg0: string): string {
    let int0: number = stringLength(strArg0);

    if (int0 < 10) {
        return strArg0;
    }

    if (int0 > 10) {
        return tostring(2147483647);
    }
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;

    while (int3 < 10) {
        int1 = stringIndexofString("0123456789", subString(strArg0, int3, int3 + 1), 0);
        int2 = 2147483647 / pow(10, 9 - int3) % 10;
        if (int1 < int2) {
            return strArg0;
        }
        if (int1 > int2) {
            return tostring(2147483647);
        }
        int3 = int3 + 1;
    }
    return strArg0;
}
