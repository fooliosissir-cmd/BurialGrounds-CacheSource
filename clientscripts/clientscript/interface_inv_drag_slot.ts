/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,interface_inv_drag_slot]

function interface_inv_drag_slot(intArg0: number, intArg1: component, intArg2: component, intArg3: number): void {
    if (ccFind(intArg1, intArg0) == 1) {
        intArg3 = intArg3 - ifGetScrollY(intArg1);
        if (intArg3 < 10) {
            scrollbar_ondrag_doscroll(intArg2, intArg1, ifGetScrollY(intArg1) - 4, 1);
        }
        if (intArg3 + ccGetHeight() > ifGetHeight(intArg1) - 10) {
            scrollbar_ondrag_doscroll(intArg2, intArg1, ifGetScrollY(intArg1) + 4, 1);
        }
    }
}
