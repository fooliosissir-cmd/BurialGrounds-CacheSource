/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2702

function cs2_2702(intArg0: boolean, intArg1: component, intArg2: component): void {
    if (intArg0 == true) {
        cs2_1166(intArg1);
        ifSetColour(colour(0xFFFFFF), intArg2);
    } else {
        cs2_1151(intArg1);
        ifSetColour(colour(0xFF981F), intArg2);
    }
}
