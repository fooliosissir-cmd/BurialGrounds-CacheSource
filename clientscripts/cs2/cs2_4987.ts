/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4987

function cs2_4987(intArg0: number): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: struct = -1;
    let int4: struct = -1;
    let int5: number = 0;
    let int6: number = cs2_4966(intArg0);

    if (clanProfileFind() == 1) {
        int1 = cs2_4949(int6);
        varbit_clan_stronghold_main_selected_building_varp = int1;
    }

    if (varbit_clan_stronghold_main_map_mode == 1 || varbit_clan_stronghold_main_map_mode == 2) {
        [int1, int2, int3, int4, int5] = cs2_4958(int6);
        cs2_4988(varbit_clan_stronghold_main_selected_building_varp);
        cs2_4937();
    } else if (varbit_clan_stronghold_main_map_mode == 4 || varbit_clan_stronghold_main_map_mode == 3) {
        varbit_clan_stronghold_main_selected_building_varp = cs2_4949(int6);
        cs2_4988(varbit_clan_stronghold_main_selected_building_varp);
        cs2_4937();
        cs2_4905();
        cs2_4907();
        varbit_clan_stronghold_main_map_mode = 1;
        cs2_4899(1);
    }
}
