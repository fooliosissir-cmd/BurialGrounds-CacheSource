/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1190

function cs2_1190(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;

    while (int0 < invSize(482)) {
        ccCreate(Component.interface_477.component_477_26, 5, int0);
        ccSetSize(36, 32, 0, 0);
        int1 = cs2_1425(int0);
        int2 = cs2_1426(int0);
        ccSetPosition(int1, int2, 0, 0);
        if (invGetobj(482, int0) != -1) {
            ccSetObject(invGetobj(482, int0), invGetNum(482, int0));
            ccSetOpBase(ocName(invGetobj(482, int0)));
            ccSetOp(1, "Value");
            ccSetOp(2, "Buy 1");
            ccSetOp(3, "Buy 5");
            ccSetOp(4, "Buy 10");
        }
        int0 = int0 + 1;
    }
}
