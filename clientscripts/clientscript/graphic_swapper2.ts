/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,graphic_swapper2]

function graphic_swapper2(intArg0: component, intArg1: graphic, intArg2: component, intArg3: graphic): void {
    ifSetGraphic(intArg1, intArg0);
    ifSetGraphic(intArg3, intArg2);
}
