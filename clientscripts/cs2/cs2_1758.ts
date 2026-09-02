/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1758

function cs2_1758(intArg0: component, intArg1: component): void {
    if (varc_218 > 0) {
        ifSetHide(false, intArg0);
    } else {
        ifSetHide(true, intArg0);
    }
    ifSetText(tostring(varc_218), intArg1);
}
