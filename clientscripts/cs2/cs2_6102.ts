/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6102

function cs2_6102(): void {
    let int0: obj = Obj.mcannonremains;
    let int1: number = 0;

    ifSetText(cs2_940(varp_2564), Component.interface_1265.component_1265_67);

    if (varp_shop_last_viewed_inventory != -1 && varp_shop_last_viewed_slot != -1) {
        if (varp_shop_last_viewed_inventory == Inv.inv) {
            int0 = sellprice_total(varp_2562, varp_2564);
        } else {
            int0 = buyprice_total(varp_2562, varp_2564);
        }
        if (int0 == -1) {
            ifSetText("N/A", Component.interface_1265.component_1265_205);
            ifSetGraphic(Graphic.km_shopitems_0, Component.interface_1265.component_1265_18);
        } else if (varp_shop_last_viewed_inventory == varp_shopfreebie) {
            ifSetText("Free!", Component.interface_1265.component_1265_205);
            ifSetGraphic(-1, Component.interface_1265.component_1265_18);
        } else {
            ifSetText(cs2_940(int0), Component.interface_1265.component_1265_205);
            ifSetGraphic(enumOp(type_obj, type_graphic, Enum.enum_200, varp_currency), Component.interface_1265.component_1265_18);
        }
        int1 = parawidth(ifGetText(Component.interface_1265.component_1265_205), ifGetWidth(Component.interface_1265.component_1265_79), Graphic.verdana_11pt_regular);
        if (varp_shop_last_viewed_inventory != varp_shopfreebie) {
            int1 = int1 + 2 + ifGetWidth(Component.interface_1265.component_1265_18);
        }
        ifSetSize(int1, 15, 0, 0, Component.interface_1265.component_1265_17);
    }
}
