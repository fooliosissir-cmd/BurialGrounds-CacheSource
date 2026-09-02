/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,draughts_inv_draw_slot]

function draughts_inv_draw_slot(intArg0: inv, intArg1: number, intArg2: component, intArg3: number): void {
    let str0: string = "";

    if (ccFind(intArg2, intArg3) == 1) {
        if (invGetobj(intArg0, intArg1) != -1) {
            str0 = "<col=ff981f>" + ocName(invGetobj(intArg0, intArg1));
            ccSetObject(invGetobj(intArg0, intArg1), invGetNum(intArg0, intArg1));
            ccSetOpBase(str0);
            ccSetOp(10, "Examine" + "<col=ff9040>");
            ccSetdragdeadzone(5);
            ccSetdragdeadtime(10);
            ccSetGraphicShadow(3355443);
            ccSetOutline(1);
        } else {
            ccSetModel(-1);
            ccClearops();
            ccSetdragdeadzone(0);
            ccSetdragdeadtime(0);
            ccSetOnDragComplete(noHook(""));
        }
    }
}
