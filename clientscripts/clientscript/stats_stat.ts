/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stats_stat]

function stats_stat(intArg0: component, intArg1: stat): void {
    ifSetText(tostring(stat(intArg1)), intArg0);
}
