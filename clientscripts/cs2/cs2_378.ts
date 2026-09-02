/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_378

function cs2_378(intArg0: component, intArg1: number, intArg2: number, strArg0: string): void {
    if (ccFind(intArg0, intArg1) == 1 || (intArg1 == -1 && ifFind(intArg0) == 1)) {
        playerdesign4_tooltip(strArg0, cc_getx_absolute(), ccGetWidth(), cc_gety_absolute(), intArg2);
    }
}
