/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_chat_kick_button]

function clan_chat_kick_button(): void {
    clan_chat_kick_find(varcstr_clan_channel_selected_name);
}
