/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_609

function cs2_609(): void {
    if (varc_stock_offerprice_timer <= 0) {
        varc_stock_offerprice_timer = 100;
    } else {
        varc_stock_offerprice_timer = varc_stock_offerprice_timer + 10;
    }
    ifSetOnTimer(hook(stock_offerprice_antilag, "", []), Component.interface_105.component_105_153);
}
