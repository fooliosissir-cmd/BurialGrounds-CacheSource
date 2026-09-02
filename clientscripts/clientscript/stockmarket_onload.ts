/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stockmarket_onload]

function stockmarket_onload(): void {
    ifSetOnVarTransmit(hook(cs2_588, "Y", [], [1109]), Component.interface_105.component_105_127);
    ifSetOnStockTransmit(hook(stockmarket_onstocktransmit, "", []), 6881295);
    cs2_621();
}
