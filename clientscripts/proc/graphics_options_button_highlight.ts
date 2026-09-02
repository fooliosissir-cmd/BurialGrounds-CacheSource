/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_button_highlight]

function proc_graphics_options_button_highlight(intArg0: component, intArg1: graphic, intArg2: component, intArg3: graphic, intArg4: component, intArg5: graphic): void {
    if (intArg0 != -1) {
        ifSetGraphic(intArg1, intArg0);
    }

    if (intArg2 != -1) {
        ifSetGraphic(intArg3, intArg2);
    }

    if (intArg4 != -1) {
        ifSetGraphic(intArg5, intArg4);
    }
}
