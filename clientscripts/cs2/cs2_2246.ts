/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2246

function cs2_2246(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    let int4: obj = invGetobj(intArg2, intArg3);

    if (int4 == -1) {
        ifSetHide(true, intArg0);
        ifSetHide(false, intArg1);
    }
    ifSetHide(false, intArg0);
    ifSetHide(true, intArg1);
    ifSetObject(int4, invGetNum(94, intArg3), intArg0);
    ifClearops(intArg0);
    ifSetOnOpt(hook(cs2_1620, "Iiiii", [event_com, -1, 100, 0, 8]), intArg0);

    if (ocParam(int4, Param.rand_item) > 0) {
        if (ocParam(int4, Param.rand_bound) > 0 || ocParam(int4, Param.rand_bound_ammo) > 0) {
            ifSetOp(3, "Destroy", intArg0);
        } else {
            ifSetOp(3, "Bind", intArg0);
        }
    }
    ifSetOp(10, "Examine", intArg0);
    ifSetOpBase("<col=ff9040>" + ocName(int4), intArg0);
}
