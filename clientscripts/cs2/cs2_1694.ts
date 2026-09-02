/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1694

function cs2_1694(intArg0: number): number {
    if (intArg0 < 32) {
        return testBit(varc_1040, intArg0);
    }

    if (intArg0 < 64) {
        return testBit(varc_1041, intArg0 % 32);
    }

    if (intArg0 < 96) {
        return testBit(varc_1042, intArg0 % 32);
    }

    if (intArg0 < 128) {
        return testBit(varc_1702, intArg0 % 32);
    }
    return 0;
}
