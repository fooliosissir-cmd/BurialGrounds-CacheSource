/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,cruc_rewards_tab_select]

function proc_cruc_rewards_tab_select(intArg0: number): void {
    ifSetHide(true, Component.cruc_rewards.jingles_layer);
    ifSetHide(true, Component.cruc_rewards.titles_layer);
    ifSetHide(true, Component.cruc_rewards.extra_layer);
    ifSetHide(true, Component.cruc_rewards.titles_scroll_layer);
    ifSetHide(true, Component.cruc_rewards.jingles_scroll_layer);
    ifSetHide(true, Component.cruc_rewards.jingles_selected);
    ifSetHide(true, Component.cruc_rewards.titles_selected);
    ifSetHide(true, Component.cruc_rewards.extra_selected);

    if (intArg0 == 1) {
        ifSetText("Taunt", Component.cruc_rewards.reward_title);
        ifSetHide(false, Component.cruc_rewards.jingles_layer);
        ifSetHide(false, Component.cruc_rewards.jingles_scroll_layer);
        ifSetHide(false, Component.cruc_rewards.jingles_selected);
    } else if (intArg0 == 2) {
        ifSetText("Title", Component.cruc_rewards.reward_title);
        ifSetHide(false, Component.cruc_rewards.titles_layer);
        ifSetHide(false, Component.cruc_rewards.titles_scroll_layer);
        ifSetHide(false, Component.cruc_rewards.titles_selected);
    } else {
        ifSetText("Reward", Component.cruc_rewards.reward_title);
        ifSetHide(false, Component.cruc_rewards.extra_layer);
        ifSetHide(false, Component.cruc_rewards.extra_selected);
    }
}
