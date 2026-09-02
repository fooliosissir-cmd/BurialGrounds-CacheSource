/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,rgb_to_hex]

function rgb_to_hex(intArg0: number, intArg1: number, intArg2: number): colour {
    if (intArg0 > 255) {
        intArg0 = 255;
    } else if (intArg0 < 0) {
        intArg0 = 0;
    }

    if (intArg1 > 255) {
        intArg1 = 255;
    } else if (intArg1 < 0) {
        intArg1 = 0;
    }

    if (intArg2 > 255) {
        intArg2 = 255;
    } else if (intArg2 < 0) {
        intArg2 = 0;
    }
    return intArg0 * 65536 | intArg1 * 256 | intArg2;
}
