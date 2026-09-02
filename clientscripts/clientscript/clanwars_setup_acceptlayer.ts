/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_setup_acceptlayer]

function clanwars_setup_acceptlayer(intArg0: component): void {
    cs2_915(intArg0);

    if (varp_clanwars_challengeuid != -1) {
        cs2_1801();
    } else {
        cs2_1802();
    }
}
