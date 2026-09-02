/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4865

function cs2_4865(intArg0: component, intArg1: number): void {
    if (ccFind(intArg0, intArg1) == 1 || (intArg1 == -1 && ifFind(intArg0) == 1)) {
        ccSetSize(0, scale(9, 10, 16384), 4, 2);
        ccSetAspect(214, 336);
    }
}
