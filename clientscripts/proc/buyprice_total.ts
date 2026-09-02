/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,buyprice_total]

function buyprice_total(intArg0: obj, intArg1: obj): obj {
    return buyprice(intArg0) * intArg1;
}
