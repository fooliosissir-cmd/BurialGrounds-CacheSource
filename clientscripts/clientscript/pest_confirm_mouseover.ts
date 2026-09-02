/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,pest_confirm_mouseover]

function pest_confirm_mouseover(intArg0: component): void {
    if (varp_if1 > 0) {
        ifSetTrans(255, intArg0);
    } else {
        ifSetTrans(200, intArg0);
    }
}
