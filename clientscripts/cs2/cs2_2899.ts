/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2899

function cs2_2899(): void {
    ifSetHide(false, Component.sfa.aggro_warning);
    ifSetTrans(0, Component.sfa.aggro_warning);
    let int0: number = clientClock();
    ifSetOnTimer(hook(sfa_hide_warning, "i", [int0]), Component.sfa.aggro_warning);
}
