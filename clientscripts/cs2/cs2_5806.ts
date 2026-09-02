/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5806

function cs2_5806(): void {
    if (ifGetHide(Component.interface_917.component_917_162) == 1) {
        ifSetHide(false, Component.interface_917.component_917_162);
        ifSetHide(true, Component.interface_917.component_917_163);
    } else {
        ifSetHide(true, Component.interface_917.component_917_162);
        ifSetHide(false, Component.interface_917.component_917_163);
    }
}
