/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_setup_accept_button]

function clanwars_setup_accept_button(intArg0: number): void {
    if (intArg0 != 1) {
        return;
    }

    if (varc_clanwars_rulevarc_nomelee == true && varc_clanwars_rulevarc_nomagic >= 2 && varc_clanwars_rulevarc_noranged == true && (mapMembers() == 0 || varc_clanwars_rulevarc_nosummoning == true)) {
        return;
    }

    if (varc_clanwars_rulevarc_accept == false) {
        varc_clanwars_rulevarc_accept = true;
        clanwars_resynch_accept();
    }
}
