/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,shop_refresh_item_info]

function shop_refresh_item_info(): void {
    if (varp_shop_last_viewed_inventory != -1 && varp_shop_last_viewed_slot != -1) {
        proc_shop_item_info(varp_shop_last_viewed_inventory, varp_shop_last_viewed_slot);
        cs2_6111();
    } else {
        cs2_6107();
    }
}
