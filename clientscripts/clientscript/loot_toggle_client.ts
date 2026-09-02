/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,loot_toggle_client]

function loot_toggle_client(intArg0: number, intArg1: component): void {
    if (intArg0 != 1) {
        return;
    }
    ifSetGraphic(Graphic.graphic_1071, intArg1);
}
