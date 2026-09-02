/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,graphic_swapper3]

function graphic_swapper3(intArg0: component, intArg1: graphic, intArg2: component, intArg3: graphic, intArg4: component, intArg5: graphic): void {
    ifSetGraphic(intArg1, intArg0);
    ifSetGraphic(intArg3, intArg2);
    ifSetGraphic(intArg5, intArg4);
}
