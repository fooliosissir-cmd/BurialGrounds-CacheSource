/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,shop_draw]

function shop_draw(): void {
    proc_shop_draw_list(varp_shop, varp_shopfreebie, varp_shop_filter, varbit_shop_verbose_mode);
}
