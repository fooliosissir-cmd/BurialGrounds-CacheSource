/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4892

function cs2_4892(): void {
    if (clanProfileFind() == 1) {
        varbit_clan_stronghold_main_selected_layout_varp = loadClanVarbit<2074>();
        varbit_clan_stronghold_main_selected_daynight_varp = loadClanVarbit<2075>();
        cs2_5974();
        cs2_5975();
    }
}
