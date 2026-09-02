/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stats_statbase]

function stats_statbase(intArg0: component, intArg1: stat): void {
    ifSetText(tostring(statBase(intArg1)), intArg0);
}
