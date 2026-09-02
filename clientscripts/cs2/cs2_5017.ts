/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5017

function cs2_5017(intArg0: component, intArg1: component, intArg2: graphic, intArg3: graphic, intArg4: number, intArg5: number, intArg6: number): void {
    ifSetGraphic(intArg2, intArg0);
    ifSetGraphic(intArg3, intArg1);

    if (intArg6 >= 5) {
        ifSetColour(hsvtorgb(intArg4), intArg0);
        ifSetColour(hsvtorgb(intArg5), intArg1);
    } else {
        ifSetColour(hsvtorgb(6716), intArg0);
        ifSetColour(hsvtorgb(6716), intArg1);
    }
}
