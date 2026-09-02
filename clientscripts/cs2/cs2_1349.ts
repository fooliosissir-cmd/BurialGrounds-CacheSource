/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1349

function cs2_1349(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: number): void {
    if (ccFind(intArg0, intArg4) == 1) {
        ccSetvflip(false);
    }
    ifSetHide(true, intArg1);
    ifSetHide(true, intArg2);

    if (intArg3 != -1) {
        ifSetHide(true, intArg3);
    }
    ccDeleteAll(intArg1);
    ccDeleteAll(intArg2);

    if (intArg3 != -1) {
        ccDeleteAll(intArg3);
    }
}
