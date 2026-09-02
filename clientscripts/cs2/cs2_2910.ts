/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2910

function cs2_2910(intArg0: component, intArg1: component): void {
    if (compare(ifGetText(intArg1), "Hide") == 0) {
        ifSetOnTimer(hook(ii_resize_if, "1iiiI", [false, 20, ifGetHeight(ifGetLayer(intArg0)) - 20, 0, intArg0]), intArg0);
        ifSetText("Show", intArg1);
        ifSetOp(1, "Show", intArg1);
    } else {
        ifSetOnTimer(hook(ii_resize_if, "1iiiI", [true, 20, ifGetHeight(ifGetLayer(intArg0)) - 20, 0, intArg0]), intArg0);
        ifSetText("Hide", intArg1);
        ifSetOp(1, "Hide", intArg1);
    }
}
