/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_stronghold_main_refresh]

function clan_stronghold_main_refresh(): void {
    let int0: number = 0;

    if (clanProfileFind() == 1) {
        if (varbit_clan_stronghold_main_selected_building_varp > 0) {
            if (ifGetHide(Component.interface_1261.component_1261_103) == 0) {
                cs2_4989(cs2_4948(varbit_clan_stronghold_main_selected_building_varp));
            }
        } else {
            cs2_5007();
            cs2_4935();
            cs2_4905();
            cs2_4907();
            cs2_5012();
            cs2_5975();
            cs2_4864();
            cs2_4994();
            cs2_4889();
            cs2_4881();
        }
        cs2_4853();
    }
}
