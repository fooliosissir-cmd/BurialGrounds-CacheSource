/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,zep_mouse_leave]

function zep_mouse_leave(intArg0: component, intArg1: component): void {
    ifSetColour(colour(0x2D2406), intArg0);

    if (intArg1 != -1) {
        ifSetColour(colour(0x2D2406), intArg1);
    }
}
