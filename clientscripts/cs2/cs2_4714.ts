/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4714

function cs2_4714(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: number): void {
    if (ccFind(intArg0, intArg4) == 1) {
        ccSetvflip(false);
    }
    ifSetHide(true, intArg1);
    ifSetHide(true, intArg2);

    if (intArg3 != -1) {
        ifSetHide(true, intArg3);
    }
}
