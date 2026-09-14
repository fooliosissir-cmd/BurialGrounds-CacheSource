/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,friends_chat_minimenu_timer]

function friends_chat_minimenu_timer(): void {
    if (minimenuopen(72679429, -1) == 1) {
        return;
    }
    ifSetOnTimer(noHook(""), Component.interface_1109.component_1109_5);
    cs2_518();
}
