/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_setup_maininit]

function clanwars_setup_maininit(intArg0: component): void {
    varc_clanwars_rulevarc_endtype = 0;
    varc_clanwars_rulevarc_timelimit = 0;
    varc_clanwars_rulevarc_nostragglers = false;
    varc_clanwars_rulevarc_itemloss = false;
    varc_clanwars_rulevarc_nomelee = false;
    varc_clanwars_rulevarc_noranged = false;

    if (mapMembers() == 0) {
        varc_clanwars_rulevarc_nomagic = 1;
        varc_clanwars_rulevarc_nosummoning = false;
        clanwars_resynch_magic();
        clanwars_resynch_summoning();
    } else {
        varc_clanwars_rulevarc_nomagic = 0;
        varc_clanwars_rulevarc_nosummoning = false;
    }
    varc_clanwars_rulevarc_nofood = false;
    varc_clanwars_rulevarc_nopotions = false;
    varc_clanwars_rulevarc_noprayer = false;
    varc_clanwars_rulevarc_arenachoice = 0;
    varc_clanwars_rulevarc_accept = false;
    varc_259 = 0;
    ifSetOnVarTransmit(hook(clanwars_setup_vartransmit, "Y", [], [1305, 1149]), intArg0);
    ifSetOnVarcTransmit(hook(clanwars_setup_varctransmit, "Y", [], [259]), intArg0);
    ifSetOnVarcStrTransmit(hook(clanwars_setup_varcstrtransmit, "IY", [intArg0], [37]), intArg0);
}
