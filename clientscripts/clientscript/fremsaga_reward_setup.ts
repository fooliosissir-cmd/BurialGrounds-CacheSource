/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_reward_setup]

function fremsaga_reward_setup(intArg0: number): void {
    varc_fremsaga_varc_1 = 0;
    varc_fremsaga_varc_2 = 0;
    varc_fremsaga_varc_3 = 0;
    varc_fremsaga_varc_4 = 0;
    varc_fremsaga_varc_completed = 0;
    varc_fremsaga_varc_best = 0;
    fremsaga_reward_setup_head(varbit_fremsaga_current_saga);
    cs2_4677();
    fremsaga_reward_setup_objectives(varbit_fremsaga_current_saga);
    ifSetOnTimer(hook(fremsaga_reward_progress_bar_update, "", []), Component.interface_102.component_102_62);
}
