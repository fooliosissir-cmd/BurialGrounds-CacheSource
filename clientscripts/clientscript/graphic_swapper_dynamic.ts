/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,graphic_swapper_dynamic]

function graphic_swapper_dynamic(intArg0: component, intArg1: number, intArg2: graphic): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetGraphic(intArg2);
    }
}
