/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,divide_up]

function divide_up(intArg0: number, intArg1: number): number {
    if (intArg0 % intArg1 > 0) {
        return intArg0 / intArg1 + 1;
    }
    return intArg0 / intArg1;
}
