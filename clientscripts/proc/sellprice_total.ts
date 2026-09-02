/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,sellprice_total]

function sellprice_total(intArg0: obj, intArg1: obj): obj {
    return sellprice(intArg0) * intArg1;
}
