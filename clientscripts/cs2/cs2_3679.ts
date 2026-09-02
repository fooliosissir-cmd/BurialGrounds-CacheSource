/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3679

function cs2_3679(intArg0: component, intArg1: number): void {
    ifClearops(intArg0);
    ifSetOp(5, "Examine" + "<col=ff9040>", intArg0);
    ifSetOpBase("<col=ff981f>" + enumOp(type_int, type_string, Enum.statue_bag_int2string, intArg1) + " Piece", intArg0);
}
