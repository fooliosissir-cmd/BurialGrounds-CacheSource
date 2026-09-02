/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,xp_reward_confirm_update]

function proc_xp_reward_confirm_update(intArg0: component, intArg1: component, intArg2: component): void {
    ccDeleteAll(intArg0);

    if (enumOp(type_int, type_stat, Enum.int_to_stat, varc_xp_reward_currentchoice) == -1) {
        ifSetHide(false, intArg1);
        xp_reward_textbox("Choose a skill...", intArg2, 50);
        return;
    }
    ifSetHide(true, intArg1);
    let int3: number = 0;

    while (int3 < varc_xp_reward_currentchoice) {
        ccCreate(intArg0, 3, int3);
        ccSetHide(true);
        int3 = int3 + 1;
    }
    ccCreate(intArg0, 3, int3);
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetTrans(255);
    ccSetPauseText("Confirm: " + enumOp(type_int, type_string, Enum.statstring, varc_xp_reward_currentchoice));
    xp_reward_textbox(cs2_6036(enumOp(type_int, type_stat, Enum.int_to_stat, varc_xp_reward_currentchoice), varc_1797, varc_xp_reward_item), intArg2, 50);
}
