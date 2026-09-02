/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stock_offercount_10]

function stock_offercount_10(): void {
    if (varp_1113 == 0) {
        if (varc_stock_offercount_visible <= 2147483637) {
            varc_stock_offercount_visible = varc_stock_offercount_visible + 10;
        }
    } else {
        varc_stock_offercount_visible = 10;
    }
    ifSetText(tostringLocalised(varc_stock_offercount_visible, 1), Component.interface_105.component_105_148);
    cs2_602();
}
