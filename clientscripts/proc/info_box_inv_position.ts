/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,info_box_inv_position]

function info_box_inv_position(intArg0: number, intArg1: number, intArg2: number, intArg3: number): void {
    let int4: number = ifGetWidth(Component.interface_746.component_746_32) - (intArg2 + intArg0 / 2 + 42);
    let int5: number = ifGetHeight(Component.interface_746.component_746_32) - intArg3;

    ifSetSize(intArg0, intArg1, 0, 0, Component.interface_746.component_746_46);
    int4 = max(int4, 0);
    int5 = max(int5, 0);
    ifSetPosition(int4, int5, 2, 2, Component.interface_746.component_746_46);
}
