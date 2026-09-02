/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lightcombine_ratio]

function lightcombine_ratio(intArg0: colour, intArg1: number, intArg2: colour, intArg3: number): colour {
    let [int4, int5, int6] = hex_to_rgb(intArg0);
    let [int7, int8, int9] = hex_to_rgb(intArg2);
    int4 = int4 * intArg1 + int7 * intArg3;
    int5 = int5 * intArg1 + int8 * intArg3;
    int6 = int6 * intArg1 + int9 * intArg3;
    let int10: number = max(int4, max(int5, int6));
    int7 = scale_round(255, int10, int4);
    int8 = scale_round(255, int10, int5);
    int9 = scale_round(255, int10, int6);
    [int4, int5, int6] = rgb_to_hsl(int7, int8, int9);
    return rgb_to_hex(int7, int8, int9);
}
