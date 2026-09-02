/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,sfa_shard_update]

function sfa_shard_update(intArg0: component): void {
    if (varbit_sfa_reward_points >= 0) {
        ifSetText(tostring(varbit_sfa_reward_points), intArg0);
    }
}
