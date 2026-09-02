/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2135

function cs2_2135(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: number = ifGetX(intArg0);
    let int4: number = ifGetY(intArg0);

    if (intArg1 >= 0 && intArg1 <= ifGetWidth(intArg0) / 2) {
        int3 = int3 - (random(2) + 2);
    } else if (intArg1 <= ifGetWidth(intArg0)) {
        int3 = int3 + random(2) + 2;
    }

    if (intArg2 >= 0 && intArg2 <= ifGetHeight(intArg0) / 2) {
        int4 = int4 - (random(2) + 2);
    } else if (intArg2 <= ifGetHeight(intArg0)) {
        int4 = int4 + random(2) + 2;
    }
    int3 = max(int3, 0);
    int4 = max(int4, 0);
    int3 = min(int3, ifGetWidth(ifGetLayer(intArg0)) - ifGetWidth(intArg0));
    int4 = min(int4, ifGetHeight(ifGetLayer(intArg0)) - ifGetHeight(intArg0));
    ifSetPosition(int3, int4, 0, 0, intArg0);
}
