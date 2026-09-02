/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,shop_item_info]

function proc_shop_item_info(intArg0: inv, intArg1: number): void {
    if (varp_shop_last_viewed_inventory == -1 || varp_shop_last_viewed_slot == -1) {
        return;
    }
    ifSetHide(false, Component.interface_1265.component_1265_172);
    ifSetHide(false, Component.interface_1265.component_1265_82);
    ifSetHide(false, Component.interface_1265.component_1265_202);
    let int2: obj = invGetobj(intArg0, intArg1);

    if (int2 == -1 || invTotal(intArg0, int2) == -1) {
        ifSetText("Select an item", Component.interface_1265.component_1265_39);
        ifSetObject(-1, -1, Component.interface_1265.component_1265_41);
        ifSetText("N/A", Component.interface_1265.component_1265_205);
        ifSetGraphic(-1, Component.interface_1265.component_1265_18);
        ifSetColour(colour(0x827F79), Component.interface_1265.component_1265_204);
        ifSetText("N/A", Component.interface_1265.component_1265_204);
        return;
    }
    ifSetColour(colour(0xE5B051), Component.interface_1265.component_1265_204);
    ifSetText(ocName(int2), Component.interface_1265.component_1265_39);
    ifSetObject(int2, -1, Component.interface_1265.component_1265_41);
    ifSetText(varcstr_362, Component.interface_1265.component_1265_40);
    let int3: obj = buyprice_total(int2, varp_2564);

    if (intArg0 == Inv.inv) {
        ifSetText("Value:", Component.interface_1265.component_1265_78);
        ifSetText("Sell", Component.interface_1265.component_1265_204);
        int3 = sellprice_total(int2, varp_2564);
        if (testBit(varc_1879, intArg1) == 0) {
            int3 = -1;
        }
    } else if (intArg0 == varp_shopfreebie) {
        ifSetText("Price:", Component.interface_1265.component_1265_78);
        ifSetText("Take", Component.interface_1265.component_1265_204);
    } else {
        ifSetText("Price:", Component.interface_1265.component_1265_78);
        ifSetText("Buy", Component.interface_1265.component_1265_204);
    }
    let int4: obj = invTotal(Inv.inv, varp_currency);

    if (varp_currency == Obj.coins) {
        int4 = int4 + invTotal(Inv.inv_623, varp_currency);
    }

    if (int4 == Obj.mcannonremains) {
        ifSetText("None!", Component.interface_1265.component_1265_207);
        ifSetGraphic(Graphic.km_shopitems_0, Component.interface_1265.component_1265_206);
    } else {
        ifSetText(cs2_940(int4), Component.interface_1265.component_1265_207);
        ifSetGraphic(enumOp(type_obj, type_graphic, Enum.enum_200, varp_currency), Component.interface_1265.component_1265_206);
    }
    let int5: number = parawidth(ifGetText(Component.interface_1265.component_1265_207), ifGetWidth(Component.interface_1265.component_1265_77), Graphic.verdana_11pt_regular);
    int5 = int5 + 2 + ifGetWidth(Component.interface_1265.component_1265_206);
    ifSetSize(int5, 15, 0, 0, Component.interface_1265.component_1265_16);

    if (int3 == -1) {
        ifSetText("N/A", Component.interface_1265.component_1265_205);
        ifSetGraphic(Graphic.km_shopitems_0, Component.interface_1265.component_1265_18);
    } else if (intArg0 == varp_shopfreebie) {
        ifSetText("Free!", Component.interface_1265.component_1265_205);
        ifSetGraphic(-1, Component.interface_1265.component_1265_18);
    } else {
        ifSetText(cs2_940(int3), Component.interface_1265.component_1265_205);
        ifSetGraphic(enumOp(type_obj, type_graphic, Enum.enum_200, varp_currency), Component.interface_1265.component_1265_18);
    }
    int5 = parawidth(ifGetText(Component.interface_1265.component_1265_205), ifGetWidth(Component.interface_1265.component_1265_79), Graphic.verdana_11pt_regular);

    if (intArg0 != varp_shopfreebie) {
        int5 = int5 + 2 + ifGetWidth(Component.interface_1265.component_1265_18);
    }
    ifSetSize(int5, 15, 0, 0, Component.interface_1265.component_1265_17);

    if (int3 != -1) {
        ifSetHide(true, Component.interface_1265.component_1265_82);
        ifSetHide(true, Component.interface_1265.component_1265_202);
    }

    if ((ocMembers(varp_2562) == 0 || mapMembers() == 1) && ((varc_1876 >= 0 && varc_1876 < 30) || varc_1876 == 32 || varp_2562 == Obj.bronze_pickaxe || varp_2562 == Obj.bronze_axe)) {
        ifSetHide(true, Component.interface_1265.component_1265_172);
    }
    let int6: component = Component.interface_1265.component_1265_20;

    if (varc_1881 != -1 && varc_1880 != -1) {
        ifSetHide(true, Component.shop_side.select_reticule);
        if (varc_1881 == varp_shopfreebie) {
            int6 = Component.interface_1265.component_1265_21;
        }
        if (ccFind(int6, varc_1880) == 1) {
            ccHookMouseEnter(hook(clientscript_shop_item_hover, "iiiIi", [varbit_shop_verbose_mode, 0, 1, event_com, event_comsubid]));
            ccHookMouseExit(hook(clientscript_shop_item_hover, "iiiIi", [varbit_shop_verbose_mode, 0, 0, event_com, event_comsubid]));
            if (varbit_shop_verbose_mode == 0) {
                ccSetGraphic(Graphic.graphic_10448);
            } else {
                ccSetGraphic(Graphic.graphic_10453);
            }
        }
    }
    int6 = Component.interface_1265.component_1265_20;

    if (varp_shop_last_viewed_inventory == varp_shopfreebie) {
        int6 = Component.interface_1265.component_1265_21;
    }

    if (intArg0 == varp_shop_last_viewed_inventory) {
        if (intArg0 == Inv.inv && ccFind(Component.shop_side.inventory_layer, intArg1) == 1) {
            ifSetPosition(ccGetX() + 2 - 2, ccGetY() + 2 - 2, 0, 0, Component.shop_side.select_reticule);
            ifSetHide(false, Component.shop_side.select_reticule);
        }
        if (ccFind(int6, intArg1) == 1 && (intArg0 != Inv.inv || varp_shop_filter == 1)) {
            ccHookMouseEnter(hook(clientscript_shop_item_hover, "iiiIi", [varbit_shop_verbose_mode, 1, 1, event_com, event_comsubid]));
            ccHookMouseExit(hook(clientscript_shop_item_hover, "iiiIi", [varbit_shop_verbose_mode, 1, 0, event_com, event_comsubid]));
            if (varbit_shop_verbose_mode == 0) {
                ccSetGraphic(Graphic.graphic_10451);
            } else {
                ccSetGraphic(Graphic.graphic_10456);
            }
        }
        varc_1881 = intArg0;
        varc_1880 = intArg1;
    }
    let str0: string = obj_warning_arg(int2);
    deltooltip_action(Component.interface_1265.component_1265_89);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1265.component_1265_89]), Component.interface_1265.component_1265_42);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1265.component_1265_89]), Component.interface_1265.component_1265_41);

    if (compare(str0, "") != 0) {
        if (compare(varcstr_26, "") != 0) {
            str0 = append(str0, varcstr_26);
        }
        if (compare(varcstr_34, "") != 0) {
            str0 = append(str0, "<br>" + varcstr_34);
        }
        ifSetGraphic(Graphic.km_shopitems_0, Component.interface_1265.component_1265_42);
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1265.component_1265_89, event_com, -1, str0, 160, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1265.component_1265_42);
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1265.component_1265_89, event_com, -1, str0, 160, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1265.component_1265_41);
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1265.component_1265_89, event_com, -1, str0, 160, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1265.component_1265_39);
    } else {
        ifSetGraphic(-1, Component.interface_1265.component_1265_42);
        ifSetOnMouseOver(noHook(""), Component.interface_1265.component_1265_42);
        ifSetOnMouseOver(noHook(""), Component.interface_1265.component_1265_41);
        ifSetOnMouseOver(noHook(""), Component.interface_1265.component_1265_39);
    }
}
