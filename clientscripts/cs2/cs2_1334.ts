/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1334

function cs2_1334(intArg0: component, strArg0: string, intArg1: boolean): void {
    if (intArg0 != -1) {
        if (intArg1 == true) {
            ifSetText("<u=91b1f4>" + strArg0 + "</u>", intArg0);
            ifSetColour(colour(0x91B1F4), intArg0);
        } else {
            ifSetText("<u=2c6ff8>" + strArg0 + "</u>", intArg0);
            ifSetColour(colour(0x2C6FF8), intArg0);
        }
    }
}
