/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,friends_chat_onclantransmit]

function friends_chat_onclantransmit(intArg0: component): void {
    if (minimenuopen(72679429, -1) == 1) {
        ifSetOnTimer(hook(friends_chat_minimenu_timer, "", []), Component.interface_1109.component_1109_5);
        return;
    }
    cs2_518();
}
