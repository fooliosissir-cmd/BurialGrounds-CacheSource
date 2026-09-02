/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4502

function cs2_4502(intArg0: component, intArg1: component, intArg2: number): void {
    if (ccFind(intArg1, intArg2) == 1 && stringLength(ccGetText()) > 0) {
        ifSetHide(false, intArg0);
        ifSetPosition(0, ccGetY(), 0, 0, intArg0);
    }
}
