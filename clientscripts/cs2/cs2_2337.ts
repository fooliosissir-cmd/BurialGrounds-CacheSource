/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2337

function cs2_2337(intArg0: component): void {
    if (getWindowMode() >= 2) {
        ifSetPosition(ifGetWidth(Component.interface_746.component_746_14) + 10, 10, 2, 0, intArg0);
    } else {
        ifSetPosition(10, 10, 2, 0, intArg0);
    }
}
