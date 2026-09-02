/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,crafting_level_hide]

function crafting_level_hide(intArg0: component, intArg1: number): void {
    if (stat(12) >= intArg1 || (varbit_assist_engaged == 1 && varp_assist_stat_crafting >= intArg1)) {
        ifSetHide(false, intArg0);
    } else {
        ifSetHide(true, intArg0);
    }
}
