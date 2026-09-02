/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1137

function cs2_1137(intArg0: component, intArg1: component): void {
    let str0: string = "Special Attack (" + tostring(varp_300 / 10) + "%)";

    if (varbit_fremsaga_current_saga == 3 && varbit_11084 == 1) {
        str0 = "Portal Energy (" + tostring(varp_300 / 10) + "%)";
    }
    proc_aif_progressbar_set(scale(varp_300, 1000, 100), intArg0, intArg1);
    let int2: colour = colour(0xD5D9D3);

    if (varp_sa_attack > 0) {
        int2 = colour(0xFF981F);
    }
    cs2_4212(intArg1, str0, Graphic.verdana_11pt_regular, int2, colour(0x000000));
}
