/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5863

function cs2_5863(intArg0: component, intArg1: number, intArg2: obj): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccClearops();
        cs2_5862(intArg2);
    }
}
