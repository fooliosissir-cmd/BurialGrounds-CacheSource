/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2263

function cs2_2263(intArg0: component, intArg1: number, strArg0: string, strArg1: string): void {
    if (intArg1 != 1) {
        ifSetOp(1, "Make 1 " + strArg1 + "(" + tostring(intArg1) + ") ", intArg0);
        ifSetOp(2, "Make 5 " + strArg1 + "(" + tostring(intArg1 * 5) + ")", intArg0);
        ifSetOp(3, "Make X " + strArg1, intArg0);
        ifSetOp(4, "Make All " + strArg1, intArg0);
        return;
    }
    ifSetOp(1, "Make 1 " + strArg0, intArg0);
    ifSetOp(2, "Make 5 " + strArg1, intArg0);
    ifSetOp(3, "Make X " + strArg1, intArg0);
    ifSetOp(4, "Make All " + strArg1, intArg0);
}
