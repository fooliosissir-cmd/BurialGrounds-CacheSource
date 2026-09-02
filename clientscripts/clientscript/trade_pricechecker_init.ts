/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,trade_pricechecker_init]

function trade_pricechecker_init(intArg0: component, intArg1: component, intArg2: component): void {
    ifSetScrollPos(0, 0, intArg0);
    proc_trade_pricechecker_setup(intArg0, intArg1, intArg2);
}
