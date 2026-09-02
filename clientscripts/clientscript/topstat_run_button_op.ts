/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,topstat_run_button_op]

function topstat_run_button_op(intArg0: component, intArg1: number): void {
    if (intArg1 != 1) {
        return;
    }

    if (varc_has_displayname_client == 0) {
        return;
    }

    if (varc_option_run_status_varc == 1) {
        varc_option_run_status_varc = 0;
    } else {
        varc_option_run_status_varc = 1;
    }
    proc_topstat_run_button_update(intArg0);
}
