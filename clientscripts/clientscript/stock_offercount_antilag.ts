/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stock_offercount_antilag]

function stock_offercount_antilag(): void {
    if (varc_stock_offercount_timer <= 0) {
        ifSetOnTimer(noHook(""), Component.interface_105.component_105_148);
        cs2_621();
    }
    varc_stock_offercount_timer = varc_stock_offercount_timer - 1;
}
