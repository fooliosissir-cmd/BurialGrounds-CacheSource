/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,scrollbar_vertical_jump_2]

function scrollbar_vertical_jump_2(intArg0: component, intArg1: component, intArg2: component, intArg3: number): void {
    if (ccFind(intArg0, 1) == 1) {
        ccDragpickup(0, ccGetHeight() / 2);
    }
}
