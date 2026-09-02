/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5615

function cs2_5615(intArg0: component): void {
    let int1: number = clientClock() + 100;

    ifSetOnTimer(hook(cs2_5612, "Iiiiiii", [intArg0, random(63), random(127), random(2), int1, 25, 18]), intArg0);
}
