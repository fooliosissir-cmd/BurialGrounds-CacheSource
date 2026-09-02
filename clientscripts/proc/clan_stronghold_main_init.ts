/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_stronghold_main_init]

function proc_clan_stronghold_main_init(intArg0: component): void {
    if (clanProfileFind() == 1) {
        varbit_clan_stronghold_main_selected_layout_varp = loadClanVarbit<2074>();
        varbit_clan_stronghold_main_selected_daynight_varp = loadClanVarbit<2075>();
    }
    varc_clan_stronghold_main_map_next_week = 0;
    clan_stronghold_main_map_onload(intArg0);
}
