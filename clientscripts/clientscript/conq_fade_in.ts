/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,conq_fade_in]

function conq_fade_in(intArg0: component): void {
    let int1: number = ifGetTrans(intArg0);

    int1 = int1 + 2;

    if (int1 < 255) {
        ifSetTrans(int1, intArg0);
    } else {
        ifSetHide(true, intArg0);
    }
}
