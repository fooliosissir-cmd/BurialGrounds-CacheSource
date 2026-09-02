/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5641

function cs2_5641(intArg0: component, intArg1: number): void {
    hookMouseEnter(hook(cs2_5642, "Iii", [intArg0, intArg1, 1]), intArg0);
    hookMouseExit(hook(cs2_5642, "Iii", [intArg0, intArg1, 0]), intArg0);
}
