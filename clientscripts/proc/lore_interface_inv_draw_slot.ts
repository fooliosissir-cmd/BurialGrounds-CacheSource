/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lore_interface_inv_draw_slot]

function lore_interface_inv_draw_slot(intArg0: obj, intArg1: obj, intArg2: component, intArg3: number, strArg0: string, strArg1: string, strArg2: string, strArg3: string, strArg4: string, strArg5: string): void {
    if (ccFind(intArg2, intArg3) == 1) {
        if (intArg0 != -1) {
            ccSetObject(intArg0, -1);
            ccSetOpBase(ocName(intArg1));
            ccSetOp(1, strArg0);
            ccSetOp(2, strArg1);
            ccSetOp(3, strArg2);
            ccSetOp(4, strArg3);
            ccSetOp(5, strArg4);
            ccSetOp(6, "Examine" + "<col=ff9040>");
            ccSetOp(7, strArg5);
            ccSetGraphicShadow(3355443);
            ccSetOutline(1);
        } else {
            ccSetObject(-1, 0);
            ccSetOpBase("");
            ccSetOp(1, "");
            ccSetOp(2, "");
            ccSetOp(3, "");
            ccSetOp(4, "");
            ccSetOp(5, "");
            ccSetOp(6, "");
            ccSetOp(7, "");
        }
    }
}
