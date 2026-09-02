/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_setup_prayer]

function clanwars_setup_prayer(intArg0: number): void {
    if (clanwars_setup_clicktest(intArg0) == 0) {
        return;
    }

    if (varc_clanwars_rulevarc_noprayer == false) {
        varc_clanwars_rulevarc_noprayer = true;
    } else {
        varc_clanwars_rulevarc_noprayer = false;
    }
    clanwars_resynch_prayer();
}
