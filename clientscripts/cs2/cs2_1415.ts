/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1415

function cs2_1415(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;

    while (int0 <= invSize(93)) {
        ccCreate(Component.interface_323.component_323_5, 5, int0);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition(5 + 40 * int1, 40 * int2, 0, 0);
        if (invGetobj(93, int0) != -1) {
            ccSetObject(invGetobj(93, int0), invGetNum(93, int0));
            ccSetOpBase("<col=ff9040>" + ocName(invGetobj(93, int0)));
            ccSetOp(1, "<col=00ff00>" + "Value");
            ccSetOp(2, "Pack " + "<col=ff0000>" + "1");
            ccSetOp(3, "Pack " + "<col=ff0000>" + "5");
            ccSetOp(4, "Pack " + "<col=ff0000>" + "All");
            ccSetOp(5, "Pack " + "<col=ff0000>" + "X");
            ccSetOp(10, "Examine");
        }
        int0 = int0 + 1;
        int1 = int1 + 1;
        if (int1 > 6) {
            int1 = 0;
            int2 = int2 + 1;
        }
    }
}
