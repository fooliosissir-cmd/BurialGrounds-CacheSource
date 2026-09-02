/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stock_offercount_minus]

function stock_offercount_minus(): void {
    let str0: string = "null";

    if (varc_stock_offercount_visible > 0) {
        varc_stock_offercount_visible = varc_stock_offercount_visible - 1;
        str0 = tostringLocalised(varc_stock_offercount_visible, 1);
        ifSetText(str0, Component.interface_105.component_105_148);
        cs2_602();
    }
}
