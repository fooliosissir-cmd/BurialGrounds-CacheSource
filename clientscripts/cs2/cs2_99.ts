/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_99

function cs2_99(): void {
    let int0: number = 5;
    let int1: number = 5;
    let int2: number = 0;

    while (int0 < 125) {
        while (int1 < 120) {
            ccCreate(Component.interface_631.component_631_47, 5, int2);
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(int1, int0, 0, 0);
            if (invGetobj(134, int2) != -1) {
                ccSetObject(invGetobj(134, int2), invGetNum(134, int2));
                ccSetOpBase("<col=ff981f>" + ocName(invGetobj(134, int2)));
                ccSetOp(1, "Remove 1");
                ccSetOp(2, "Remove 5");
                ccSetOp(3, "Remove 10");
                ccSetOp(4, "Remove All");
                ccSetOp(5, "Remove X");
                ccSetOp(10, "Examine");
                ccSetGraphicShadow(3153952);
                ccSetOutline(1);
            }
            ccCreate(Component.interface_631.component_631_49, 5, int2);
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(int1, int0, 0, 0);
            if (invotherGetobj(134, int2) != -1) {
                ccSetObject(invotherGetobj(134, int2), invotherGetNum(134, int2));
                ccSetOpBase("<col=ff981f>" + ocName(invotherGetobj(134, int2)));
                ccSetOp(1, "Examine");
                ccSetGraphicShadow(3153952);
                ccSetOutline(1);
            }
            int1 = int1 + 40;
            int2 = int2 + 1;
        }
        int0 = int0 + 42;
        int1 = 5;
    }
}
