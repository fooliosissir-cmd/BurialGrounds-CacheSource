/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,rand_buyprice]

function rand_buyprice(intArg0: obj): obj {
    return scale(ocCost(intArg0), 100, ocParam(intArg0, Param.rand_scale_buy_price));
}
