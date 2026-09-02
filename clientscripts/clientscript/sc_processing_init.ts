/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,sc_processing_init]

function sc_processing_init(): void {
    ifSetHide(true, Component.interface_813.component_813_75);
    varc_582 = 0;
    ifSetOnVarcTransmit(hook(cs2_1918, "Y", [], [583, 584, 585, 586, 587]), Component.interface_813.component_813_27);
}
