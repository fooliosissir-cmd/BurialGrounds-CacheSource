/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1504

function cs2_1504(intArg0: number, strArg0: string, intArg1: graphic, intArg2: component, intArg3: number): number {
    let int4: number = 0;

    if (ccFind(intArg2, intArg3) == 1 || (intArg3 == -1 && ifFind(intArg2) == 1)) {
        int4 = (ccGetWidth() - stringWidth(cs2_1602(strArg0), intArg1)) / 2;
        return cs2_1401(intArg0, strArg0, intArg1, int4);
    }
    return stringLength(strArg0);
}
