/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,agilityarena_colour]

function agilityarena_colour(intArg0: component, intArg1: number): void {
    if (invTotal(Inv.inv, Obj.obj_2996) >= intArg1) {
        ifSetColour(colour(0xFF981F), intArg0);
    } else {
        ifSetColour(colour(0x77736A), intArg0);
    }
}
