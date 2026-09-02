/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_673

function cs2_673(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: obj, intArg6: number, intArg7: number, intArg8: number, intArg9: number): void {
    let int10: component = enumOp(type_int, type_component, Enum.enum_1083, intArg0);

    ccDeleteAll(int10);
    let int11: number = ifGetWidth(int10);
    let int12: number = ifGetHeight(int10);
    let str0: string = "";

    if (intArg7 == 1) {
        str0 = "Empty";
    } else if (intArg1 == 0) {
        str0 = "Buy";
    } else {
        str0 = "Sell";
    }
    ccCreate(int10, 3, 0);
    ccSetSize(int11, int12, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0xFFFFFF));
    ccSetTrans(255);
    cs2_584(int10, str0);
    let int13: number = ifGetNextSubId(int10);

    if (intArg7 == 1) {
        if (intArg0 < 2 || playerMember() == 1) {
            if (intArg9 == intArg0 && ccFind(int10, 0) == 1) {
                ccSetTrans(230);
            }
        } else {
            ifSetHide(false, enumOp(type_int, type_component, Enum.enum_1085, intArg0));
        }
    }
    let str1: string = tostring_spacer(intArg2, ",");
    let str2: string = tostring_spacer(intArg6, ",");
    let int14: number = 0;
    let int15: number = 0;
    let int16: component = enumOp(type_int, type_component, Enum.enum_1084, intArg0);
    ifSetHide(true, int16);
    let str3: string = "";

    if (intArg7 == 1) {
        if (intArg0 < 2 || playerMember() == 1) {
            if (intArg0 == intArg9) {
                ifSetHide(false, int16);
            } else {
                ccCreate(int10, 5, int13);
                ccSetGraphic(Graphic.grand_exchange_misc_graphics_5);
                ccSetSize(16, 14, 0, 0);
                ccSetPosition(5, 29, 0, 0);
                int13 = int13 + 1;
            }
        }
    } else {
        int14 = 7;
        int15 = int12 - 30;
        cs2_674(int14, int15, int11 - 14, 15, intArg0, int10, int13, 1, intArg7, intArg8, intArg2, intArg3);
        int13 = ifGetNextSubId(int10);
        ccCreate(int10, 5, int13);
        int13 = int13 + 1;
        ccSetPosition(6, 30, 0, 0);
        ccSetSize(40, 36, 0, 0);
        ccSetGraphic(Graphic.bank_slot_0);
        ccCreate(int10, 5, int13);
        ccSetPosition(8, 32, 0, 0);
        ccSetSize(36, 32, 0, 0);
        ccSetObject(intArg5, intArg2);
        ccSetGraphicShadow(0);
        int13 = int13 + 1;
        ccCreate(int10, 4, int13);
        int13 = int13 + 1;
        ccSetPosition(48, 30, 0, 0);
        ccSetSize(int11 - 53, 22, 0, 0);
        ccSetColour(colour(0xCC9900));
        ccSetTextFont(Graphic.p11_full);
        ccSetTextAlign(0, 0, 0);
        ccSetTextShadow(true);
        ccSetText(ocName(intArg5));
        ccCreate(int10, 4, int13);
        int13 = int13 + 1;
        ccSetPosition(48, 54, 0, 0);
        ccSetSize(int11 - 53, 15, 0, 0);
        ccSetColour(colour(0xBDBB5B));
        ccSetTextFont(Graphic.p11_full);
        ccSetTextAlign(0, 0, 15);
        ccSetTextShadow(true);
        ccSetText(str2 + " gp");
    }
}
