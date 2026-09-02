/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5183

function cs2_5183(intArg0: number, intArg1: number, intArg2: number, intArg3: number): number {
    varp_colour_picker_colour = intArg0;
    varbit_colour_picker_h_varp = min(63, max(0, varbit_colour_picker_h_varp + intArg1));
    varbit_colour_picker_s_varp = min(7, max(0, varbit_colour_picker_s_varp + intArg2));
    varbit_colour_picker_l_varp = min(127, max(0, varbit_colour_picker_l_varp + intArg3));
    return varp_colour_picker_colour;
}
