/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stock_offercount_100]

function stock_offercount_100(): void {
    if (varp_1113 == 0) {
        if (varc_stock_offercount_visible <= 2147483547) {
            varc_stock_offercount_visible = varc_stock_offercount_visible + 100;
        }
    } else {
        varc_stock_offercount_visible = 100;
    }
    ifSetText(tostringLocalised(varc_stock_offercount_visible, 1), Component.interface_105.component_105_148);
    cs2_602();
}
