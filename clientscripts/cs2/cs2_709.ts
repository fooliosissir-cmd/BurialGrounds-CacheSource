/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_709

function cs2_709(intArg0: component): void {
    if (getWindowMode() >= 2) {
        ifSetSize(ifGetWidth(Component.interface_746.component_746_11), ifGetHeight(Component.interface_746.component_746_11), 0, 0, intArg0);
    } else {
        ifSetSize(ifGetWidth(Component.interface_548.component_548_28), ifGetHeight(Component.interface_548.component_548_28), 0, 0, intArg0);
    }
}
