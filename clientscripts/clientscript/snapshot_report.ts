/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,snapshot_report]

function snapshot_report(intArg0: number): void {
    let int1: number = -1;

    if (stringLength(varcstr_snapshot_name) > 0) {
        chatSendAbuseReport(varcstr_snapshot_name, intArg0, varc_snapshot_mute, "");
    }

    if (compare(varcstr_snapshot_name, chatPlayerNameUnfiltered()) == 0) {
        cs2_675();
        return;
    }

    if (ignoreTest(varcstr_snapshot_name) == 0 && compare(varcstr_snapshot_name, chatPlayerNameUnfiltered()) != 0) {
        cs2_221();
    } else {
        cs2_675();
    }
}
