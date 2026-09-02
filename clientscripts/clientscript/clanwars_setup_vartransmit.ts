/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_setup_vartransmit]

function clanwars_setup_vartransmit(): void {
    if (varc_clanwars_rulevarc_endtype != varbit_clanwars_rules_endtype) {
        varc_clanwars_rulevarc_endtype = varbit_clanwars_rules_endtype;
        cs2_1770();
    }

    if (varc_clanwars_rulevarc_timelimit != varbit_clanwars_rules_timelimit) {
        varc_clanwars_rulevarc_timelimit = varbit_clanwars_rules_timelimit;
        cs2_1771();
    }

    if (bool_to_int(varc_clanwars_rulevarc_nostragglers) != varbit_clanwars_rules_nostragglers) {
        varc_clanwars_rulevarc_nostragglers = int_to_bool(varbit_clanwars_rules_nostragglers);
        cs2_1772();
    }

    if (bool_to_int(varc_clanwars_rulevarc_itemloss) != varbit_clanwars_rules_itemloss) {
        varc_clanwars_rulevarc_itemloss = int_to_bool(varbit_clanwars_rules_itemloss);
        cs2_1773();
    }

    if (bool_to_int(varc_clanwars_rulevarc_nomelee) != varbit_clanwars_rules_nomelee) {
        varc_clanwars_rulevarc_nomelee = int_to_bool(varbit_clanwars_rules_nomelee);
        clanwars_resynch_melee();
    }

    if (varc_clanwars_rulevarc_nomagic != varbit_clanwars_rules_nomagic) {
        varc_clanwars_rulevarc_nomagic = varbit_clanwars_rules_nomagic;
        clanwars_resynch_magic();
    }

    if (bool_to_int(varc_clanwars_rulevarc_noranged) != varbit_clanwars_rules_noranged) {
        varc_clanwars_rulevarc_noranged = int_to_bool(varbit_clanwars_rules_noranged);
        clanwars_resynch_ranged();
    }

    if (bool_to_int(varc_clanwars_rulevarc_noprayer) != varbit_clanwars_rules_noprayer) {
        varc_clanwars_rulevarc_noprayer = int_to_bool(varbit_clanwars_rules_noprayer);
        clanwars_resynch_prayer();
    }

    if (bool_to_int(varc_clanwars_rulevarc_nosummoning) != varbit_clanwars_rules_nosummoning) {
        varc_clanwars_rulevarc_nosummoning = int_to_bool(varbit_clanwars_rules_nosummoning);
        clanwars_resynch_summoning();
    }

    if (bool_to_int(varc_clanwars_rulevarc_nofood) != varbit_clanwars_rules_nofood) {
        varc_clanwars_rulevarc_nofood = int_to_bool(varbit_clanwars_rules_nofood);
        clanwars_resynch_food();
    }

    if (bool_to_int(varc_clanwars_rulevarc_nopotions) != varbit_clanwars_rules_nopotions) {
        varc_clanwars_rulevarc_nopotions = int_to_bool(varbit_clanwars_rules_nopotions);
        clanwars_resynch_potions();
    }

    if (varc_clanwars_rulevarc_arenachoice != varbit_clanwars_rules_arenachoice) {
        varc_clanwars_rulevarc_arenachoice = varbit_clanwars_rules_arenachoice;
        cs2_1781();
    }
    varc_clanwars_rulevarc_accept = int_to_bool(varbit_clanwars_rules_accept);
    clanwars_resynch_accept();
}
