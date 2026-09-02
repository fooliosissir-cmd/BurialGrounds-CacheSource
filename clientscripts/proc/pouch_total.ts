/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,pouch_total]

function pouch_total(intArg0: obj, intArg1: number): number {
    if (intArg0 != Obj.coins) {
        return -1;
    }

    if (invTotal(Inv.inv, intArg0) >= intArg1) {
        return 1;
    }
    let int2: number = invTotal(Inv.inv, intArg0);
    let int3: number = invTotal(Inv.inv_623, intArg0);

    if (int3 >= intArg1 - int2) {
        return 2;
    }
    return 0;
}
