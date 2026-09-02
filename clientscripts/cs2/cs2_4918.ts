/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4918

function cs2_4918(): void {
    if (clanProfileFind() == 1) {
        clan_stronghold_main_refresh();
        cs2_4900();
        cs2_4905();
        cs2_4907();
        cs2_5012();
        cs2_5975();
        cs2_4864();
        cs2_4994();
        cs2_4889();
        cs2_4853();
        cs2_4988(varbit_clan_stronghold_main_selected_building_varp);
    } else {
        cs2_675();
    }
}
