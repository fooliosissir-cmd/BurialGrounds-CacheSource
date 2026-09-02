/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,topstat_run_button_init]

function topstat_run_button_init(intArg0: component): void {
    varc_option_run_status_varc = varp_option_run;
    ifSetOnVarTransmit(hook(topstat_run_button_vartransmit, "IY", [intArg0], [173]), intArg0);
    ifSetOnMouseOver(hook(topstat_run_button_mouseover, "I", [intArg0]), intArg0);
    hookMouseExit(hook(topstat_run_button_mouseleave, "I", [intArg0]), intArg0);
    ifSetOnOpt(hook(topstat_run_button_op, "Ii", [intArg0, event_opindex]), intArg0);
    proc_topstat_run_button_update(intArg0);
}
