/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_chat_minimenu_timer]

function clan_chat_minimenu_timer(): void {
    if (ifGetTop(72744974, -1) == 1) {
        return;
    }
    ifSetOnTimer(noHook(""), Component.interface_1110.component_1110_14);

    if (activeClanChannelFindAffined() == 1) {
        cs2_4451();
    }
}
