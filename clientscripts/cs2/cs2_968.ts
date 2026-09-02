/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_968

function cs2_968(intArg0: component): void {
    if (cs2_970(intArg0) == 1) {
        ifSetOnTimer(hook(cs2_969, "I", [intArg0]), intArg0);
    } else {
        ifSetOnTimer(noHook(""), intArg0);
    }
}
