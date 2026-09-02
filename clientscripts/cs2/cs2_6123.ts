/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6123

function cs2_6123(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: number = ifGetY(intArg0);

    if (int3 > intArg1) {
        int3 = int3 - intArg2;
        if (int3 <= intArg1) {
            int3 = intArg1;
            ifSetOnTimer(noHook(""), intArg0);
        }
    } else {
        int3 = int3 + intArg2;
        if (int3 >= intArg1) {
            int3 = intArg1;
            ifSetOnTimer(noHook(""), intArg0);
        }
    }
    ifSetPosition(ifGetX(intArg0), int3, 0, 0, intArg0);
}
