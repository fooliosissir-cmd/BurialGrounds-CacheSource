/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2712

function cs2_2712(intArg0: component, intArg1: component, intArg2: component): void {
    if (clientClock() < varc_177) {
        return;
    }
    varc_176 = varc_176 + 2;
    let int3: number = varc_176 % 10;

    if (int3 != 2) {
        varc_176 = varc_176 - int3 + 2;
    }
    ifSetHide(false, intArg0);
    ifSetOnTimer(hook(cs2_1249, "III", [intArg0, intArg1, intArg2]), intArg0);
    ifSetOnTimer(noHook(""), intArg1);
}
