/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_chat_kick_find]

function clan_chat_kick_find(strArg0: string): void {
    if (activeClanChannelFindAffined() == 1) {
        clan_chat_kick(strArg0);
    } else {
        mes("You must be in your clan channel to do that.");
    }
}
