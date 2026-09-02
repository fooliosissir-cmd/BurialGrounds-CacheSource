/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stockcollect_onload]

function stockcollect_onload(): void {
    ifSetOnInvTransmit(hook(clientscript_stockcollect_refresh, "Y", [], [523, 524, 525, 526, 527, 528, 540]), Component.interface_109.component_109_16);
    ifSetOnStockTransmit(hook(clientscript_stockcollect_refresh, "", []), 7143440);
    ifSetOnVarTransmit(hook(clientscript_stockcollect_refresh, "Y", [], [1267, 1269]), Component.interface_109.component_109_16);
    proc_stockcollect_refresh();
}
