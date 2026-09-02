/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4317

function cs2_4317(intArg0: component, intArg1: number): void {
    let int2: number = 0;

    if (activeClanChannelFindAffined() == 1) {
        if (intArg1 < 0 || intArg1 >= activeClanChannelGetUserCount()) {
            varc_clan_chat_selected_slot = -1;
            varcstr_clan_channel_selected_name = "";
            mes("That person isn't in your clan channel.");
            return;
        }
        if (ccFind(intArg0, intArg1) == 1) {
            int2 = ccGetY();
        }
        varc_clan_chat_selected_slot = intArg1;
        varcstr_clan_channel_selected_name = activeClanChannelGetUserDisplayName(intArg1);
        if (ifFind(Component.interface_1110.component_1110_20) == 1) {
            ccSetSize(1, 19, 0, 0);
            ccSetPosition(0, int2, 2, 0);
            ccSetOnTimer(hook(cs2_4629, "i", [1]));
            ifSetHide(false, Component.interface_1110.component_1110_13);
            ifSetPosition(0, int2, 2, 0, Component.interface_1110.component_1110_13);
        }
        cs2_5395();
    } else {
        mes("You must be in your clan channel to do that.");
    }
}
