/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6323

function cs2_6323(): void {
    let int0: component = ccGetLayer();
    let int1: obj = invGetobj(662, 0);

    if (int1 != -1) {
        ccSetObject(int1, invGetNum(662, 0));
        ccSetTrans(0);
        ifSetOp(1, "Remove", int0);
        ifSetOp(10, "Examine", int0);
        ifSetOpBase(cs2_4033(int1) + ocName(int1), int0);
        ifSetOnOp(hook(cs2_1620, "Iiiii", [int0, ccGetId(), 150, 0, 10]), int0);
    } else {
        ccSetObjectNonum(Obj.carni_treasurechest, 1);
        ccSetTrans(100);
        ccSetOnTimer(noHook(""));
        ifClearops(int0);
        ifSetOp(1, "What is this?", int0);
        ifSetOpBase("", int0);
        ifSetOnOp(noHook(""), int0);
    }
}
