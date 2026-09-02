/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1714

function cs2_1714(intArg0: stat, intArg1: number): number {
    if (statBase(intArg0) != 0) {
        return intArg1 * 100 / statBase(intArg0);
    } else {
        return 0;
    }
}
