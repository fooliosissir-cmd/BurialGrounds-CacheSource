/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_stronghold_main_poll]

function clan_stronghold_main_poll(): void {
    if (clanProfileFind() == 1) {
        ifSetOnVarClanTransmit(noHook(""), 82509875);
        ifSetOnVarClanTransmit(noHook(""), 82641041);
        ifSetOnVarClanTransmit(noHook(""), 82444427);
        ifSetOnVarClanTransmit(noHook(""), 82575466);
        cs2_4917();
    }
}
