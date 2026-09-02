/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4233

function cs2_4233(intArg0: component, intArg1: component, intArg2: component, intArg3: number): void {
    ifSetOnTimer(hook(cs2_4234, "IIIii", [intArg0, intArg1, intArg2, clientClock(), intArg3]), intArg0);
    ifSetOnOpt(noHook(""), intArg0);
}
