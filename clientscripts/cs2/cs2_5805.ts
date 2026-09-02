/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5805

function cs2_5805(): void {
    if (ifGetHide(Component.interface_917.component_917_160) == 1) {
        ifSetHide(false, Component.interface_917.component_917_160);
        ifSetHide(true, Component.interface_917.component_917_161);
    } else {
        ifSetHide(true, Component.interface_917.component_917_160);
        ifSetHide(false, Component.interface_917.component_917_161);
    }
}
