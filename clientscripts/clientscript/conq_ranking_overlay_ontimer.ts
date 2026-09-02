/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,conq_ranking_overlay_ontimer]

function conq_ranking_overlay_ontimer(intArg0: component): void {
    if (ifGetTrans(intArg0) > 0) {
        ifSetTrans(max(ifGetTrans(intArg0) - 1, 0), intArg0);
    } else {
        ifSetOnTimer(noHook(""), intArg0);
    }
}
