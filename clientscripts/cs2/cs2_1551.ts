/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1551

function cs2_1551(intArg0: number, strArg0: string, intArg1: graphic, intArg2: number): number {
    strArg0 = cs2_1602(strArg0);
    intArg0 = min(stringLength(strArg0), intArg0);

    if (intArg0 <= 0) {
        return intArg2;
    }
    return stringWidth(subString(strArg0, 0, intArg0), intArg1) + intArg2;
}
