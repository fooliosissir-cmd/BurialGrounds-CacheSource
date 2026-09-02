/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_caller_namechange]

function clientscript_clanwars_caller_namechange(intArg0: component, intArg1: component, intArg2: component): void {
    proc_meslayer_close(12);
    proc_clanwars_caller_namechange(intArg0, intArg1, intArg2);
}
