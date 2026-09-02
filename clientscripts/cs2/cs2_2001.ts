/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2001

function cs2_2001(intArg0: obj): string {
    let int1: number = varc_1878;
    let int2: number = int1 / 1000;

    int1 = int1 - int2 * 1000;

    if (int1 < 0) {
        int1 = 0 - int1;
    }
    return tostring(int2) + "." + tostring(int1 / 100) + "kg";
}
