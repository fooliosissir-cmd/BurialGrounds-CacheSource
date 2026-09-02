/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5021

function cs2_5021(intArg0: number): number {
    return max(intArg0 / pow(2, 7) & 0x7F, 1);
}
