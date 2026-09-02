/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,rand_interface_update_position]

function proc_rand_interface_update_position(): void {
    if (getWindowMode() <= 1) {
        ifSetPosition(0, 0, 1, 1, Component.interface_933.component_933_1);
        return;
    }
    let int0: number = (ifGetWidth(Component.interface_933.component_933_0) - ifGetWidth(Component.interface_933.component_933_1)) / 2;
    let int1: number = (ifGetHeight(Component.interface_933.component_933_0) - ifGetHeight(Component.interface_933.component_933_1)) / 2;
    ifSetPosition(max(int0, 223), max(int1, 165), 2, 2, Component.interface_933.component_933_1);
}
