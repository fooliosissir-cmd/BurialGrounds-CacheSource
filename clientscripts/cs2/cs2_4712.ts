/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4712

function cs2_4712(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: number): void {
    if (ccFind(intArg0, intArg4) == 1) {
        ccSetvflip(true);
    }

    if (intArg3 != -1) {
        ifSetHide(false, intArg3);
    }
    ifSetHide(false, intArg1);
    ifSetHide(false, intArg2);
}
