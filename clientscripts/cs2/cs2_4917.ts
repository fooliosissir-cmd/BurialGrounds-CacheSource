/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4917

function cs2_4917(): void {
    if (clanProfileFind() == 1) {
        ifSetOnVarClanTransmit(hook(cs2_4918, "", []), 82509875);
        ifSetOnVarClanTransmit(hook(cs2_4918, "", []), 82641041);
        varbit_clan_stronghold_main_selected_layout_varp = loadClanVarbit<2074>();
        varbit_clan_stronghold_main_selected_daynight_varp = loadClanVarbit<2075>();
        cs2_5974();
        cs2_4991();
        cs2_4900();
        cs2_4905();
        cs2_4907();
        cs2_5012();
        cs2_5975();
        cs2_4864();
        cs2_4994();
        cs2_4889();
        cs2_4853();
        cs2_4913();
    } else {
        mes("Clan stronghold information not yet available.");
    }
}
