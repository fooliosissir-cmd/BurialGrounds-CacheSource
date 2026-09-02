/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5808

function cs2_5808(): void {
    if (ifGetHide(Component.interface_917.component_917_170) == 1) {
        ifSetHide(false, Component.interface_917.component_917_170);
        ifSetHide(true, Component.interface_917.component_917_171);
    } else {
        ifSetHide(true, Component.interface_917.component_917_170);
        ifSetHide(false, Component.interface_917.component_917_171);
    }
}
