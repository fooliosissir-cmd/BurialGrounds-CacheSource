/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_248

function cs2_248(intArg0: number): void {
    if (stringLength(varcstr_snapshot_name) > 0) {
        chatSendAbuseReport(varcstr_snapshot_name, intArg0, varc_snapshot_mute, "");
    }
    cs2_675();
    varc_snapshot_open = 0;
}
