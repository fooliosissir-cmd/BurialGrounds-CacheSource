/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,conq_update_turn]

function conq_update_turn(intArg0: number): void {
    if (varc_conq_current_team == intArg0) {
        return;
    }
    ifSetOnVarcTransmit(hook(conq_update_turn, "iY", [varc_conq_current_team], [1363]), Component.conq_scroll_overlay.turn_control_layer);
    varc_conq_played_low_time_warning = 0;

    if (varc_conq_current_team == varbit_conq_team) {
        ifSetHide(false, Component.interface_1010.component_1010_33);
        ifSetHide(true, Component.interface_1010.component_1010_32);
        ifSetHide(true, Component.interface_1010.component_1010_24);
        ifSetText("Your Turn", Component.conq_scroll_overlay.whose_turn_text);
        soundVorbisVolume(3439, 1, 0, 255);
    } else {
        ifSetHide(true, Component.interface_1010.component_1010_33);
        ifSetHide(true, Component.interface_1010.component_1010_24);
        ifSetText("Opponent's Turn", Component.conq_scroll_overlay.whose_turn_text);
        if (ifGetHide(Component.interface_1010.component_1010_7) == 1) {
            ifSetHide(false, Component.interface_1010.component_1010_32);
        }
    }
}
