/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,xmas11_aif_progressbar_set]

function xmas11_aif_progressbar_set(intArg0: number, intArg1: component): void {
    intArg0 = min(100, intArg0);
    intArg0 = max(0, intArg0);

    if (intArg1 == -1) {
        return;
    }
    let int2: number = intArg0 * 16384 / 100;
    ifSetSize(int2, ifGetHeight(intArg1), 2, 0, intArg1);
}
