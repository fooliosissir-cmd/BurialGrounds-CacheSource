/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1822

function cs2_1822(intArg0: number, intArg1: number): void {
    if (clanwars_setup_clicktest(intArg0) == 0) {
        return;
    }

    if (varc_clanwars_rulevarc_timelimit != intArg1) {
        varc_clanwars_rulevarc_timelimit = intArg1;
        cs2_1771();
    }
}
