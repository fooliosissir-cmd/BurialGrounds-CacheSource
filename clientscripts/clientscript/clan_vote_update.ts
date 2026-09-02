/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_vote_update]

function clan_vote_update(): void {
    if (varp_2134 == varc_1499) {
        ifSetText("You have voted.", Component.clan_voting.vote_status);
    } else {
        ifSetText("You have not yet voted." + "<br>" + "How would you like to vote?", Component.clan_voting.vote_status);
    }

    if (varbit_clan_custom_vote_inprogress_varp == 0) {
        ifSetText("Results of last vote:", Component.clan_voting.vote_time);
    } else if (varbit_clan_custom_vote_time_remaining == 1 || varbit_clan_custom_vote_time_remaining == 0) {
        ifSetText("Vote open for less than a minute.", Component.clan_voting.vote_time);
    } else {
        ifSetText("Vote open for less than " + tostring(varbit_clan_custom_vote_time_remaining) + " minutes.", Component.clan_voting.vote_time);
    }
    let int0: number = varbit_clan_custom_vote_yes_varp + varbit_clan_custom_vote_no_varp;
    let int1: number = 0;
    let int2: number = 0;

    if (int0 > 0) {
        if (int0 == varbit_clan_custom_vote_yes_varp) {
            int1 = 100;
        } else if (int0 == varbit_clan_custom_vote_no_varp) {
            int2 = 100;
        } else {
            int1 = 100 * varbit_clan_custom_vote_yes_varp / int0;
            if (varbit_clan_custom_vote_no_varp == 0) {
                int2 = 0;
            } else {
                int2 = 100 - int1;
            }
        }
    }
    ifSetText(tostring(varbit_clan_custom_vote_yes_varp), Component.clan_voting.vote_yes_total);
    ifSetText(tostring(varbit_clan_custom_vote_no_varp), Component.clan_voting.vote_no_total);
    proc_aif_progressbar_set(int1, Component.clan_voting.green_large_progress_value_layer, Component.clan_voting.green_text);
    proc_aif_progressbar_set(int2, Component.clan_voting.red_large_progress_value_layer, Component.clan_voting.red_text);
}
