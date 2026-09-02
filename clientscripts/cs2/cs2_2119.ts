/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2119

function cs2_2119(intArg0: component, intArg1: component): void {
    if (ifGetScrollHeight(intArg0) > 0 && ifGetScrollY(intArg0) < 35) {
        ifSetHide(false, intArg1);
    } else {
        ifSetHide(true, intArg1);
    }
}
