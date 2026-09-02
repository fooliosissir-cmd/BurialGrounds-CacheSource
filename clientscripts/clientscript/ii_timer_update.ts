/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ii_timer_update]

function ii_timer_update(intArg0: component, intArg1: component): void {
    if (varbit_ii_affinity_time_left == 0) {
        ifSetHide(true, intArg0);
    } else if (varbit_ii_affinity_time_left < 5) {
        ifSetText("<lt>" + "1 min", intArg1);
    } else {
        ifSetText(tostring((varbit_ii_affinity_time_left + 4) / 5) + " min", intArg1);
    }
}
