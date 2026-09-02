/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,sum1_overlay_init]

function sum1_overlay_init(intArg0: component): void {
    if (varbit_sum1_quest < 80) {
        ifSetOnTimer(hook(cs2_709, "I", [intArg0]), intArg0);
    } else if (varbit_sum2_quest < 35) {
        ifSetOnTimer(hook(cs2_709, "I", [intArg0]), intArg0);
    }
}
