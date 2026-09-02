/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,sfa_hide_warning]

function sfa_hide_warning(intArg0: number): void {
    if (clientClock() > intArg0 + 200) {
        ifSetOnTimer(noHook(""), Component.sfa.aggro_warning);
        ifSetHide(true, Component.sfa.aggro_warning);
    } else if (clientClock() > intArg0 + 150) {
        ifSetTrans(min(ifGetTrans(Component.sfa.aggro_warning) + 10, 255), Component.sfa.aggro_warning);
    }
}
