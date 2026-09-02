/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2369

function cs2_2369(intArg0: component, intArg1: graphic, intArg2: number): void {
    let int3: number = ifGetScrollX(Component.interface_905.component_905_13);

    ifSetScrollPos(ifGetScrollX(Component.interface_905.component_905_13) + intArg2, 0, Component.interface_905.component_905_13);

    if (int3 != ifGetScrollX(Component.interface_905.component_905_13)) {
        ifSetGraphic(intArg1, intArg0);
    }
    cs2_2370();
}
