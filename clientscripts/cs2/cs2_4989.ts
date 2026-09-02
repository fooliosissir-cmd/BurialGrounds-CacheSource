/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4989

function cs2_4989(intArg0: number): void {
    let [int1, int2, int3, int4, int5] = cs2_4958(intArg0);
    cs2_4988(varbit_clan_stronghold_main_selected_building_varp);
    cs2_4937();
    varbit_clan_stronghold_main_selected_building_varp = int1;
    varbit_clan_stronghold_main_selected_plot_varp = cs2_4945(int1);
}
