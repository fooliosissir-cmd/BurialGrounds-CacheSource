/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stock_offerprice_antilag]

function stock_offerprice_antilag(): void {
    if (varc_stock_offerprice_timer <= 0) {
        ifSetOnTimer(noHook(""), Component.interface_105.component_105_153);
        cs2_621();
    }
    varc_stock_offerprice_timer = varc_stock_offerprice_timer - 1;
}
