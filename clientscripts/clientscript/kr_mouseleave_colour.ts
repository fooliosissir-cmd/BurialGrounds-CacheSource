/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,kr_mouseleave_colour]

function kr_mouseleave_colour(intArg0: number, intArg1: component): void {
    if (varbit_kr_tumb_current == intArg0) {
        ifSetColour(colour(0xDD5032), intArg1);
    } else {
        ifSetColour(colour(0x64501E), intArg1);
    }
}
