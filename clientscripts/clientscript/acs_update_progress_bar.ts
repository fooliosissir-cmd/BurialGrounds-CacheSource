/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,acs_update_progress_bar]

function acs_update_progress_bar(): void {
    if (varc_acs_progress_bar_fill_value > 100) {
        varc_acs_progress_bar_fill_value = 100;
    }
    ifSetSize(scale(varc_acs_progress_bar_fill_value, 100, 16384), 16384, 2, 2, Component.interface_481.component_481_15);
}
