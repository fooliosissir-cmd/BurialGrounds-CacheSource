/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_setup_nostragglers_button]

function clanwars_setup_nostragglers_button(intArg0: number): void {
    if (clanwars_setup_clicktest(intArg0) == 0) {
        return;
    }

    if (varc_clanwars_rulevarc_nostragglers == false) {
        varc_clanwars_rulevarc_nostragglers = true;
        cs2_1772();
    }
}
