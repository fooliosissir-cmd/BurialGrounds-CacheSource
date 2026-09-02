/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_507

function cs2_507(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component): void {
    ifSetOnInvTransmit(hook(cs2_712, "IIIIIIIY", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6], [541]), intArg0);
    ifSetOnVarTransmit(hook(cs2_712, "IIIIIIIY", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6], [259]), intArg0);
    proc_clanwars_setup_createbox(intArg0, 0, 0, 0);
    proc_clanwars_setup_createbox(intArg4, 0, 0, 0);
    cs2_713(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6);
}
