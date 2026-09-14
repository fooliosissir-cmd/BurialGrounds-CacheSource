/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,gravestone_shop_select]

function gravestone_shop_select(intArg0: graphic, intArg1: component, intArg2: number, intArg3: component, intArg4: component, intArg5: component, intArg6: component): void {
    ccDeleteAll(intArg3);
    let int7: number = 0;

    while (int7 <= 27) {
        if (ccFind(intArg1, int7 * 6) == 1) {
            ccSetTrans(200);
        }
        int7 = int7 + 1;
    }

    if (ccFind(intArg1, intArg2) == 1) {
        ccSetTrans(150);
    }
    ifSetText(enumOp(type_int, type_string, Enum.gravestone_name, intArg0), intArg5);
    let int8: npc = enumOp(type_int, type_npc, Enum.gravestone_npc, intArg0);
    let int9: number = 0;
    let int10: number = 0;
    let str0: string = enumOp(type_int, type_string, Enum.gravestone_desc, intArg0);

    if (int8 != -1) {
        int7 = ncParam(int8, Param.param_356);
        int9 = int7 / 100;
        int10 = scale(int7 % 100, 100, 60);
        if (int10 < 10) {
            str0 = str0 + "<br>" + "<br>" + "Initial duration: " + tostring(int9) + ":0" + tostring(int10);
        } else {
            str0 = str0 + "<br>" + "<br>" + "Initial duration: " + tostring(int9) + ":" + tostring(int10);
        }
    }
    ifSetText(str0, intArg6);
    let int11: number = 0;

    if (2147483647 - invTotal(Inv.inv, Obj.coins) - invTotal(Inv.inv_623, Obj.coins) > 0) {
        int11 = invTotal(Inv.inv, Obj.coins) + invTotal(Inv.inv_623, Obj.coins);
    } else {
        int11 = 2147483647;
    }
    int7 = enumOp(type_int, type_int, Enum.gravestone_cost, intArg0);

    if (int7 < 0) {
        ifSetText("<col=ff0000>" + "Unavailable" + "</col>", intArg4);
        return;
    }

    if (int7 == 0) {
        str0 = "(No charge)";
    } else if (int7 == 1) {
        if (int11 > 0) {
            str0 = "1 coin";
        } else {
            str0 = "<col=ff0000>" + "1 coin" + "</col>";
        }
    } else if (int11 >= int7) {
        str0 = tostringLocalised(int7, 1) + " coins";
        if (parawidth(str0, ifGetWidth(intArg4), Graphic.b12_full) > ifGetWidth(intArg4) - 5) {
            str0 = tostringLocalised(int7, 1) + "<br>" + "coins";
        }
    } else {
        str0 = "<col=ff0000>" + tostringLocalised(int7, 1) + " coins" + "</col>";
        if (parawidth(str0, ifGetWidth(intArg4), Graphic.b12_full) > ifGetWidth(intArg4) - 5) {
            str0 = "<col=ff0000>" + tostringLocalised(int7, 1) + "</col>" + "<br>" + "<col=ff0000>" + "coins" + "</col>";
        }
    }
    ifSetText(append("Confirm:" + "<br>", str0), intArg4);
    int7 = 0;
    let int12: graphic = -1;

    while (int7 <= 27) {
        ccCreate(intArg3, 5, int7);
        ccSetPosition(0, 0, 0, 0);
        ccSetSize(ifGetWidth(intArg3), ifGetHeight(intArg3), 0, 0);
        if (int7 == intArg0) {
            ccSetGraphic(Graphic.graphic_833);
            ccSetHide(false);
            int12 = Graphic.graphic_834;
            ccSetOnMouseOver(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int12]));
            int12 = Graphic.graphic_833;
            ccSetOnMouseLeave(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int12]));
            ccSetOp(1, "Confirm:");
            ccSetOpBase("<col=ff9040>" + enumOp(type_int, type_string, Enum.gravestone_name, intArg0) + "</col>");
        } else {
            ccSetHide(true);
        }
        int7 = int7 + 1;
    }
}
