/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,sc_tutorial_update_score]

function sc_tutorial_update_score(): void {
    let int0: number = varp_sc_score_clay_gathered + varp_sc_score_clay_processed + varp_sc_score_damage_inflicted + 2 * (varp_sc_score_clay_deposited - varp_sc_score_clay_taken);

    ifSetText("Score: " + tostring(int0), Component.interface_802.component_802_8);
}
