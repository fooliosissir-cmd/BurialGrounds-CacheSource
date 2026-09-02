/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,xp_reward_title]

function xp_reward_title(intArg0: component, intArg1: boolean): void {
    if (intArg1 == true) {
        ifSetOnVarcStrTransmit(hook(xp_reward_title, "I1Y", [intArg0, false], [358]), intArg0);
    }
    xp_reward_textbox(varcstr_358, intArg0, 60);
}
