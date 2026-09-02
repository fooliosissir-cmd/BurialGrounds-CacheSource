/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fremsaga_reward_setup_objectives]

function fremsaga_reward_setup_objectives(intArg0: number): void {
    switch (intArg0) {
        case 2:
        case 3:
        case 6:
            ifSetHide(true, Component.interface_102.component_102_61);
            ifSetHide(false, Component.interface_102.component_102_60);
            ifSetOnTimer(hook(cs2_4674, "", []), Component.interface_102.component_102_60);
            break;
        default:
            ifSetHide(true, Component.interface_102.component_102_60);
            ifSetHide(false, Component.interface_102.component_102_61);
            ifSetOnTimer(hook(cs2_4674, "", []), Component.interface_102.component_102_61);
            break;
    }
}
