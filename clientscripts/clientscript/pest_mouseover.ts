/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,pest_mouseover]

function pest_mouseover(intArg0: component, intArg1: number): void {
    if (varp_if1 != intArg1) {
        ifSetText("<col=ff981f>" + removetags(ifGetText(intArg0)) + "</col>", intArg0);
    } else {
        ifSetText(removetags(ifGetText(intArg0)), intArg0);
    }
}
