/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1450

function cs2_1450(): void {
    let int0: number = 0;
    let int1: number = invSize(Inv.bank);

    while (int0 < int1) {
        ccCreate(Component.interface_762.component_762_95, 5, int0);
        ccSetSize(36, 32, 0, 0);
        ccSetHide(true);
        ccSetOutline(1);
        ccSetGraphicShadow(3355443);
        ccSetOp(1, "Withdraw-1");
        ccSetOp(2, "Withdraw-5");
        ccSetOp(3, "Withdraw-10");
        ccSetOp(5, "Withdraw-X");
        ccSetOp(6, "Withdraw-All");
        ccSetOp(7, "Withdraw-All but one");
        ccSetOp(10, "Examine<col=ff9040>");
        ccSetdraggable(Component.interface_762.component_762_0, -1);
        ccSetdragdeadzone(5);
        ccSetdragdeadtime(5);
        ccSetOnDrag(hook(cs2_1454, "i", [event_mousey]));
        ccSetOnDragComplete(hook(cs2_1482, "I", [event_com2]));
        ccSetOnMouseRepeat(hook(cs2_1480, "i", [int0]));
        ccSetOnMouseLeave(hook(cs2_1480, "i", [-1]));
        int0 = int0 + 1;
    }
}
