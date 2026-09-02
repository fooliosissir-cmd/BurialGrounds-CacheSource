/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5052

function cs2_5052(intArg0: component, intArg1: boolean): void {
    if (ccFind(intArg0, 3) == 1) {
        if (intArg1 == true) {
            ccDragpickup(0, ccGetHeight() / 2);
        } else {
            ccDragpickup(ccGetWidth() / 2, 0);
        }
    }
}
