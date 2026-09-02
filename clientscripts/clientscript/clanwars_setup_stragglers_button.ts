/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_setup_stragglers_button]

function clanwars_setup_stragglers_button(intArg0: number): void {
    if (clanwars_setup_clicktest(intArg0) == 0) {
        return;
    }

    if (varc_clanwars_rulevarc_nostragglers == true) {
        varc_clanwars_rulevarc_nostragglers = false;
        cs2_1772();
    }
}
