/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,objdialog_delay_timer]

function objdialog_delay_timer(): void {
    varc_objdialog_timer = varc_objdialog_timer - 1;

    if (varc_objdialog_timer > 0) {
        return;
    }
    ifSetOnTimer(noHook(""), Component.interface_389.component_389_9);
    objdialog_refreshsearch();
}
