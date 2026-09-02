/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_report_abuse_submit]

function proc_lobbyscreen_report_abuse_submit(intArg0: number): void {
    if (stringLength(varcstr_lobbyscreen_report_abuse_name) > 0) {
        chatSendAbuseReport(varcstr_lobbyscreen_report_abuse_name, intArg0, varc_snapshot_mute, "");
    }
    proc_lobbyscreen_report_abuse_stage2_close();

    if (stringLength(varcstr_lobbyscreen_report_abuse_name) > 0 && ignoreTest(varcstr_lobbyscreen_report_abuse_name) == 0 && compare(varcstr_lobbyscreen_report_abuse_name, chatPlayerName()) != 0) {
        if (intArg0 == 5) {
            varc_lobbyscreen_report_abuse_bug = 1;
        }
        lobbyscreen_report_abuse_ignore();
    } else {
        varc_lobbyscreen_report_abuse_bug = 0;
        if (intArg0 == 5) {
            lobbyscreen_input_full("", "Open a bug report form?" + "<br>" + "(opens a new window)", 0, 6, "", "", 1);
        }
    }
}
