/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5004

function cs2_5004(): void {
    let int0: number = 0;
    let int1: number = 0;

    if (clanProfileFind() == 1) {
        int0 = cs2_4948(varbit_clan_stronghold_main_selected_building_varp);
        int1 = cs2_4978(int0);
        if (int1 == int0 || int1 <= 0) {
            cs2_4899(3);
        }
    }
}
