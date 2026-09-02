/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,xbows_bolts_update]

function proc_xbows_bolts_update(intArg0: component, intArg1: obj): void {
    if (invTotal(Inv.inv, intArg1) > 0) {
        ifSetColour(colour(0x00CC00), intArg0);
    } else {
        ifSetColour(colour(0xFF981F), intArg0);
    }
}
