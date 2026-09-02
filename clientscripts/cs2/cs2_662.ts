/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_662

function cs2_662(intArg0: number): void {
    let int1: component = enumOp(type_int, type_component, Enum.enum_1080, intArg0);
    let int2: component = enumOp(type_int, type_component, Enum.enum_1081, intArg0);
    let int3: number = enumOp(type_int, type_inv, Enum.stockmarket_collectinv, intArg0);

    ccDeleteAll(int1);
    let int4: number = ifGetWidth(int1);
    let int5: number = ifGetHeight(int1);
    let int6: number = int4 / 2 - 40;
    let int7: number = int5 - 47;
    let int8: obj = invGetobj(int3, 0);
    let int9: obj = invGetobj(int3, 1);
    let int10: component = enumOp(type_int, type_component, Enum.enum_1082, intArg0);

    if (int10 != -1) {
        if (playerMember() == 1 || stockmarketIsofferempty(intArg0) == 0) {
            ifSetHide(true, int10);
        } else {
            ifSetHide(false, int10);
        }
    }
    cs2_98(int1, 0, Graphic.bank_slot_1, int6 - 2, int7 - 2, 40, 36);
    let int11: graphic = Graphic.bank_slot_3;

    if ((int10 == -1 || ifGetHide(int10) == 1) && ccFind(int1, 0) == 1) {
        ccHookMouseEnter(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int11]));
        int11 = Graphic.bank_slot_1;
        ccHookMouseExit(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int11]));
        if (int8 != -1) {
            if (ocCert(int8) != int8) {
                if (invGetNum(int3, 0) > 1) {
                    ccSetOp(1, "Collect-notes");
                    ccSetOp(2, "Collect-items");
                } else {
                    ccSetOp(1, "Collect-items");
                    ccSetOp(2, "Collect-notes");
                }
            } else {
                ccSetOp(1, "Collect");
            }
            ccSetOpBase(ocName(int8));
        }
    }
    ccCreate(int1, 5, 1);
    ccSetPosition(int6, int7, 0, 0);
    ccSetSize(36, 32, 0, 0);
    ccSetGraphicShadow(3355443);
    ccSetObject(int8, invGetNum(int3, 0));
    int6 = int4 / 2 + 4;
    cs2_98(int1, 2, Graphic.bank_slot_1, int6 - 2, int7 - 2, 40, 36);

    if ((int10 == -1 || ifGetHide(int10) == 1) && ccFind(int1, 2) == 1) {
        int11 = Graphic.bank_slot_3;
        ccHookMouseEnter(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int11]));
        int11 = Graphic.bank_slot_1;
        ccHookMouseExit(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int11]));
        if (int9 != -1) {
            if (ocCert(int9) != int9) {
                if (invGetNum(int3, 1) > 1) {
                    ccSetOp(1, "Collect-notes");
                    ccSetOp(2, "Collect-items");
                } else {
                    ccSetOp(1, "Collect-items");
                    ccSetOp(2, "Collect-notes");
                }
            } else {
                ccSetOp(1, "Collect");
            }
            ccSetOpBase(ocName(int9));
        }
    }
    ccCreate(int1, 5, 3);
    ccSetPosition(int6, int7, 0, 0);
    ccSetSize(36, 32, 0, 0);
    ccSetGraphicShadow(3355443);
    ccSetObject(int9, invGetNum(int3, 1));
    cs2_652(11, 11, int4 - 65, 16, intArg0, int1, 4, int2, 0);
    ccCreate(int1, 3, 9);
    int6 = int4 - 30;
    ccSetPosition(int6, 11, 0, 0);
    ccSetSize(18, 16, 0, 0);
    ccSetColour(colour(0x000000));
    ccSetTrans(160);
    ccSetfill(true);
    ccCreate(int1, 6, 10);
    let int12: obj = stockmarketGetofferitem(intArg0);

    if (stockmarketIsofferempty(intArg0) == 0) {
        ccSetPosition(int6, 11, 0, 0);
        ccSetSize(18, 16, 0, 0);
        ccSetObject(int12, 0);
        ccSetOnMouseOver(hook(cs2_568, "IiIsii", [int1, 10, int2, ocName(int12), 25, 106]));
        ccHookMouseExit(hook(clientscript_deltooltip, "I", [int2]));
    }
    ccCreate(int1, 3, 11);
    int6 = int4 - 50;
    ccSetPosition(int6, 11, 0, 0);
    ccSetSize(18, 16, 0, 0);
    ccSetColour(colour(0x000000));
    ccSetTrans(160);
    ccSetfill(true);
    ccCreate(int1, 5, 12);
    let str0: string = "null";

    if (stockmarketIsofferempty(intArg0) == 0) {
        ccSetPosition(int6, 12, 0, 0);
        ccSetSize(16, 14, 0, 0);
        if (stockmarketGetoffertype(intArg0) == 0) {
            ccSetGraphic(Graphic.grand_exchange_misc_graphics_7);
            str0 = "Buy";
        } else {
            ccSetGraphic(Graphic.grand_exchange_misc_graphics_6);
            str0 = "Sell";
        }
        ccSetOnMouseOver(hook(cs2_568, "IiIsii", [int1, 12, int2, str0, 25, 106]));
        ccHookMouseExit(hook(clientscript_deltooltip, "I", [int2]));
    }
}
