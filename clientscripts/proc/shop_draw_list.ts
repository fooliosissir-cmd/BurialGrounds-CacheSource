/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,shop_draw_list]

function proc_shop_draw_list(intArg0: inv, intArg1: inv, intArg2: number, intArg3: number): void {
    if (cs2_4550(1265) == 0) {
        return;
    }
    shop_clear_list();

    if (intArg2 == -1) {
        intArg2 = 0;
    }
    varp_shop_filter = intArg2;
    let int4: number = 82903098;
    let int5: number = 82903097;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: obj = -1;
    let [int12, int13] = shop_item_size(intArg3);
    let int14: number = ifGetWidth(Component.interface_1265.component_1265_58) / int12;

    if (intArg2 == 1) {
        intArg0 = Inv.inv;
        intArg1 = -1;
        ifSetOnInvTransmit(noHook(""), Component.interface_1265.component_1265_94);
    } else if (intArg1 != -1) {
        int6 = 0;
        int7 = invSize(intArg1);
        int8 = 0;
        while (int6 < int7) {
            int11 = invGetobj(intArg1, int6);
            if (mapMembers() == 0 && ocMembers(int11) == 1) {
                cs2_6088(int6, 1);
            } else if (int11 == -1) {
                cs2_6088(int6, 1);
            } else {
                shop_draw_item(intArg1, int6, int8, intArg3);
                int8 = int8 + 1;
            }
            int6 = int6 + 1;
        }
        int9 = int8 / int14;
        if (int8 % int14 != 0) {
            int9 = int9 + 1;
        }
        int10 = int9 * int13;
        int10 = int10 + 8;
        ifSetOnInvTransmit(hook(cs2_6092, "vY", [varp_shopfreebie], [intArg1]), Component.interface_1265.component_1265_94);
    }
    int9 = 0;
    int6 = 0;
    int8 = 0;

    if (intArg0 != -1) {
        int7 = invSize(intArg0);
        while (int6 < int7) {
            int11 = invGetobj(intArg0, int6);
            if (mapMembers() == 0 && ocMembers(int11) == 1) {
                cs2_6088(int6, 0);
            } else if (int11 == -1) {
                cs2_6088(int6, 0);
            } else {
                shop_draw_item(intArg0, int6, int8, intArg3);
                int8 = int8 + 1;
            }
            int6 = int6 + 1;
        }
    }

    if (enumOp(type_inv, type_int, Enum.enum_921, varp_shop) == 1) {
        ifSetHide(false, Component.interface_1265.component_1265_52);
    } else {
        ifSetHide(true, Component.interface_1265.component_1265_52);
    }
    let int15: obj = invTotal(Inv.inv, varp_currency);

    if (varp_currency == Obj.coins) {
        int15 = int15 + invTotal(Inv.inv_623, varp_currency);
    }

    if (int15 == Obj.mcannonremains) {
        ifSetText("None!", Component.interface_1265.component_1265_207);
        ifSetGraphic(Graphic.km_shopitems_0, Component.interface_1265.component_1265_206);
    } else {
        ifSetText(cs2_940(int15), Component.interface_1265.component_1265_207);
        ifSetGraphic(enumOp(type_obj, type_graphic, Enum.enum_200, varp_currency), Component.interface_1265.component_1265_206);
    }
    let int16: number = parawidth(ifGetText(Component.interface_1265.component_1265_207), ifGetWidth(Component.interface_1265.component_1265_77), Graphic.verdana_11pt_regular);
    int16 = int16 + 2 + ifGetWidth(Component.interface_1265.component_1265_206);
    ifSetSize(int16, 15, 0, 0, Component.interface_1265.component_1265_16);
    int9 = int8 / int14;

    if (int8 % int14 != 0) {
        int9 = int9 + 1;
    }
    let int17: number = int9 * int13;
    ifSetSize(0, int10, 1, 0, Component.interface_1265.component_1265_22);
    ifSetPosition(0, int10, 1, 0, Component.interface_1265.component_1265_59);
    ifSetSize(0, int17, 1, 0, Component.interface_1265.component_1265_59);
    ifSetScrollSize(0, int10 + int17, Component.interface_1265.component_1265_58);
    proc_scrollbar_vertical(Component.interface_1265.component_1265_57, Component.interface_1265.component_1265_58, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);

    if (intArg2 == 1) {
        ifSetOnInvTransmit(hook(cs2_6092, "vY", [Inv.inv], [93]), Component.interface_1265.component_1265_93);
        cs2_6093(Inv.inv);
        cs2_6097(1);
    } else {
        ifSetOnInvTransmit(hook(cs2_6092, "vY", [varp_shop], [intArg0]), Component.interface_1265.component_1265_93);
        cs2_6093(varp_shop);
        cs2_6097(0);
    }

    if (intArg1 == -1) {
        ifSetOnInvTransmit(noHook(""), Component.interface_1265.component_1265_94);
    }
}
