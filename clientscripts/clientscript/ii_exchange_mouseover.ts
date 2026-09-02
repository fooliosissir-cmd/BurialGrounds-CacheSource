/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ii_exchange_mouseover]

function ii_exchange_mouseover(intArg0: component, intArg1: component, strArg0: string): void {
    ifSetHide(false, intArg0);
    ifSetText(strArg0, intArg1);
}
