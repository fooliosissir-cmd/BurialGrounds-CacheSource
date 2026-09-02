/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_caller_init]

function clanwars_caller_init(intArg0: component, intArg1: component, intArg2: component): void {
    if (bool_to_int(varc_clanwars_caller_init) == 0) {
        varcstr_clanwars_caller = "";
        varcstr_clanwars_caller_lastusedstring = "";
        varc_clanwars_caller_init = true;
    }
    proc_clanwars_caller_namechange(intArg0, intArg1, intArg2);
    ifSetOnVarcStrTransmit(hook(clientscript_clanwars_caller_namechange, "IIIY", [intArg0, intArg1, intArg2], [38]), intArg0);
    ifSetOnChatTransmit(hook(cs2_1810, "III", [intArg0, intArg1, intArg2]), intArg0);
}
