/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,interface_inv_draw_slot_big]

function interface_inv_draw_slot_big(intArg0: inv, intArg1: number, intArg2: component, intArg3: number, intArg4: number, intArg5: component, strArg0: string, strArg1: string, strArg2: string, strArg3: string, strArg4: string, strArg5: string, strArg6: string, strArg7: string, strArg8: string): void {
    let str9: string = "";

    if (ccFind(intArg2, intArg3) == 1) {
        if (invGetobj(intArg0, intArg1) != -1) {
            str9 = "<col=ff981f>" + ocName(invGetobj(intArg0, intArg1));
            ccSetObject(invGetobj(intArg0, intArg1), invGetNum(intArg0, intArg1));
            ccSetOpBase(str9);
            ccSetOp(1, strArg0);
            ccSetOp(2, strArg1);
            ccSetOp(3, strArg2);
            ccSetOp(4, strArg3);
            ccSetOp(5, strArg4);
            ccSetOp(6, strArg5);
            ccSetOp(7, strArg6);
            ccSetOp(8, strArg7);
            ccSetOp(9, strArg8);
            ccSetOp(10, "Examine" + "<col=ff9040>");
            if (intArg4 > 0) {
                ccSetdragdeadzone(5);
                ccSetdragdeadtime(10);
            }
            if (intArg4 == 1) {
                ccSetOnDragComplete(hook(interface_inv_dragcomplete_swap_big, "viiIiIsssssssss", [intArg0, event_comsubid, event_comsubid2, event_com, intArg4, intArg5, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5, strArg6, strArg7, strArg8]));
            } else if (intArg4 == 2) {
                ccSetOnDragComplete(hook(interface_inv_dragcomplete_shuffle_big, "viiIiIsssssssss", [intArg0, event_comsubid, event_comsubid2, event_com, intArg4, intArg5, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5, strArg6, strArg7, strArg8]));
            }
            if (intArg4 != 0 && intArg5 != -1) {
                ccSetOnDrag(hook(interface_inv_drag_slot, "iIIi", [intArg1, intArg2, intArg5, event_mousey]));
            }
            ccSetGraphicShadow(3153952);
            ccSetOutline(1);
            ccSetOnMouseOver(hook(cs2_5495, "o", [invGetobj(intArg0, intArg1)]));
            ccHookMouseExit(hook(cs2_5495, "o", [-1]));
        } else {
            ccSetObjectNonum(-1, 0);
            ccClearops();
            if (intArg4 > 0) {
                ccSetdragdeadzone(0);
                ccSetdragdeadtime(0);
            }
            ccSetOnDragComplete(noHook(""));
        }
    }
}
