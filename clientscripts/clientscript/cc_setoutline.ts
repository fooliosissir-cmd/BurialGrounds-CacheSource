/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,cc_setoutline]

function cc_setoutline(intArg0: component, intArg1: number, intArg2: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetOutline(intArg2);
    }
}
