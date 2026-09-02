/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,create_resize]

function proc_create_resize(): void {
    if (getWindowMode() < 2) {
        ifSetPosition(-85, 25, 1, 1, Component.interface_673.component_673_32);
        ifSetPosition(-85, 25, 1, 1, Component.interface_673.component_673_37);
    } else {
        ifSetPosition(-85, 0, 1, 1, Component.interface_673.component_673_32);
        ifSetPosition(-85, 0, 1, 1, Component.interface_673.component_673_37);
    }
}
