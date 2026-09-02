/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,xp_reward_choose]

function xp_reward_choose(intArg0: stat, intArg1: number, intArg2: component, intArg3: component): void {
    if (cs2_6035(intArg0, varc_xp_reward_minlevel, varc_xp_reward_item, 1) == 0) {
        return;
    }
    varc_xp_reward_currentchoice = intArg1;
    let int4: number = enumGetoutputcount(Enum.xp_reward_buttonlist) - 1;

    while (int4 >= 0) {
        intArg2 = enumOp(type_int, type_component, Enum.xp_reward_buttonlist, int4);
        if (intArg2 != -1) {
            ifCallonresize(intArg2);
        }
        int4 = int4 - 1;
    }
    ifCallonresize(intArg3);
}
