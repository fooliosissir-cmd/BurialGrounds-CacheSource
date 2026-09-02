/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_report_abuse_stage1]

function proc_lobbyscreen_report_abuse_stage1(strArg0: string, intArg0: number, intArg1: number): void {
    deltooltip_action(Component.interface_912.component_912_14);
    deltooltip_action(Component.interface_909.component_909_59);
    varcstr_lobbyscreen_report_abuse_name = "";
    varc_snapshot_mute = intArg0;
    varc_lobbyscreen_report_abuse_bug = 0;
    let int2: number = 0;

    if (playermod() == 1 || staffmodlevel() > 0) {
        int2 = 1;
    }

    if (intArg1 == 1) {
        cs2_2920(strArg0, int2, playermodlevel());
    } else {
        cs2_2921(removetags(strArg0), int2, playermodlevel());
    }
}
