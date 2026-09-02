/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5141

function cs2_5141(intArg0: component): void {
    if (ifGetHide(intArg0) == 1) {
        ifSetHide(false, intArg0);
    } else {
        ifSetHide(true, intArg0);
    }
}
