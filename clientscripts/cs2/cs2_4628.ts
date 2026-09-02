/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4628

function cs2_4628(): void {
    varc_clan_chat_selected_slot = -1;
    varcstr_clan_channel_selected_name = "";

    if (ifFind(Component.interface_1110.component_1110_20) == 1) {
        ccSetOnTimer(hook(cs2_4629, "i", [0]));
    }
}
