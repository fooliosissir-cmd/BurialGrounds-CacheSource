/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3381

function cs2_3381(intArg0: component, intArg1: number): void {
    intArg1 = intArg1 + 1;
    ifSetOnTimer(hook(cs2_3381, "Ii", [intArg0, intArg1]), intArg0);

    if (intArg1 > 1) {
        varc_1273 = 1;
        ifSetOnTimer(noHook(""), intArg0);
        proc_login_dologin();
    }
}
