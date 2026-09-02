/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3285

function cs2_3285(intArg0: number): void {
    ifSetScrollSize(0, intArg0, Component.interface_947.component_947_36);
    ifSetScrollSize(0, intArg0, Component.interface_947.component_947_38);

    if (ifGetScrollHeight(Component.interface_947.component_947_36) < ifGetHeight(Component.interface_947.component_947_36)) {
        ifSetHide(true, Component.interface_947.component_947_47);
    }
}
