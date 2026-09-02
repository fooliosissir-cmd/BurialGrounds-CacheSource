/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,shop_refresh_stock]

function shop_refresh_stock(): void {
    let int0: inv = varp_shop;

    if (varp_shop_filter == 1) {
        int0 = Inv.inv;
    }
    cs2_6093(int0);
}
