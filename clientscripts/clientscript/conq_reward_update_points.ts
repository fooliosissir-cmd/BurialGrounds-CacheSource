/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,conq_reward_update_points]

function conq_reward_update_points(intArg0: component): void {
    ifSetText(tostring(varbit_pest_points_old2), intArg0);
}
