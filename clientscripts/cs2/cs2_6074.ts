/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6074

function cs2_6074(intArg0: obj): void {
    let int1: obj = varp_2564;
    let int2: obj = 2147483647;
    let int3: obj = -1;
    let int4: obj = Obj.mcannonremains;

    if (varp_shop_last_viewed_inventory != -1 && varp_shop_last_viewed_slot != -1) {
        int3 = invGetobj(varp_shop_last_viewed_inventory, varp_shop_last_viewed_slot);
        if (varp_shop_last_viewed_inventory == Inv.inv) {
            int2 = Obj.obj_500;
            int4 = sellprice(int3);
        } else {
            int4 = buyprice(int3);
        }
        if (varp_shop == Inv.naffstaffshop && int3 == Obj.battlestaff) {
            int2 = battlestaff_number();
        } else if (int3 != -1) {
            int2 = min(int2, invTotal(varp_shop_last_viewed_inventory, int3));
            if (ocStackable(int3) == 0 && varp_shop_last_viewed_inventory != Inv.inv) {
                int2 = min(int2, invFreespace(93));
            }
        } else {
            int2 = Obj.mcannontoolkit;
        }
    }

    if (int4 > Obj.mcannonremains) {
        int2 = min(int2, 2147483647 / int4);
    }

    if (intArg0 > Obj.mcannonremains) {
        if (intArg0 > int2) {
            int1 = int2;
            ifSetText(cs2_940(int1), Component.interface_1265.component_1265_67);
            return;
        }
        if (2147483647 - int1 < intArg0) {
            int1 = int2;
            ifSetText(cs2_940(int1), Component.interface_1265.component_1265_67);
            return;
        } else {
            int1 = min(int1 + intArg0, int2);
        }
    } else {
        int1 = min(int2, max(1, int1 + intArg0));
    }
    ifSetText(cs2_940(int1), Component.interface_1265.component_1265_67);
}
