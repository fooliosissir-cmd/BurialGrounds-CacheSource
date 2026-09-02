/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2356

function cs2_2356(intArg0: number): void {
    let int1: number = ifGetWidth(Component.interface_905.component_905_5);
    let int2: number = 0;

    if (int1 < intArg0) {
        int2 = int1 + 9;
        if (int2 >= intArg0) {
            ifSetSize(intArg0 + 5, 0, 0, 1, Component.interface_916.component_916_7);
            ifSetSize(intArg0, 0, 0, 1, Component.interface_905.component_905_5);
            ifSetOnTimer(noHook(""), Component.interface_916.component_916_26);
            return;
        }
        ifSetSize(int2 + 5, 0, 0, 1, Component.interface_916.component_916_7);
        ifSetSize(int2, 0, 0, 1, Component.interface_905.component_905_5);
    } else {
        int2 = int1 - 9;
        if (int2 <= intArg0) {
            ifSetSize(intArg0 + 5, 0, 0, 1, Component.interface_916.component_916_7);
            ifSetSize(intArg0, 0, 0, 1, Component.interface_905.component_905_5);
            ifSetOnTimer(noHook(""), Component.interface_916.component_916_26);
            return;
        }
        ifSetSize(int2 + 5, 0, 0, 1, Component.interface_916.component_916_7);
        ifSetSize(int2, 0, 0, 1, Component.interface_905.component_905_5);
    }
}
