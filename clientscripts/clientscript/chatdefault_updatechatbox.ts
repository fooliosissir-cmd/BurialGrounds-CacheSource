/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,chatdefault_updatechatbox]

function clientscript_chatdefault_updatechatbox(intArg0: boolean): void {
    if (ifGetTop(49283081, -1) == 1) {
        ifSetOnTimer(hook(chatdefault_updatechatbox_minimenu_timer, "1", [intArg0]), Component.interface_752.component_752_9);
        return;
    }
    proc_chatdefault_updatechatbox(intArg0);
}
