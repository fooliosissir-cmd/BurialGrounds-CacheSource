/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,graphic_swapper]

function graphic_swapper(intArg0: component, intArg1: graphic): void {
    ifSetGraphic(gameframe_skin_graphic(intArg1), intArg0);
}
