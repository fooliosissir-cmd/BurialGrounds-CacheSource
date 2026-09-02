/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_768

function cs2_768(intArg0: obj, intArg1: obj): number {
    if (invTotal(Inv.inv, intArg1) < 1) {
        return 0;
    }
    return 1;
}
