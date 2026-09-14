/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_9

function cs2_9(intArg0: component, intArg1: component, intArg2: component): void {
    if (varc_169 == 1) {
        ifSetHide(false, intArg0);
        ifSetHide(false, intArg1);
        ifSetHide(false, intArg2);
        cs2_680(intArg0);
        ifSetOnMouseOver(hook(cs2_95, "I", [intArg0]), intArg0);
        ifSetOnMouseLeave(hook(cs2_93, "I", [intArg0]), intArg0);
    } else {
        ccDeleteAll(intArg0);
        ifSetHide(true, intArg0);
        ifSetHide(true, intArg1);
        ifSetHide(true, intArg2);
        ifSetOnMouseOver(noHook(""), intArg0);
        ifSetOnMouseLeave(noHook(""), intArg0);
    }
}
