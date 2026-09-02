/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6093

function cs2_6093(intArg0: inv): void {
    let int1: component = Component.interface_1265.component_1265_20;
    let int2: component = Component.interface_1265.component_1265_26;
    let int3: component = Component.interface_1265.component_1265_23;
    let int4: component = Component.interface_1265.component_1265_24;

    if (intArg0 == varp_shopfreebie) {
        int1 = Component.interface_1265.component_1265_21;
        int2 = Component.interface_1265.component_1265_97;
        int3 = Component.interface_1265.component_1265_95;
        int4 = -1;
    }
    let int5: number = 0;
    let int6: number = 0;
    let int7: obj = Obj.mcannonremains;
    let int8: obj = -1;
    let int9: number = 0;

    while (int5 < invSize(intArg0)) {
        int8 = invGetobj(intArg0, int5);
        if (int8 != -1) {
            if (ccFind(int2, int5) == 1 && ccGetInvObject() == int8) {
                if (ocParam(int8, Param.skillcape) == 1 || ocParam(int8, Param.skillcape_trimmed) == 1) {
                    int9 = 1;
                } else {
                    int9 = 0;
                }
                if (int9 == 1) {
                    ccSetObjectNonum(int8, invGetNum(intArg0, int5));
                } else if (intArg0 == Inv.naffstaffshop && int8 == Obj.battlestaff) {
                    ccSetObjectAlwaysNum(int8, battlestaff_number());
                } else {
                    ccSetObjectAlwaysNum(int8, invGetNum(intArg0, int5));
                }
            }
            if (ccFind(int3, int5) == 1) {
                int7 = buyprice(int8);
                if (varp_shop_filter == 1) {
                    if (testBit(varc_1879, int5) == 0) {
                        int7 = -1;
                    } else {
                        int7 = sellprice(int8);
                    }
                }
                if (int7 == -1) {
                    ccSetText("N/A");
                } else if (intArg0 == varp_shopfreebie) {
                    ccSetText("Free!");
                } else {
                    ccSetText(cs2_940(int7));
                }
            }
            if (int4 != -1 && ccFind(int4, int5) == 1) {
                if (varp_shop_filter == 1 && int7 == -1) {
                    ccSetGraphic(Graphic.km_shopitems_0);
                } else {
                    ccSetGraphic(enumOp(type_obj, type_graphic, Enum.enum_200, varp_currency));
                }
            }
        } else if (ccFind(int1, int5) == 1 && ccGetGraphic() != -1) {
            proc_shop_draw_list(varp_shop, varp_shopfreebie, varp_shop_filter, varbit_shop_verbose_mode);
            if (varp_shop_last_viewed_slot == int5) {
                cs2_6107();
            }
            return;
        }
        int5 = int5 + 1;
    }
}
