/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,cc_text_colour_swapper]

function cc_text_colour_swapper(intArg0: component, intArg1: number, intArg2: colour): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetColour(intArg2);
    }
}
