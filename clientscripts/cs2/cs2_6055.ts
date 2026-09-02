/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6055

function cs2_6055(intArg0: component, intArg1: number): void {
    let int2: number = ifGetWidth(intArg0);
    let int3: number = 0;

    if (intArg1 == 0) {
        int3 = min(223, int2 + 12);
        if (int3 == 223) {
            ifSetOnTimer(noHook(""), intArg0);
        }
    } else {
        int3 = max(5, int2 - 12);
        if (int3 == 5) {
            ifSetOnTimer(noHook(""), intArg0);
        }
    }
    ifSetSize(int3, ifGetHeight(intArg0), 0, 0, intArg0);
}
