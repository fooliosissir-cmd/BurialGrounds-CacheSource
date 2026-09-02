/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_632

function cs2_632(intArg0: number): void {
    if (stockmarketIsofferempty(intArg0) == 0 && ccFind(cs2_623(intArg0), 0) == 1) {
        ccSetTrans(255);
    }
}
