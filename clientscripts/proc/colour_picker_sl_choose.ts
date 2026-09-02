/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,colour_picker_sl_choose]

function colour_picker_sl_choose(intArg0: component, intArg1: number, intArg2: component, intArg3: number, intArg4: number): void {
    let int5: number = ifGetHeight(intArg0);
    let int6: number = (int5 - intArg4) * 8 / int5;
    let int7: number = intArg3 * 128 / ifGetWidth(intArg0);

    varbit_colour_picker_s_varp = int6 % 8;
    varbit_colour_picker_l_varp = int7 % 128;
    cs2_5167(intArg3, intArg4);
    ifSetColour(hsvtorgb(varp_colour_picker_colour), intArg2);
}
