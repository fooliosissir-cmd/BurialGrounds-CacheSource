/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5260

function cs2_5260(intArg0: number): void {
    let int1: component = Component.interface_1133.component_1133_2;

    if (ifGetHeight(int1) >= intArg0) {
        ifSetSize(ifGetWidth(int1), intArg0, 0, 0, int1);
        ifSetOnTimer(noHook(""), int1);
    } else {
        ifSetSize(ifGetWidth(int1), ifGetHeight(int1) + 1, 0, 0, int1);
    }
}
