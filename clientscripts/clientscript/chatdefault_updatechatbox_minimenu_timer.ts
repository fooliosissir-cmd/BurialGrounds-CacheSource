/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,chatdefault_updatechatbox_minimenu_timer]

function chatdefault_updatechatbox_minimenu_timer(intArg0: boolean): void {
    if (ifGetTop(49283081, -1) == 1) {
        return;
    }
    ifSetOnTimer(noHook(""), Component.interface_752.component_752_9);
    proc_chatdefault_updatechatbox(intArg0);
}
