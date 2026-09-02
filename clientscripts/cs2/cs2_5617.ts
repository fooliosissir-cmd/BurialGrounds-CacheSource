/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5617

function cs2_5617(intArg0: number): void {
    if (ifGetWidth(Component.interface_1198.component_1198_3) >= intArg0) {
        ifSetOnTimer(noHook(""), Component.interface_1198.component_1198_10);
    } else {
        ifSetSize(ifGetWidth(Component.interface_1198.component_1198_3) + 1, ifGetHeight(Component.interface_1198.component_1198_3), 0, 0, Component.interface_1198.component_1198_3);
    }
}
