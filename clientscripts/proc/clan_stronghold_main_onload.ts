/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_stronghold_main_onload]

function proc_clan_stronghold_main_onload(): void {
    ifSetOnVarClanTransmit(hook(clan_stronghold_main_poll, "", []), 82509875);
    ifSetOnVarClanTransmit(hook(clan_stronghold_main_poll, "", []), 82641041);
    ifSetOnVarClanTransmit(hook(clan_stronghold_main_poll, "", []), 82444427);
    ifSetOnVarClanTransmit(hook(clan_stronghold_main_poll, "", []), 82575466);
    cs2_4993();
    cs2_4853();
}
