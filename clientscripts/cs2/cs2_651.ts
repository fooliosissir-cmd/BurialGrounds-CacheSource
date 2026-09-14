/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_651

function cs2_651(intArg0: number): void {
    let int1: component = cs2_623(intArg0);

    ccDeleteAll(int1);
    let int2: number = ifGetWidth(int1);
    let int3: number = ifGetHeight(int1);
    let int4: number = stockmarketGetoffertype(intArg0);
    let int5: number = stockmarketGetoffercount(intArg0);
    let int6: number = stockmarketGetoffercompletedcount(intArg0);
    let int7: obj = stockmarketGetofferitem(intArg0);
    let int8: number = stockmarketGetofferprice(intArg0);
    let str0: string = "";

    if (stockmarketIsofferempty(intArg0) == 1) {
        str0 = "Empty";
    } else if (stockmarketGetoffertype(intArg0) == 0) {
        str0 = "Buy";
    } else {
        str0 = "Sell";
    }
    ccCreate(int1, 3, 0);
    ccSetSize(int2, int3, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0xFFFFFF));
    ccSetTrans(255);
    cs2_584(int1, str0);
    let int9: number = ifGetNextSubId(int1);
    ifSetOnMouseOver(hook(cs2_629, "i", [intArg0]), int1);
    ifSetOnMouseLeave(hook(cs2_631, "i", [intArg0]), int1);

    if (stockmarketIsofferempty(intArg0) == 1) {
        ifSetOnOp(noHook(""), int1);
        ifSetOp(1, "", int1);
        ifSetOp(2, "", int1);
        if (intArg0 >= 2) {
            if (playerMember() == 1) {
                ifSetHide(true, cs2_624(intArg0));
            } else {
                ifSetHide(false, cs2_624(intArg0));
            }
        }
    } else {
        ifSetOp(1, "View Offer", int1);
        if (stockmarketIsofferfinished(intArg0) == 0) {
            ifSetOp(2, "Abort Offer", int1);
        } else {
            ifSetOp(2, "", int1);
        }
    }
    let str1: string = tostringLocalised(int5, 1);
    let str2: string = tostringLocalised(int8, 1);
    let int10: number = 0;
    let int11: number = 0;
    let int12: component = cs2_627(intArg0);
    ifSetHide(true, int12);
    let int13: component = cs2_626(intArg0);
    let int14: number = cs2_625(intArg0);
    let str3: string = "";
    let int15: number = 0;
    let int16: number = 0;

    if (stockmarketIsofferempty(intArg0) == 1) {
        if (intArg0 < 2 || playerMember() == 1) {
            ifSetHide(false, int12);
        }
    } else {
        int10 = 7;
        int11 = int3 - 30;
        if (stockmarketIsofferadding(intArg0) == 1) {
            int9 = ifGetNextSubId(int1);
            ccCreate<1>(int1, 4, int9);
            ccSetPosition<1>(int10, int11, 0, 0);
            ccSetSize<1>(int2 - 14, 15, 0, 0);
            ccSetTextFont<1>(Graphic.p11_full);
            ccSetColour<1>(colour(0xDBD884));
            ccSetText<1>("Submitting...");
            ccSetTextAlign<1>(1, 1, 0);
        } else {
            cs2_652(int10, int11, int2 - 14, 15, intArg0, int1, int9, int13, 1);
        }
        int9 = ifGetNextSubId(int1);
        ccCreate(int1, 5, int9);
        int9 = int9 + 1;
        ccSetPosition(6, 30, 0, 0);
        ccSetSize(40, 36, 0, 0);
        ccSetGraphic(Graphic.bank_slot_0);
        ccCreate(int1, 5, int9);
        ccSetPosition(8, 32, 0, 0);
        ccSetSize(36, 32, 0, 0);
        ccSetObject(int7, int5);
        ccSetGraphicShadow(0);
        str0 = tostringLocalised(int5, 1);
        ccSetOnMouseRepeat(hook(cs2_648, "IiIsii", [int1, int9, int13, str0, 25, 106]));
        ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [int13]));
        int9 = int9 + 1;
        ccCreate(int1, 4, int9);
        ccSetPosition(48, 30, 0, 0);
        str0 = ocName(int7);
        int16 = int2 - 53;
        int15 = parawidth(str0, int16, Graphic.p11_full);
        if (int15 > int16) {
            int10 = stringLength(str0);
            while (int15 > int16 && int10 > 0) {
                int10 = int10 - 1;
                str0 = subString(str0, 0, int10) + "...";
                int15 = parawidth(str0, int16, Graphic.p11_full);
            }
        }
        int9 = int9 + 1;
        int3 = paraheight(str0, int16, Graphic.p11_full) * 11;
        if (int3 < 22) {
            int3 = 22;
        }
        ccSetSize(int16, int3, 0, 0);
        ccSetColour(colour(0xCC9900));
        ccSetTextFont(Graphic.p11_full);
        ccSetTextAlign(0, 0, 0);
        ccSetTextShadow(true);
        ccSetText(str0);
        ccCreate(int1, 4, int9);
        int9 = int9 + 1;
        ccSetPosition(48, 32 + int3, 0, 0);
        ccSetSize(int2 - 53, 15, 0, 0);
        ccSetColour(colour(0xBDBB5B));
        ccSetTextFont(Graphic.p11_full);
        ccSetTextAlign(0, 0, 15);
        ccSetTextShadow(true);
        ccSetText(str2 + " gp");
        ccCreate(int1, 5, int9);
        ccSetPosition(4, 2, 2, 0);
        ccSetSize(20, 20, 0, 0);
        ccSetGraphic(-1);
        int9 = int9 + 1;
    }
}
