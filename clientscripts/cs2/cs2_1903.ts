/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1903

function cs2_1903(intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    varc_129 = varc_129 - 1;

    if (varc_129 > 0) {
        return;
    }
    ifSetOnTimer(noHook(""), intArg1);
    cs2_1904(intArg0, intArg2, intArg3);
}
