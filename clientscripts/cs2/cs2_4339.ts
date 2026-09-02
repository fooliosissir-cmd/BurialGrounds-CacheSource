/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4339

function cs2_4339(intArg0: number, intArg1: component, intArg2: component): void {
    ifSetOnClanSettingsTransmit(hook(cs2_5230, "iII", [intArg0, intArg1, intArg2]), intArg2);
}
