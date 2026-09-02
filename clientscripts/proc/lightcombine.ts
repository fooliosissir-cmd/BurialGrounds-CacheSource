/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lightcombine]

function lightcombine(intArg0: colour, intArg1: colour): colour {
    let [int2, int3, int4] = hex_to_rgb(intArg0);
    let [int5, int6, int7] = hex_to_rgb(intArg1);
    int2 = int2 + int5;
    int3 = int3 + int6;
    int4 = int4 + int7;
    let int8: number = max(int2, max(int3, int4));
    int5 = scale_round(255, int8, int2);
    int6 = scale_round(255, int8, int3);
    int7 = scale_round(255, int8, int4);
    return rgb_to_hex(int5, int6, int7);
}
