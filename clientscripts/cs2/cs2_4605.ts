/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4605

function cs2_4605(intArg0: component, intArg1: component, intArg2: component, intArg3: number, intArg4: number): void {
    let int5: number = ifGetHeight(intArg1);
    let int6: colour = (int5 - intArg4) * 64 / int5;

    ifSetColour(int6, intArg0);
    varbit_9258 = int6 % 64;
    cs2_4610(intArg4);
    ifSetColour(hsvtorgb(varp_skillcape_colour_interface), intArg2);
}
