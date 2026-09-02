/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_stronghold_main_map_onload]

function clan_stronghold_main_map_onload(intArg0: component): void {
    cs2_4899(0);
    ifSetOnVarTransmit(hook(clientscript_clan_stronghold_main_map_refresh, "Y", [], [2256]), intArg0);
    ifSetOnVarClanTransmit(hook(clientscript_clan_stronghold_main_map_refresh, "", []), intArg0);
    cs2_4913();
    proc_clan_stronghold_main_map_refresh();
}
