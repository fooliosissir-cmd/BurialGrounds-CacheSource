/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_727

function cs2_727(intArg0: component, intArg1: component): void {
    if (ifHasSub(intArg1) == 1 && varc_199 != -1) {
        return;
    }
    ccDeleteAll(intArg0);
    varc_199 = -1;
    ifSetOnTimer(noHook(""), intArg0);
    ifSetOnResize(noHook(""), intArg0);
}
