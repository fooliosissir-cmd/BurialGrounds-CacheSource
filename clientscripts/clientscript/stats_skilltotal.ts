/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stats_skilltotal]

function stats_skilltotal(intArg0: component): void {
    let int1: number = skilltotal();

    ifSetText("Total level: " + tostring(int1), intArg0);
}
