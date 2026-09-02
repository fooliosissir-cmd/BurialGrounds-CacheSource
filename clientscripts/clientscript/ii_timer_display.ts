/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ii_timer_display]

function ii_timer_display(intArg0: component): void {
    if (varbit_ii_affinity_time_left == 0) {
        ifSetHide(true, intArg0);
    } else {
        ifSetHide(false, intArg0);
    }
}
