/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6033

function cs2_6033(intArg0: component, intArg1: component): void {
    if (ifGetHide(intArg0) == 1) {
        ifSetHide(false, intArg0);
        ifSetHide(true, intArg1);
    } else {
        ifSetHide(true, intArg0);
        ifSetHide(false, intArg1);
    }
}
