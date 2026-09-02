/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4985

function cs2_4985(): void {
    let int0: number = -1;

    if (clanProfileFind() == 1 && varbit_clan_stronghold_main_selected_building_varp > 0) {
        int0 = cs2_4948(varbit_clan_stronghold_main_selected_building_varp);
        if (int0 <= 0) {
            cs2_4899(4);
        }
    }
}
