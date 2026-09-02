/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dom_text_colour_swapper]

function dom_text_colour_swapper(intArg0: component, intArg1: number): void {
    if (varc_dom_free_current_tab_client == intArg1) {
        ifSetColour(colour(0xFFFFFF), intArg0);
    } else {
        ifSetColour(colour(0xF5B241), intArg0);
    }
}
