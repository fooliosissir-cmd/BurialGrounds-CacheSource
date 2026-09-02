/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4773

function cs2_4773(intArg0: number, intArg1: number, intArg2: number): void {
    if (clanProfileFind() == 1 && varbit_clan_build_jobid_selected == intArg0) {
        if (varc_clan_build_list_changed == 1) {
            cs2_4768();
            cs2_4777(intArg0, intArg1, intArg2);
        }
        varc_clan_build_list_changed = 0;
    }
}
