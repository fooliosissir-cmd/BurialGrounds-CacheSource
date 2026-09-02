/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_report_abuse_stage2_back]

function proc_lobbyscreen_report_abuse_stage2_back(): void {
    proc_lobbyscreen_report_abuse_stage2_close();
    proc_lobbyscreen_report_abuse_stage1(varcstr_lobbyscreen_report_abuse_name, varc_snapshot_mute, varc_snapshot_typed_entry);
}
