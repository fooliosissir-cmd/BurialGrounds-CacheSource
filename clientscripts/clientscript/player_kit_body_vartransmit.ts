/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,player_kit_body_vartransmit]

function player_kit_body_vartransmit(): void {
    if (varbit_player_kit_body_viewing != varc_player_kit_body_layer) {
        varc_player_kit_body_layer = varbit_player_kit_body_viewing;
        player_kit_body_redraw();
    }
}
