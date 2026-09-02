/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,xp_reward_init]

function xp_reward_init(intArg0: stat, intArg1: component, intArg2: component): void {
    ifSetOnVarcTransmit(hook(clientscript_xp_reward_update, "SIIY", [intArg0, intArg1, intArg2], [1796, 1797, 1798, 1799]), intArg1);
    ifSetOnStatTransmit(hook(clientscript_xp_reward_update, "SIIY", [intArg0, intArg1, intArg2], [intArg0]), intArg1);
    ifSetOnResize(hook(clientscript_xp_reward_update, "SII", [intArg0, intArg1, intArg2]), intArg1);
    proc_xp_reward_update(intArg0, intArg1, intArg2);
}
