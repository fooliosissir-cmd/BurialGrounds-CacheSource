/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_602

function cs2_602(): void {
    if (varc_stock_offercount_timer <= 0) {
        varc_stock_offercount_timer = 100;
    } else {
        varc_stock_offercount_timer = varc_stock_offercount_timer + 10;
    }
    ifSetOnTimer(hook(stock_offercount_antilag, "", []), Component.interface_105.component_105_148);
}
