/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6047

function cs2_6047(intArg0: component, intArg1: number): void {
    let int2: number = 8;
    let int3: number = 118;
    let int4: number = min(intArg1 + int2, int3);

    if (int4 == int3) {
        ifSetOnTimer(noHook(""), intArg0);
    } else {
        ifSetOnTimer(hook(cs2_5920, "Ii", [event_com, int4]), intArg0);
    }
    ifSetPosition(int4, -16, 1, 1, intArg0);
}
