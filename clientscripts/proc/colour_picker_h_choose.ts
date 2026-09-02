/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,colour_picker_h_choose]

function colour_picker_h_choose(intArg0: component, intArg1: component, intArg2: component, intArg3: number, intArg4: number): void {
    let int5: number = ifGetHeight(intArg1);
    let int6: colour = (int5 - intArg4) * 64 / int5;

    ifSetColour(int6, intArg0);
    varbit_colour_picker_h_varp = int6 % 64;
    cs2_5168(intArg4);
    ifSetColour(hsvtorgb(varp_colour_picker_colour), intArg2);
}
