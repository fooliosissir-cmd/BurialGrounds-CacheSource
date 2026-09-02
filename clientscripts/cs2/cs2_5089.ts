/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5089

function cs2_5089(intArg0: Enum): number {
    switch (intArg0) {
        case Enum.clan_field_rules_layout:
            return varbit_clan_field_rules_layout;
        case Enum.clan_field_rules_multiway:
            return varbit_clan_field_rules_multiway;
        case Enum.clan_field_rules_pvp:
            return varbit_clan_field_rules_pvp;
        case Enum.clan_field_rules_pointsforkilling:
            return varbit_clan_field_rules_pointsforkilling;
        case Enum.clan_field_rules_enableteams:
            return varbit_clan_field_rules_enableteams;
        case Enum.clan_field_rules_endcondition_teampoints:
            return varbit_clan_field_rules_endcondition_teampoints;
        case Enum.clan_field_rules_endcondition_playerpoints:
            return varbit_clan_field_rules_endcondition_playerpoints;
        case Enum.clan_field_rules_endcondition_timelimit:
            return varbit_clan_field_rules_endcondition_timelimit;
        case Enum.clan_field_rules_endcondition_timelimitcriterion:
            return varbit_clan_field_rules_endcondition_timelimitcriterion;
        case Enum.clan_field_rules_nomelee:
            return varbit_clan_field_rules_nomelee;
        case Enum.clan_field_rules_noranged:
            return varbit_clan_field_rules_noranged;
        case Enum.clan_field_rules_nomagic:
            return varbit_clan_field_rules_nomagic;
        case Enum.clan_field_rules_nosummoning:
            return varbit_clan_field_rules_nosummoning;
        case Enum.clan_field_rules_nofood:
            return varbit_clan_field_rules_noeating;
        case Enum.clan_field_rules_nodrink:
            return varbit_clan_field_rules_nodrinking;
        case Enum.clan_field_rules_noprayer:
            return varbit_clan_field_rules_noprayer;
        case Enum.clan_field_rules_tackle:
            return varbit_clan_field_rules_tackleenabled;
        case Enum.clan_field_rules_night:
            return varbit_clan_field_rules_night;
    }
    return 0;
}
