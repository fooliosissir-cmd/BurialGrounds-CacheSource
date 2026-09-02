/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_init]

function proc_graphics_options_init(intArg0: number): void {
    let int1: number = detailGetActiveToolkit();

    proc_graphics_options_rebuild(int1, getWindowMode(), ...graphics_options_reviewoptions(int1), intArg0);
}
