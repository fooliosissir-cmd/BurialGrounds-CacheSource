/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_chat_onclansettingstransmit]

function clientscript_clan_chat_onclansettingstransmit(): void {
    if (activeClanChannelFindAffined() == 1) {
        proc_clan_chat_onclansettingstransmit();
    } else {
        cs2_4589();
    }
}
