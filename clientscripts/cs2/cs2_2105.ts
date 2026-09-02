/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2105

function cs2_2105(intArg0: component, intArg1: component): void {
    ifSetOnTimer(hook(cs2_2106, "IIiiii", [intArg0, intArg1, ifGetX(intArg1), ifGetY(intArg1), 0, 0]), intArg0);
}
