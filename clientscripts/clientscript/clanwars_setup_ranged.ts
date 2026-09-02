/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_setup_ranged]

function clanwars_setup_ranged(intArg0: number): void {
    if (clanwars_setup_clicktest(intArg0) == 0) {
        return;
    }

    if (varc_clanwars_rulevarc_noranged == false) {
        varc_clanwars_rulevarc_noranged = true;
    } else {
        varc_clanwars_rulevarc_noranged = false;
    }
    clanwars_resynch_ranged();
}
