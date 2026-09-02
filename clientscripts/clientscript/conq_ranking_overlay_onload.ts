/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,conq_ranking_overlay_onload]

function conq_ranking_overlay_onload(intArg0: component): void {
    ifSetTrans(255, intArg0);
    ifSetOnTimer(hook(conq_ranking_overlay_ontimer, "I", [event_com]), intArg0);
    ifSetText("Conquest Ranking: " + tostring(varp_1875), intArg0);
}
