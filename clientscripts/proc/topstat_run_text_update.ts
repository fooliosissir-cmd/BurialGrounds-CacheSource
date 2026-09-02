/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,topstat_run_text_update]

function proc_topstat_run_text_update(intArg0: component): void {
    ifSetColour(cs2_806(), intArg0);
    ifSetText(tostring(runenergyVisible()), intArg0);
}
