/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,boardgames_status]

function boardgames_status(intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    ifSetText(varcstr_143, intArg0);
    ifSetText(varcstr_144, intArg1);
    boardgames_status_output(intArg2, varcstr_145, intArg3);
}
