/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_896

function cs2_896(): void {
    let int0: number = 116 / 12;
    let int1: number = int0 * varbit_easter08_incubator_water;
    let int2: number = int0 * varbit_easter08_incubator_coal;

    ifSetPosition(ifGetX(Component.interface_717.component_717_8), 122 + (116 - int1), 0, 0, Component.interface_717.component_717_8);
    ifSetPosition(ifGetX(Component.interface_717.component_717_7), 122 + (116 - int2), 0, 0, Component.interface_717.component_717_7);
    ifSetSize(27, int1, 0, 0, Component.interface_717.component_717_8);
    ifSetSize(27, int2, 0, 0, Component.interface_717.component_717_7);
}
