/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,assist_set_icon]

function assist_set_icon(intArg0: number, intArg1: graphic, intArg2: graphic, intArg3: component, intArg4: component): void {
    if (intArg0 == 1) {
        ifSetGraphic(intArg1, intArg3);
        ifSetHide(false, intArg4);
    } else {
        ifSetGraphic(intArg2, intArg3);
        ifSetHide(true, intArg4);
    }
}
