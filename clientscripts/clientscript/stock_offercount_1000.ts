/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stock_offercount_1000]

function stock_offercount_1000(): void {
    let int0: number = 0;
    let int1: number = 0;

    if (varp_1113 == 0) {
        if (varc_stock_offercount_visible <= 2147482647) {
            varc_stock_offercount_visible = varc_stock_offercount_visible + 1000;
        }
    } else {
        int0 = invTotal(Inv.inv, varp_1109);
        if (varp_1109 != ocCert(varp_1109)) {
            int1 = invTotal(Inv.inv, ocCert(varp_1109));
        }
        varc_stock_offercount_visible = int0;
        if (varc_stock_offercount_visible <= 1000000000 && int1 <= 1000000000) {
            varc_stock_offercount_visible = varc_stock_offercount_visible + int1;
        }
    }
    ifSetText(tostringLocalised(varc_stock_offercount_visible, 1), Component.interface_105.component_105_148);
    cs2_602();
}
