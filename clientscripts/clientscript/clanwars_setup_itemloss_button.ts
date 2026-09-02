/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_setup_itemloss_button]

function clanwars_setup_itemloss_button(intArg0: number): void {
    if (clanwars_setup_clicktest(intArg0) == 0) {
        return;
    }

    if (varc_clanwars_rulevarc_itemloss == false) {
        varc_clanwars_rulevarc_itemloss = true;
    } else {
        varc_clanwars_rulevarc_itemloss = false;
    }
    cs2_1773();
}
