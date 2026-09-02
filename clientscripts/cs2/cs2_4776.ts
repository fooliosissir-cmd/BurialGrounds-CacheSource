/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4776

function cs2_4776(intArg0: number, intArg1: number, intArg2: number): void {
    if (clanProfileFind() == 1) {
        cs2_4777(intArg0, intArg1, intArg2);
        varc_clan_build_list_changed = 0;
    }
}
