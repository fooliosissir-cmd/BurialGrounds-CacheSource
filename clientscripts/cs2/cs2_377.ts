/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_377

function cs2_377(intArg0: component, intArg1: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccDelete();
    }

    if (ccFind(intArg0, intArg1 + 1) == 1) {
        ccDelete();
    }

    if (ccFind(intArg0, intArg1 + 2) == 1) {
        ccDelete();
    }

    if (ccFind(intArg0, intArg1 + 3) == 1) {
        ccDelete();
    }

    if (ccFind(intArg0, intArg1 + 4) == 1) {
        ccDelete();
    }

    if (ccFind(intArg0, intArg1 + 5) == 1) {
        ccDelete();
    }
    playerdesign4_tooltip_clear();
}
