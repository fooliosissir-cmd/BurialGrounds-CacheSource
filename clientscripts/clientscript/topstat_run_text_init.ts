/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,topstat_run_text_init]

function topstat_run_text_init(intArg0: component): void {
    proc_topstat_run_text_update(intArg0);
    ifSetOnMiscTransmit(hook(clientscript_topstat_run_text_update, "I", [intArg0]), intArg0);
}
