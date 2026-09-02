/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1453

function cs2_1453(intArg0: number): void {
    let int1: obj = invGetobj(95, intArg0);

    ccSetObject(int1, invGetNum(95, intArg0));
    ccSetOpBase("<col=ff981f>" + ocName(invGetobj(95, intArg0)));
    ccSetOp(1, "Withdraw-1");
    ccSetOp(2, "Withdraw-5");
    ccSetOp(3, "Withdraw-10");
    ccSetOp(4, "Withdraw-" + tostring(varp_1249));
    ccSetOp(5, "Withdraw-X");
    ccSetOp(6, "Withdraw-All");
    ccSetOp(7, "Withdraw-All but one");
    ccSetOp(10, "Examine" + "<col=ff9040>");
    ccSetdraggable(Component.interface_762.component_762_0, -1);
    ccSetdragdeadzone(5);
    ccSetdragdeadtime(5);
    ccSetOnDrag(hook(cs2_1454, "i", [event_mousey]));
    ccSetOnDragComplete(hook(cs2_1482, "I", [event_com2]));
    ccSetOnMouseOver(hook(cs2_5495, "o", [int1]));
    ccHookMouseExit(hook(cs2_5495, "o", [-1]));
}
