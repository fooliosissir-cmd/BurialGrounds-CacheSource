/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_setup_magic]

function clanwars_setup_magic(intArg0: number): void {
    if (clanwars_setup_clicktest(intArg0) == 0) {
        return;
    }

    if (mapMembers() == 0) {
        if (varc_clanwars_rulevarc_nomagic == 1) {
            varc_clanwars_rulevarc_nomagic = 2;
        } else if (varc_clanwars_rulevarc_nomagic == 2) {
            varc_clanwars_rulevarc_nomagic = 3;
        } else {
            varc_clanwars_rulevarc_nomagic = 1;
        }
    } else {
        varc_clanwars_rulevarc_nomagic = (varc_clanwars_rulevarc_nomagic + 1) % 4;
    }
    clanwars_resynch_magic();
}
