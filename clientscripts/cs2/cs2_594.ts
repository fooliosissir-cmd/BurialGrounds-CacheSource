/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_594

function cs2_594(intArg0: number, intArg1: obj, intArg2: number, intArg3: number): void {
    ifSetObject(intArg1, -1, Component.interface_105.component_105_139);
    let str0: string = "null";
    let str1: string = "null";
    let str2: string = "null";

    if (intArg0 == 0) {
        ifSetText("Buy Offer", Component.interface_105.component_105_134);
        ifSetGraphic(Graphic.grand_exchange_misc_graphics_7, Component.interface_105.component_105_135);
        ifSetText("+1", Component.interface_105.component_105_160);
        ifSetOp(1, "Add 1", Component.interface_105.component_105_160);
        str2 = "Add 1 to quantity";
        ifSetOnMouseRepeat(hook(cs2_649, "IIsii", [event_com, Component.interface_105.component_105_210, str2, 25, 300]), Component.interface_105.component_105_160);
        ifSetText("+10", Component.interface_105.component_105_162);
        ifSetOp(1, "Add 10", Component.interface_105.component_105_162);
        str2 = "Add 10 to quantity";
        ifSetOnMouseRepeat(hook(cs2_649, "IIsii", [event_com, Component.interface_105.component_105_210, str2, 25, 300]), Component.interface_105.component_105_162);
        ifSetText("+100", Component.interface_105.component_105_164);
        ifSetOp(1, "Add 100", Component.interface_105.component_105_164);
        str2 = "Add 100 to quantity";
        ifSetOnMouseRepeat(hook(cs2_649, "IIsii", [event_com, Component.interface_105.component_105_210, str2, 25, 300]), Component.interface_105.component_105_164);
        ifSetText("+1K", Component.interface_105.component_105_166);
        ifSetOp(1, "Add 1000", Component.interface_105.component_105_166);
        str2 = "Add 1,000 to quantity";
        ifSetOnMouseRepeat(hook(cs2_649, "IIsii", [event_com, Component.interface_105.component_105_210, str2, 25, 300]), Component.interface_105.component_105_166);
    } else {
        ifSetText("Sell Offer", Component.interface_105.component_105_134);
        ifSetGraphic(Graphic.grand_exchange_misc_graphics_6, Component.interface_105.component_105_135);
        ifSetText("1", Component.interface_105.component_105_160);
        ifSetOp(1, "Sell 1", Component.interface_105.component_105_160);
        str2 = "Sell 1";
        ifSetOnMouseRepeat(hook(cs2_649, "IIsii", [event_com, Component.interface_105.component_105_210, str2, 25, 300]), Component.interface_105.component_105_160);
        ifSetText("10", Component.interface_105.component_105_162);
        ifSetOp(1, "Sell 10", Component.interface_105.component_105_162);
        str2 = "Sell 10";
        ifSetOnMouseRepeat(hook(cs2_649, "IIsii", [event_com, Component.interface_105.component_105_210, str2, 25, 300]), Component.interface_105.component_105_162);
        ifSetText("100", Component.interface_105.component_105_164);
        ifSetOp(1, "Sell 100", Component.interface_105.component_105_164);
        str2 = "Sell 100";
        ifSetOnMouseRepeat(hook(cs2_649, "IIsii", [event_com, Component.interface_105.component_105_210, str2, 25, 300]), Component.interface_105.component_105_164);
        ifSetText("ALL", Component.interface_105.component_105_166);
        ifSetOp(1, "Sell All", Component.interface_105.component_105_166);
        str2 = "Sell all";
        ifSetOnMouseRepeat(hook(cs2_649, "IIsii", [event_com, Component.interface_105.component_105_210, str2, 25, 300]), Component.interface_105.component_105_166);
    }

    if (intArg1 == -1) {
        ifSetText("Choose an item to exchange", Component.interface_105.component_105_142);
        ifSetText("N/A", Component.interface_105.component_105_141);
        ifSetText("", Component.interface_105.component_105_143);
        if (varp_1113 == 0) {
            if (ifGetTrans(Component.interface_105.component_105_138) == 255) {
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_105.component_105_138, 0, 255, 5]), Component.interface_105.component_105_138);
            }
        } else if (varp_1113 == 1) {
            ifSetHide(false, Component.interface_107.component_107_0);
            ifSetTrans(255, Component.interface_105.component_105_138);
            ifSetOnTimer(noHook(""), Component.interface_105.component_105_138);
            if (ifGetTrans(Component.interface_107.component_107_1) == 245) {
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_1, 155, 255, 2]), Component.interface_107.component_107_1);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_2, 155, 255, 2]), Component.interface_107.component_107_2);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_3, 155, 255, 2]), Component.interface_107.component_107_3);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_4, 155, 255, 2]), Component.interface_107.component_107_4);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_5, 145, 245, 2]), Component.interface_107.component_107_5);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_6, 145, 245, 2]), Component.interface_107.component_107_6);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_7, 145, 245, 2]), Component.interface_107.component_107_7);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_8, 135, 235, 2]), Component.interface_107.component_107_8);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_9, 135, 235, 2]), Component.interface_107.component_107_9);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_10, 135, 235, 2]), Component.interface_107.component_107_10);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_11, 125, 225, 2]), Component.interface_107.component_107_11);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_12, 125, 225, 2]), Component.interface_107.component_107_12);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_13, 125, 225, 2]), Component.interface_107.component_107_13);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_14, 115, 215, 2]), Component.interface_107.component_107_14);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_15, 115, 215, 2]), Component.interface_107.component_107_15);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_16, 115, 215, 2]), Component.interface_107.component_107_16);
                ifSetOnTimer(hook(cs2_634, "Iiii", [Component.interface_107.component_107_17, 110, 210, 2]), Component.interface_107.component_107_17);
            }
        }
    } else {
        ifSetText(ocName(intArg1), Component.interface_105.component_105_142);
        if (varp_1109 != -1) {
            str0 = tostringLocalised(varp_1114, 1);
            ifSetText(str0 + " gp", Component.interface_105.component_105_141);
        } else {
            ifSetText("Retrieving details...", Component.interface_105.component_105_143);
            ifSetText("N/A", Component.interface_105.component_105_141);
        }
        ifSetTrans(255, Component.interface_105.component_105_138);
        ifSetOnTimer(noHook(""), Component.interface_105.component_105_138);
        ifSetHide(true, Component.interface_107.component_107_0);
    }
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;

    if (ifFind(Component.interface_105.component_105_141) == 1 && ifFind<1>(Component.interface_105.component_105_140) == 1) {
        int5 = ccGetWidth();
        int6 = parawidth(ccGetText(), int5, Graphic.p11_full);
        int7 = ccGetWidth<1>();
        int4 = 52 + (int5 - int6) / 2 - (int7 - 5);
        ccSetPosition<1>(int4, ccGetY<1>(), 0, 0);
    }

    if (varc_stock_offercount_timer <= 0) {
        str0 = tostringLocalised(intArg2, 1);
        ifSetText(str0, Component.interface_105.component_105_148);
        varc_stock_offercount_visible = varp_1110;
    }

    if (varc_stock_offerprice_timer <= 0) {
        str0 = tostringLocalised(intArg3, 1);
        ifSetText(str0 + " gp", Component.interface_105.component_105_153);
        varc_85 = varp_1111;
    }
}
