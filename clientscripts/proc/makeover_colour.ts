/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,makeover_colour]

function makeover_colour(intArg0: component, intArg1: component): void {
    if (intArg0 == -1) {
        ifSetHide(true, intArg1);
        return;
    }
    ifSetHide(false, intArg1);
    ifSetPosition(ifGetX(intArg0) + ifGetWidth(intArg0) - ifGetWidth(intArg1), ifGetY(intArg0) + ifGetHeight(intArg0) - ifGetHeight(intArg1), 0, 0, intArg1);
}
