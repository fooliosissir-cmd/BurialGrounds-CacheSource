/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,scrollbar_vertical_jump]

function scrollbar_vertical_jump(intArg0: component, intArg1: component, intArg2: number): void {
    if (ccFind(intArg0, 1) == 1) {
        ccDragpickup(0, ccGetHeight() / 2);
    }
}
