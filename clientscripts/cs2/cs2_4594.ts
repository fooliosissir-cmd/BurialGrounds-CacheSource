/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4594

function cs2_4594(intArg0: obj, intArg1: number, intArg2: number, intArg3: number, intArg4: component): void {
    ccCreate(intArg4, 5, ifGetNextSubId(intArg4));

    if (intArg2 != -1 && intArg3 != -1) {
        ccSetSize(36, 32, 0, 0);
        ccSetPosition(intArg2 + 2, intArg3 + 2, 0, 0);
        if (intArg1 <= 0) {
            ccSetObjectNonum(intArg0, 1);
        } else {
            ccSetObject(intArg0, intArg1);
        }
        ccSetOp(10, "Examine");
        ccSetGraphicShadow(3153952);
        ccSetOutline(1);
        ccSetOpBase("<col=ff9040>" + ocName(intArg0) + "</col>");
    } else {
        ccSetHide(true);
    }
}
