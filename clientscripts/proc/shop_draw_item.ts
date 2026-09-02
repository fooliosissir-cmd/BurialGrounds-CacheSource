/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,shop_draw_item]

function shop_draw_item(intArg0: inv, intArg1: number, intArg2: number, intArg3: number): void {
    let int4: component = Component.interface_1265.component_1265_20;
    let int5: component = Component.interface_1265.component_1265_25;
    let int6: component = Component.interface_1265.component_1265_26;
    let int7: component = Component.interface_1265.component_1265_24;
    let int8: component = Component.interface_1265.component_1265_23;
    let int9: component = Component.interface_1265.component_1265_27;

    if (intArg0 == varp_shopfreebie) {
        int4 = Component.interface_1265.component_1265_21;
        int5 = Component.interface_1265.component_1265_96;
        int6 = Component.interface_1265.component_1265_97;
        int7 = -1;
        int8 = Component.interface_1265.component_1265_95;
        int9 = Component.interface_1265.component_1265_98;
    }
    let [int10, int11] = shop_item_size(intArg3);
    let int12: number = ifGetWidth(int4) / int10;
    let int13: number = intArg2 / int12 * int11;
    let int14: number = intArg2 % int12 * int10;
    ccCreate(int4, 5, intArg1);
    let int15: number = 0;
    let int16: graphic = -1;
    let int17: graphic = -1;
    let int18: obj = invGetobj(intArg0, intArg1);
    let str0: string = obj_warning_arg(int18);

    if (intArg3 == 0) {
        int15 = 48;
        int16 = Graphic.graphic_10448;
        int17 = Graphic.graphic_10451;
    } else {
        int15 = 151;
        int16 = Graphic.graphic_10453;
        int17 = Graphic.graphic_10456;
    }
    ccSetSize(int15, 52, 0, 0);

    if (intArg0 == varp_shop_last_viewed_inventory && intArg1 == varp_shop_last_viewed_slot) {
        ccSetGraphic(int17);
        ccHookMouseEnter(hook(clientscript_shop_item_hover, "iiiIi", [intArg3, 1, 1, event_com, event_comsubid]));
        ccHookMouseExit(hook(clientscript_shop_item_hover, "iiiIi", [intArg3, 1, 0, event_com, event_comsubid]));
    } else {
        ccSetGraphic(int16);
        ccHookMouseEnter(hook(clientscript_shop_item_hover, "iiiIi", [intArg3, 0, 1, event_com, event_comsubid]));
        ccHookMouseExit(hook(clientscript_shop_item_hover, "iiiIi", [intArg3, 0, 0, event_com, event_comsubid]));
    }
    ccSetPosition(int14 + 2, int13 + 2, 0, 0);
    ccSetOpBase("<col=ff981f>" + ocName(int18) + "</col>");
    ccSetOp(1, "Info");

    if (intArg0 == varp_shopfreebie) {
        ccSetOnOpt(hook(clientscript_shop_item_info, "vi", [varp_shopfreebie, intArg1]));
        ccSetOp(2, "Take 1");
        ccSetOp(3, "Take 5");
        if (int18 == Obj.obj_36) {
            ccSetOp(3, "Take 4");
        }
        ccSetOp(4, "Take 10");
        ccSetOp(5, "Take 50");
        ccSetOp(6, "Take 500");
        ccSetOp(7, "Take All");
    } else if (intArg0 == Inv.inv) {
        ccSetOnOpt(hook(clientscript_shop_item_info, "vi", [Inv.inv, intArg1]));
        ccSetOp(2, "Sell 1");
        ccSetOp(3, "Sell 5");
        if (int18 == Obj.obj_36) {
            ccSetOp(3, "Sell 4");
        }
        ccSetOp(4, "Sell 10");
        ccSetOp(5, "Sell 50");
        ccSetOp(6, "Sell 500");
        ccSetOp(7, "");
    } else {
        ccSetOnOpt(hook(clientscript_shop_item_info, "vi", [varp_shop, intArg1]));
        ccSetOp(2, "Buy 1");
        ccSetOp(3, "Buy 5");
        if (int18 == Obj.obj_36) {
            ccSetOp(3, "Buy 4");
        }
        ccSetOp(4, "Buy 10");
        ccSetOp(5, "Buy 50");
        ccSetOp(6, "Buy 500");
        ccSetOp(7, "Buy All");
    }

    if (intArg3 == 0) {
        if (compare(str0, "") != 0) {
            str0 = ocName(int18) + "<br>" + "(Requirements not met)";
        } else {
            str0 = ocName(int18);
        }
        if (varp_shopfreebie == -1 || intArg0 == varp_shopfreebie || intArg0 == Inv.inv) {
            ccSetOnMouseOver(hook(cs2_6090, "iiisIi", [ccGetY(), event_mousex, event_mousey, str0, event_com, intArg1]));
        } else {
            ccSetOnMouseOver(hook(cs2_6090, "iiisIi", [ccGetY() + 28, event_mousex, event_mousey, str0, event_com, intArg1]));
        }
        ccCreate(int5, 4, intArg1);
    } else {
        ccCreate(int5, 4, intArg1);
        ccSetColour(colour(0xF7EDB7));
        ccSetSize(151 - 53, 52 - 18, 0, 0);
        ccSetPosition(int14 + 47, int13 + 3, 0, 0);
        ccSetTextFont(Graphic.verdana_11pt_regular);
        ccSetTextAlign(2, 1, 13);
        ccSetText(ocName(int18));
    }
    ccCreate(int6, 5, intArg1);
    ccSetSize(36, 32, 0, 0);

    if (intArg3 == 0) {
        ccSetPosition(int14 + 10, int13 + (52 - 38) / 2, 0, 0);
    } else {
        ccSetPosition(int14 + 10, int13 + (52 - 22) / 2, 0, 0);
    }
    let int19: number = 0;

    if (ocParam(int18, Param.skillcape) == 1 || ocParam(int18, Param.skillcape_trimmed) == 1) {
        int19 = 1;
    }

    if (int19 == 1) {
        ccSetObjectNonum(int18, invGetNum(intArg0, intArg1));
    } else {
        ccSetObjectAlwaysNum(int18, invGetNum(intArg0, intArg1));
    }
    ccSetGraphicShadow(3153952);
    ccSetOutline(1);
    ccCreate(int8, 4, intArg1);
    ccSetColour(colour(0xE5B051));
    ccSetSize(31, 12, 0, 0);
    ccSetPosition(int14 + int15 - 33, int13 + 40, 0, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(2, 1, 0);
    let int20: number = buyprice(int18);

    if (int20 == -1) {
        ccSetText("N/A");
    } else if (intArg0 == varp_shopfreebie) {
        ccSetText("Free!");
    } else if (intArg0 == Inv.inv) {
        if (testBit(varc_1879, intArg1) == 0) {
            int20 = -1;
            ccSetText("N/A");
        } else {
            int20 = sellprice(int18);
            ccSetText(cs2_940(int20));
        }
    } else {
        ccSetText(cs2_940(int20));
    }

    if (intArg0 != varp_shopfreebie) {
        if (int20 > 100000) {
            ccSetColour(colour(0xFFFFFF));
        } else if (int20 > 10000000) {
            ccSetColour(colour(0x00FF88));
        }
    }

    if (int7 != -1) {
        ccSetPosition(int14 + int15 - 45, int13 + 40, 0, 0);
        ccCreate(int7, 5, intArg1);
        ccSetSize(12, 12, 0, 0);
        ccSetPosition(int14 + int15 - 12, int13 + 39, 0, 0);
        if (intArg0 == Inv.inv && testBit(varc_1879, intArg1) == 0) {
            ccSetGraphic(Graphic.km_shopitems_0);
        } else {
            ccSetGraphic(enumOp(type_obj, type_graphic, Enum.enum_200, varp_currency));
        }
    }
    ccCreate(int9, 5, intArg1);
    ccSetSize(12, 12, 0, 0);
    ccSetPosition(int14 + 36, int13 + 6, 0, 0);
    ccSetGraphic(Graphic.km_shopitems_0);
    cs2_812(int18);
    str0 = obj_warning_arg(int18);

    if (varp_shopfreebie == -1 || intArg0 == varp_shopfreebie || intArg0 == Inv.inv) {
        ccSetOnMouseOver(hook(cs2_6090, "iiisIi", [ccGetY(), event_mousex, event_mousey, str0, event_com, intArg1]));
    } else {
        ccSetOnMouseOver(hook(cs2_6090, "iiisIi", [ccGetY() + 28, event_mousex, event_mousey, str0, event_com, intArg1]));
    }
    ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1265.component_1265_89]));
}
