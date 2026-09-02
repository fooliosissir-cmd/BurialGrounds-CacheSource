/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,advisor_alert_player]

function advisor_alert_player(): void {
    if (varc_advisor_alert_cc == 1) {
        return;
    }

    if (cs2_2728() == 1 && varbit_advisor_tutorial_id == 0 && varp_tutorial >= 1000) {
        if (varc_playerdesign2_client_haircol > clientClock()) {
            return;
        }
        varc_playerdesign2_client_haircol = clientClock() + 1500;
        if (varp_lumbcat_in_quest_for_client == 1) {
            mes("Your health is low! Run away from your attacker and speak to Xenia.");
        } else {
            mes("Your health is low! Find a safe place away from your attacker");
            mes("or eat some food to heal yourself.");
        }
    }
    varc_advisor_alert_cc = 1;
}
