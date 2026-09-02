/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_stronghold_main_map_refresh]

function proc_clan_stronghold_main_map_refresh(): void {
    if (clanProfileFind() == 1) {
        cs2_5974();
        cs2_5975();
        cs2_5012();
        cs2_4900();
    }
}
