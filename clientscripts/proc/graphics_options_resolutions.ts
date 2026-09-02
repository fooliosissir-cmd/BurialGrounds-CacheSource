/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_resolutions]

function graphics_options_resolutions(intArg0: number): string {
    let [int1, int2] = fullScreenGetMode(intArg0);
    return tostring(int1) + "x" + tostring(int2);
}
