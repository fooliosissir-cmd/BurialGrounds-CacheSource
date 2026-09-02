/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_720

function cs2_720(intArg0: component, intArg1: component, intArg2: number): void {
    if (ccFind(intArg0, 3) == 1) {
        ccDragpickup(0, ccGetHeight() / 2);
    }
}
