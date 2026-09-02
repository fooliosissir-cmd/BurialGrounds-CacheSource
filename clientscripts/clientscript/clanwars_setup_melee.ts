/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_setup_melee]

function clanwars_setup_melee(intArg0: number): void {
    if (clanwars_setup_clicktest(intArg0) == 0) {
        return;
    }

    if (varc_clanwars_rulevarc_nomelee == false) {
        varc_clanwars_rulevarc_nomelee = true;
    } else {
        varc_clanwars_rulevarc_nomelee = false;
    }
    clanwars_resynch_melee();
}
