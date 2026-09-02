/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,colour_picker_get_colour]

function colour_picker_get_colour(intArg0: component, intArg1: component, intArg2: component): void {
    ifSetColour(hsvtorgb(varp_colour_picker_colour), intArg2);
    let int3: number = ifGetHeight(intArg1);
    let int4: number = 1;

    if (varbit_colour_picker_h_varp > colour(0x000000)) {
        int4 = max(min(int3 - varbit_colour_picker_h_varp * 2, int3), 0);
    }
    cs2_5168(int4);
    let int5: number = ifGetHeight(intArg0);
    let int6: number = 0;

    if (varbit_colour_picker_s_varp > 0) {
        int6 = max(min(int5 - varbit_colour_picker_s_varp * (int5 / 8), int5), 0);
        int6 = max(min(int6 - int5 / 16, int5), 0);
    }
    let int7: number = 0;

    if (varbit_colour_picker_l_varp > 0) {
        int7 = max(min(varbit_colour_picker_l_varp * (int5 / 128), int5), 0);
    }
    ifSetColour(varbit_colour_picker_h_varp, intArg0);
    cs2_5167(int7, int6);
}
