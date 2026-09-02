/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1757

function cs2_1757(intArg0: component, intArg1: component): void {
    if (varc_219 > 0) {
        ifSetHide(false, intArg0);
    } else {
        ifSetHide(true, intArg0);
    }
    ifSetText(tostring(varc_219), intArg1);
}
