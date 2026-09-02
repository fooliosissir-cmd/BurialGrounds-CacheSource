/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5104

function cs2_5104(intArg0: number, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    ifSetHide(true, intArg1);
    ifSetHide(false, intArg2);

    if (intArg0 == 1) {
        ifSetText("Click to add" + "<br>" + "clan relationship", intArg3);
        ifSetOp(1, "Add", intArg4);
        ifSetHide(true, intArg5);
    } else {
        ifSetText("No clan set", intArg3);
        ifClearops(intArg4);
        ifSetHide(false, intArg5);
    }
}
