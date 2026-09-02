/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fishcomp_reward_tackle_box_side_init]

function fishcomp_reward_tackle_box_side_init(): void {
    ifSetOnInvTransmit(hook(clientscript_fishcomp_reward_tackle_box_refresh, "Y", [], [93]), Component.interface_920.component_920_0);
    ifSetOnVarTransmit(hook(clientscript_fishcomp_reward_tackle_box_refresh, "Y", [], [1660, 1661, 1662, 1663, 1664, 2629]), Component.interface_924.component_924_37);
    cs2_2174();
    proc_fishcomp_reward_tackle_box_refresh();
}
