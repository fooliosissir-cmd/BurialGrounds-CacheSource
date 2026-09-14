/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_chat_onclantransmit]

function clan_chat_onclantransmit(intArg0: component): void {
    if (minimenuopen(72744974, -1) == 1) {
        ifSetOnTimer(hook(clan_chat_minimenu_timer, "", []), Component.interface_1110.component_1110_14);
        return;
    }

    if (activeClanChannelFindAffined() == 1) {
        cs2_4451();
    }
}
