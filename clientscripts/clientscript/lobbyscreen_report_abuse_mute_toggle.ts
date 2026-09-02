/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_report_abuse_mute_toggle]

function lobbyscreen_report_abuse_mute_toggle(intArg0: component): void {
    if (varc_snapshot_mute == 0) {
        varc_snapshot_mute = 1;
        ifSetGraphic(Graphic.check_box_2_2, intArg0);
    } else {
        varc_snapshot_mute = 0;
        ifSetGraphic(Graphic.check_box_2_0, intArg0);
    }
}
