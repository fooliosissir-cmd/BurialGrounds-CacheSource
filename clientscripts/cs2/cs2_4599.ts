/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4599

function cs2_4599(intArg0: obj, intArg1: number, strArg0: string, intArg2: component): void {
    if (intArg1 > 1) {
        ifSetObjectAlwaysNum(intArg0, intArg1, intArg2);
    } else {
        ifSetObjectNonum(intArg0, 1, intArg2);
    }
    ifSetOnOp(hook(cs2_1620, "Iiiii", [event_com, event_comsubid, 100, 0, 8]), intArg2);
    ifSetOp(10, "Examine", intArg2);
    ifSetOpBase("<col=ff9040>" + ocName(intArg0) + "</col>", intArg2);
    ifSetOnOp(hook(cs2_4600, "is", [event_opindex, strArg0]), intArg2);
}
