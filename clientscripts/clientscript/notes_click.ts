/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,notes_click]

function clientscript_notes_click(intArg0: number, intArg1: number): void {
    if (intArg0 != 1) {
        return;
    }

    if (intArg1 != -1) {
        if (intArg1 == varp_notes_selected) {
            varp_notes_selected = -1;
        } else {
            varp_notes_selected = intArg1;
        }
    }
    proc_notes_click(1);
}
