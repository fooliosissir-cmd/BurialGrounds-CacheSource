/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,snp_delete_tooltip]

function snp_delete_tooltip(intArg0: component): void {
    deltooltip_action(intArg0);
    varc_snp_delete_tooltip_flag_client = 0;
}
