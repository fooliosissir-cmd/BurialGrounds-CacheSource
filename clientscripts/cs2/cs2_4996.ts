/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4996

function cs2_4996(intArg0: number): void {
    let int1: number = -1;
    let int2: number = -1;
    let int3: number = 0;
    let int4: struct = -1;
    let int5: struct = -1;
    let int6: number = -1;

    ifSetHide(false, Component.interface_1261.component_1261_115);

    if (clanProfileFind() == 1) {
        cs2_4899(1);
        int2 = cs2_4963(intArg0);
        varbit_clan_stronghold_main_selected_building_varp = int2;
        if (int2 <= 0) {
            mes("You must first select a building.");
            return;
        }
        int1 = cs2_4948(int2);
        int4 = cs2_4954(int2);
        if (int4 == -1) {
            return;
        }
        int5 = cs2_4955(int2);
        if (int5 == -1) {
            return;
        }
        if (int1 > 0) {
            int3 = cs2_4959(int1);
        }
        cs2_4988(varbit_clan_stronghold_main_selected_building_varp);
        cs2_4937();
    }
}
