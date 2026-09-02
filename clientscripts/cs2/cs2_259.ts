/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_259

function cs2_259(intArg0: obj): number {
    return invTotal(Inv.inv, intArg0) + invTotal(Inv.bank, intArg0) + invTotal(Inv.worn, intArg0) + invTotal(Inv.inv_530, intArg0);
}
