/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,csi_jury_tooltip]

function csi_jury_tooltip(intArg0: component, intArg1: component, intArg2: number): void {
    if (ring_of_charos_check() == 1) {
        cs2_569(intArg0, -1, intArg1, cs2_3443(intArg2), 50, 150);
    } else {
        cs2_569(intArg0, -1, intArg1, "A member of the Jury.", 50, 150);
    }
}
