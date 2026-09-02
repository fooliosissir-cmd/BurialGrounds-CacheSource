/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_report_abuse_stage1_next]

function proc_lobbyscreen_report_abuse_stage1_next(): void {
    if (stringLength(varcstr_lobbyscreen_input) <= 0) {
        return;
    }
    varcstr_lobbyscreen_report_abuse_name = varcstr_lobbyscreen_input;
    proc_lobbyscreen_report_abuse_stage1_close();

    if (stringLength(varcstr_lobbyscreen_report_abuse_name) > 0) {
        proc_lobbyscreen_report_abuse_stage2();
        varc_snapshot_typed_entry = 1;
    }
}
