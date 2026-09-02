/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2577

function cs2_2577(intArg0: component, intArg1: number, intArg2: number): void {
    if (pouch_total(Obj.coins, intArg1) == 0) {
        ifSetColour(colour(0xCC0000), intArg0);
    } else if (statBase(22) < intArg2) {
        ifSetColour(colour(0xCCCC00), intArg0);
    } else {
        ifSetColour(colour(0x00CC00), intArg0);
    }
}
