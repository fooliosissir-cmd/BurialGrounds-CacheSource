/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,jaro_reward_points_set]

function jaro_reward_points_set(intArg0: component): void {
    if (varbit_jaro_reward_points == 2000) {
        ifSetText("<col=ff0000>" + tostring(varbit_jaro_reward_points) + "/" + tostring(2000) + "</col>", intArg0);
    } else {
        ifSetText("<col=ff981f>" + tostring(varbit_jaro_reward_points) + "/" + tostring(2000) + "</col>", intArg0);
    }
}
