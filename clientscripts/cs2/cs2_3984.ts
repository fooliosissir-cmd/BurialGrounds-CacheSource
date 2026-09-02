/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3984

function cs2_3984(intArg0: component, intArg1: struct): void {
    let int2: colour = colour(0x000000);
    let int3: colour = colour(0x000000);
    let int4: graphic = -1;

    if (intArg0 != -1 && intArg1 != -1) {
        int2 = structParam(intArg1, Param.rs3tli_button_text_colour);
        int3 = structParam(intArg1, Param.aif_button_text_border_colour);
        int4 = structParam(intArg1, Param.rs3tli_button_text_font);
        cs2_4211(intArg0, int4, int2, int3);
    }
}
