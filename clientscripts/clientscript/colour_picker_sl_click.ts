/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,colour_picker_sl_click]

function colour_picker_sl_click(intArg0: component, intArg1: number, intArg2: component, intArg3: number, intArg4: number): void {
    varc_colour_picker_x_last = intArg3;
    varc_colour_picker_y_last = intArg4;
    colour_picker_sl_choose(intArg0, intArg1, intArg2, intArg3, intArg4);
}
