/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5809

function cs2_5809(): void {
    if (ifGetHide(Component.interface_917.component_917_174) == 1) {
        ifSetHide(false, Component.interface_917.component_917_174);
        ifSetHide(true, Component.interface_917.component_917_175);
    } else {
        ifSetHide(true, Component.interface_917.component_917_174);
        ifSetHide(false, Component.interface_917.component_917_175);
    }
}
