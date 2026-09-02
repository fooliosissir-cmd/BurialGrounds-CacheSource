/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5018

function cs2_5018(intArg0: component, intArg1: component, intArg2: number, intArg3: number, intArg4: number): void {
    if (intArg4 >= 5) {
        ifSetColour(hsvtorgb(intArg2), intArg0);
        ifSetColour(hsvtorgb(intArg3), intArg1);
    } else {
        ifSetColour(hsvtorgb(42550), intArg0);
        ifSetColour(hsvtorgb(39382), intArg1);
    }
}
