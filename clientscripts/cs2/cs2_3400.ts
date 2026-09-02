/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3400

function cs2_3400(): void {
    if (stringLength(varcstr_lobbyscreen_report_abuse_name) <= 0) {
        return;
    }
    cs2_3391();
    proc_lobbyscreen_report_abuse_stage2();
    varc_snapshot_typed_entry = 0;
}
