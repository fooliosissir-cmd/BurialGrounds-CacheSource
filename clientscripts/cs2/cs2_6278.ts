/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6278

function cs2_6278(intArg0: number, intArg1: component, intArg2: component): void {
    if (intArg0 == 0) {
        ifSetText("- ACTIVE -", intArg1);
        ifSetColour(colour(0xFF0000), intArg2);
        ifSetTrans(200, intArg2);
    } else if (intArg0 == 1) {
        ifSetText("Activate", intArg1);
        ifSetColour(colour(0x9D4E24), intArg2);
        ifSetTrans(200, intArg2);
    } else if (intArg0 == 2) {
        ifSetText("Buy", intArg1);
    } else if (intArg0 == 3) {
        ifSetText("Bought", intArg1);
        ifSetColour(colour(0x9D4E24), intArg2);
        ifSetTrans(200, intArg2);
    } else if (intArg0 == 4) {
        ifSetText("Locked", intArg1);
    }
}
