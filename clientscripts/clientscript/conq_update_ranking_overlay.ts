/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,conq_update_ranking_overlay]

function conq_update_ranking_overlay(intArg0: component): void {
    ifSetText("Conquest Ranking: " + tostring(varp_1875), intArg0);
}
