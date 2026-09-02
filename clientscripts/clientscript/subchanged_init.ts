/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,subchanged_init]

function subchanged_init(intArg0: number): void {
    ifSetonsubchange(hook(clientscript_subchanged, "", []), intArg0);
    proc_subchanged();
}
