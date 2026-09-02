/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fishcomp_rewards_shop_init]

function fishcomp_rewards_shop_init(): void {
    ifSetOnVarcTransmit(hook(clientscript_fishcomp_rewards_shop_refresh, "Y", [], [1118, 1119, 1120, 1121]), Component.interface_925.component_925_26);
    ifSetOnVarTransmit(hook(clientscript_fishcomp_rewards_shop_refresh, "Y", [], [1660, 1661, 1663, 1668]), Component.interface_925.component_925_26);
    varbit_fishcomp_reward_shop_item = 0;
}
