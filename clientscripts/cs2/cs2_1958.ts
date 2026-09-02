/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1958

function cs2_1958(intArg0: component, intArg1: number): void {
    if (stat(7) >= intArg1) {
        ifSetColour(colour(0x00FF00), intArg0);
    } else {
        ifSetColour(colour(0xFF0000), intArg0);
    }
}
