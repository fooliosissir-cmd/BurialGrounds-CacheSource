/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2919

function cs2_2919(intArg0: boolean, intArg1: number): void {
    let int2: number = detailGetActiveToolkit();

    if (intArg0 == false) {
        proc_graphics_options_rebuild(int2, getWindowMode(), ...graphics_options_reviewoptions(int2), intArg1);
    } else {
        cs2_3387(int2, getWindowMode(), ...graphics_options_reviewoptions(int2), intArg1);
    }
}
