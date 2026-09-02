/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,warguild_defence_select]

function clientscript_warguild_defence_select(intArg0: number): void {
    varbit_warguild_defence_type = intArg0;
    proc_warguild_defence_select();
}
