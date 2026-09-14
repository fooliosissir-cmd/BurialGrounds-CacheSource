/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,xp_reward_confirm_init]

function xp_reward_confirm_init(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    cs2_5867(intArg1, Struct.struct_2750);
    cs2_5867(intArg2, Struct.struct_2751);
    cs2_5867(intArg3, Struct.struct_2752);
    cs2_5867(intArg4, Struct.struct_2754);
    ifSetOp(1, "Confirm", intArg4);
    ifSetOnOp(hook(xp_reward_confirm_invalid, "", []), intArg4);
    ifSetOnVarcTransmit(hook(clientscript_xp_reward_confirm_update, "IIIY", [intArg0, intArg4, intArg5], [1796, 1797, 1799]), intArg0);
    ifSetOnStatTransmit(hook(clientscript_xp_reward_confirm_update, "III", [intArg0, intArg4, intArg5]), intArg0);
    ifSetOnResize(hook(clientscript_xp_reward_confirm_update, "III", [intArg0, intArg4, intArg5]), intArg0);
    proc_xp_reward_confirm_update(intArg0, intArg4, intArg5);
}
