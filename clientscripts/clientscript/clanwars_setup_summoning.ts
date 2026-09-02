/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_setup_summoning]

function clanwars_setup_summoning(intArg0: number): void {
    if (mapMembers() == 0) {
        return;
    }

    if (clanwars_setup_clicktest(intArg0) == 0) {
        return;
    }

    if (varc_clanwars_rulevarc_nosummoning == false) {
        varc_clanwars_rulevarc_nosummoning = true;
    } else {
        varc_clanwars_rulevarc_nosummoning = false;
    }
    clanwars_resynch_summoning();
}
