/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,bankpin_buttonbox]

function bankpin_buttonbox(intArg0: component, intArg1: component): void {
    if (varc_98 >= 1) {
        ifSetHide(false, intArg0);
        ifSetPauseText("I don't know it.", intArg0);
        ifSetPosition(0, 0 - ifGetHeight(intArg1) / 2, 1, 1, intArg1);
    } else {
        ifSetHide(true, intArg0);
        ifClearops(intArg0);
        ifSetPosition(0, 0, 1, 1, intArg1);
    }
}
