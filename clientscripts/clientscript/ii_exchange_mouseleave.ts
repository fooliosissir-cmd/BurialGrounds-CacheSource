/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ii_exchange_mouseleave]

function ii_exchange_mouseleave(intArg0: component, intArg1: component, intArg2: number): void {
    if (varc_ii_elnex_varc != intArg2) {
        ifSetHide(true, intArg0);
    }
    ifSetText("", intArg1);
}
