/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4606

function cs2_4606(intArg0: component, intArg1: number, intArg2: component, intArg3: number, intArg4: number): void {
    let int5: number = ifGetHeight(intArg0);
    let int6: number = (int5 - intArg4) * 8 / int5;
    let int7: number = intArg3 * 128 / ifGetWidth(intArg0);

    varbit_9259 = int6 % 8;
    varbit_9260 = int7 % 128;
    cs2_4609(intArg3, intArg4);
    ifSetColour(hsvtorgb(varp_skillcape_colour_interface), intArg2);
}
