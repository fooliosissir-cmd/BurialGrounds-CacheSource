/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2893

function cs2_2893(): void {
    if (varc_sfa_initial_disappear == 1) {
        ifSetOnTimer(noHook(""), Component.sfa.initial);
        ifSetHide(true, Component.sfa.initial);
        varc_sfa_initial_disappear = 0;
    }
}
