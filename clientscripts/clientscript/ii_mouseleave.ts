/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ii_mouseleave]

function ii_mouseleave(intArg0: component, intArg1: component): void {
    ifSetText("", intArg1);
    ifSetTrans(0, intArg0);
}
