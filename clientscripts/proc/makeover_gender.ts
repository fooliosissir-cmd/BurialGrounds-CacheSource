/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,makeover_gender]

function makeover_gender(intArg0: number, intArg1: component, intArg2: component): void {
    if (intArg0 == 0) {
        ifSetColour(colour(0xFFFFFF), intArg1);
        ifSetTextShadow(true, intArg1);
        ifSetColour(colour(0x000000), intArg2);
        ifSetTextShadow(false, intArg2);
    } else {
        ifSetColour(colour(0xFFFFFF), intArg2);
        ifSetTextShadow(true, intArg2);
        ifSetColour(colour(0x000000), intArg1);
        ifSetTextShadow(false, intArg1);
    }
}
