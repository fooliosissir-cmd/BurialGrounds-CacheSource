/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,evq_spline_fleet]

function clientscript_evq_spline_fleet(): void {
    if (varc_evq_region_sw != -1) {
        proc_evq_spline_fleet();
        ifSetOnVarcTransmit(noHook(""), Component.fade2.eventlayer);
    } else {
        ifSetOnVarcTransmit(hook(clientscript_evq_spline_fleet, "Y", [], [1065]), Component.fade2.eventlayer);
    }
}
