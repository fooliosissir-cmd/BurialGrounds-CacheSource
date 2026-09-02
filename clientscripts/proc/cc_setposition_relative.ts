/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,cc_setposition_relative]

function cc_setposition_relative(intArg0: number, intArg1: number): void {
    ccSetPosition(ccGetX() + intArg0, ccGetY() + intArg1, 0, 0);
}
