/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1403

function cs2_1403(intArg0: component, intArg1: number): number {
    ifSetPosition(ifGetX(intArg0), intArg1 * ifGetHeight(intArg0), 0, 0, intArg0);
    intArg1 = intArg1 + 1;
    return intArg1;
}
