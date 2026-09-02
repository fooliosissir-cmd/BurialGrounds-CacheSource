/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,set_spinner]

function set_spinner(intArg0: number, intArg1: number, intArg2: number, intArg3: component): void {
    ifSetOnTimer(hook(spinner, "iiiI", [intArg0, intArg1, intArg2, intArg3]), intArg3);
}
